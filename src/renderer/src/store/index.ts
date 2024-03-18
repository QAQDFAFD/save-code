import { CodeItemType } from '@renderer/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { message } from 'ant-design-vue'

export const useCodeItemStore = defineStore(
	'codeItem',
	() => {
		const title = ref<string>('')
		const codeItems = ref<CodeItemType[]>([])
		const addItem = (item: CodeItemType) => {
			return new Promise((resolve, reject) => {
				if (codeItems.value.find(i => i.title === item.title)) {
					message.error('已经存在相关代码')
					reject(false)
				} else {
					codeItems.value.push(item)
					message.success('添加成功')
					resolve(true)
				}
			})
			// if (codeItems.value.find(i => i.title === item.title)) {
			// 	message.error('已经存在相关代码')
			// 	return false
			// }
			// codeItems.value.push(item)
			// message.success('添加成功')
			// return true
		}
		const delItem = (title: string) => {
			const index = codeItems.value.findIndex(i => i.title === title)
			if (index > -1) {
				codeItems.value.splice(index, 1)
				message.success('删除成功')
			}
		}

		return {
			title,
			codeItems,
			addItem,
			delItem
		}
	},
	{
		persist: true
	}
)

export const useMirrorStore = defineStore(
	'mirror',
	() => {
		// const mirrorLanguage = ref<() => void>(() => {})
		const mirrorLanguage = ref<string>('javascript')
		const mirrorTheme = ref<string>('oneDark')
		const mirrorCode = ref<string>('')
		const clearMirrorCode = () => {
			mirrorCode.value = ''
		}
		return {
			mirrorLanguage,
			mirrorTheme,
			mirrorCode,
			clearMirrorCode
		}
	},
	{
		persist: true
	}
)

export const useEditorStore = defineStore(
	'editor',
	() => {
		const editorContent = ref<string>('')
		const clearEditorContent = () => {
			editorContent.value = ''
		}
		return {
			editorContent,
			clearEditorContent
		}
	},
	{
		persist: true
	}
)
