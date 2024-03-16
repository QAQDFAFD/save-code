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
