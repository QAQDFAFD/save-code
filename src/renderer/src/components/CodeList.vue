<template>
	<main>
		<CodeItem v-for="item in items.arr" :key="item.code" :item="item" class="mb-4" />
	</main>
</template>

<script setup lang="ts">
import CodeItem from './CodeItem.vue'
import { useCodeItemStore } from '@renderer/store'
import { defineProps, reactive, watch } from 'vue'

const codeItemStore = useCodeItemStore()

type Props = {
	searchVal: string
}
const props = defineProps<Props>()

import { CodeItemType } from '@renderer/types'

const items = reactive<{ arr: CodeItemType[] }>({
	arr: codeItemStore.codeItems
})

// 同时监听props.serarchVal 和 codeItemStore.codeItems
watch([() => props.searchVal, () => codeItemStore.codeItems], ([searchVal, codeItems]) => {
	if (searchVal === '') {
		items.arr = codeItems
	} else {
		items.arr = codeItems.filter(item => item.title.includes(searchVal))
	}
})
</script>

<style scoped></style>
