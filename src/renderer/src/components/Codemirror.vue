<template>
	<div>
		<a-select v-model:value="languageVal" style="width: 200px" placeholder="选择语言">
			<a-select-option value="jack">Jack</a-select-option>
			<a-select-option value="lucy">Lucy</a-select-option>
		</a-select>
		<a-select v-model:value="styleVal" style="width: 200px" placeholder="切换样式">
			<a-select-option value="jack">Jack</a-select-option>
			<a-select-option value="lucy">Lucy</a-select-option>
		</a-select>
	</div>
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

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const code = ref(`console.log('Hello, world!')`)
const extensions = [javascript(), oneDark]

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

const languageVal = ref(null)
const styleVal = ref(null)
</script>

<style lang="scss" scoped>
:deep(.ant-select-single .ant-select-selector) {
	border-radius: 0;
}
</style>
