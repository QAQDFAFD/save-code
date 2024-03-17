<template>
	<Codemirror
		v-model="code"
		placeholder="Code goes here..."
		:style="{ height: '400px' }"
		:autofocus="true"
		:indent-with-tab="true"
		:tab-size="4"
		:extensions="extensions"
		@ready="handleReady"
		@change="log('change', $event)"
		@focus="log('focus', $event)"
		@blur="log('blur', $event)" />
</template>
|

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'

console.log('javascript', javascript)

const code = ref(`Hello, world`)

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

// watchEffect(() => {
// 	extensions = [props.language(), props.theme]
// })
</script>

<style lang="scss" scoped>
:deep(.ant-select-single .ant-select-selector) {
	border-radius: 0;
}
</style>
