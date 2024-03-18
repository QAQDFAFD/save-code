import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
	interface Window {
		electron: ElectronAPI
		api: {
			shortCut: (channel: string, data: string) => void
			vanish: () => void
		}
	}
}
