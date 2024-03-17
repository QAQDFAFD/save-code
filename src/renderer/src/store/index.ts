import { CodeItemType } from '@renderer/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCodeItemStore = defineStore(
	'codeItem',
	() => {
		const codeItems = ref<CodeItemType[]>([])

		return {
			codeItems
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
		return {
			mirrorLanguage,
			mirrorTheme
		}
	},
	{
		persist: true
	}
)
