<template>
	<Codemirror
		v-model="mirrorStore.mirrorCode"
		placeholder="Code goes here..."
		:style="{ height: '400px' }"
		:autofocus="true"
		:indent-with-tab="true"
		:tab-size="4"
		:extensions="extensions"
		@ready="handleReady"
		@change="codeChange($event)" />
</template>
|

<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { useMirrorStore } from '@renderer/store'

const mirrorStore = useMirrorStore()

type Props = {
	theme: Array<any>
	language: () => void
}

const props = defineProps<Props>()

const extensions = computed(() => {
	const result: any[] = []
	if (props.language) {
		console.log(props.language)
		result.push(props.language()!)
	}
	if (props.theme) {
		result.push(props.theme)
	}
	return result
})

// Codemirror EditorView instance ref
const view = shallowRef()
const handleReady = payload => {
	view.value = payload.view
}

// Status is available at all times via Codemirror EditorView
const getCodemirrorStates = () => {
	const state = view.value.state
	const ranges = state.selection.ranges
	const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
	const cursor = ranges[0].anchor
	const length = state.doc.length
	const lines = state.doc.lines
	// more state info ...
	// return ...
}

const log = console.log

const codeChange = (event: string) => {
	mirrorStore.mirrorCode = event
}
</script>

<style lang="scss" scoped>
:deep(.ant-select-single .ant-select-selector) {
	border-radius: 0;
}
</style>
