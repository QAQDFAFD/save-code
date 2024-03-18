import { app, shell, BrowserWindow, globalShortcut, ipcMain, Tray, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 400,
		height: 700,
		x: 1600,
		y: 100,
		frame: false,
		resizable: false,
		autoHideMenuBar: true,
		alwaysOnTop: true,
		...(process.platform === 'linux' ? { icon } : {}),
		webPreferences: {
			preload: join(__dirname, '../preload/index.js'),
			sandbox: false
		}
	})

	mainWindow.webContents.openDevTools()

	mainWindow.on('ready-to-show', () => {
		mainWindow!.show()
	})

	mainWindow.webContents.setWindowOpenHandler(details => {
		shell.openExternal(details.url)
		return { action: 'deny' }
	})

	// HMR for renderer base on electron-vite cli.
	// Load the remote URL for development or the local html file for production.
	if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
		mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
	} else {
		mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
	}

	let tray: Tray | null = null

	const iconPath = join(__dirname, '../../resources/icon.png')

	tray = new Tray(iconPath)

	const contextMenu = Menu.buildFromTemplate([
		{
			label: '退出',
			click: () => {
				mainWindow!.destroy()
				app.quit()
			}
		}
	])

	tray.setToolTip('This is my application.')
	tray.setContextMenu(contextMenu)

	tray.on('click', () => {
		mainWindow!.show()
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	// Set app user model id for windows
	electronApp.setAppUserModelId('com.electron')

	// Default open or close DevTools by F12 in development
	// and ignore CommandOrControl + R in production.
	// see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
	app.on('browser-window-created', (_, window) => {
		optimizer.watchWindowShortcuts(window)
	})

	// IPC test

	createWindow()

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

ipcMain.handle('popUp', (_event, shortcut) => {
	console.log('register-shortcut', shortcut)
	const registered = globalShortcut.register(shortcut, () => {
		if (mainWindow && !mainWindow.isVisible()) {
			mainWindow.show()
		} else {
			console.log(mainWindow, mainWindow?.isVisible())
			console.log('mainWindow is null or not minimized')
		}
	})
	if (!registered) {
		console.log('Failed to register shortcut')
	}
})

ipcMain.handle('vanish', () => {
	if (mainWindow) {
		mainWindow.hide()
	}
})
