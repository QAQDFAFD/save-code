<template>
	<main>
		<Editor
			:value="editorStore.editorContent"
			:mode="'tab'"
			:placeholder="'Markdown goes here...'"
			:plugins="plugins"
			:locale="zhHans"
			@change="handleChange" />
	</main>
</template>

<script setup lang="ts">
import { Editor } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import { useEditorStore } from '@renderer/store'

import zhHans from 'bytemd/locales/zh_Hans'
import 'bytemd/dist/index.css'

const editorStore = useEditorStore()

const plugins = [gfm()]

const handleChange = (v: string) => {
	editorStore.editorContent = v
}
</script>

<style lang="scss" scoped>
:deep(.bytemd-fullscreen.bytemd) {
	height: calc(100vh - 2rem) !important;
	top: 2rem !important;
	z-index: 100;
}

:deep(.bytemd-toolbar-right) {
	> *:last-child {
		display: none;
	}
}
</style>
