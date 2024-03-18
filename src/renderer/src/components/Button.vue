<template>
	<main class="w-full h-16 flex justify-end items-center gap-2 pr-2">
		<a-button danger size="middle" @click="clear">清空</a-button>
		<a-button type="primary" size="middle" @click="save">保存</a-button>
	</main>
</template>

<script setup lang="ts">
import { useEditorStore, useMirrorStore, useCodeItemStore } from '@renderer/store'
import { message } from 'ant-design-vue'

const editorStore = useEditorStore()
const mirrorStore = useMirrorStore()
const codeItemStore = useCodeItemStore()

const clear = () => {
	editorStore.clearEditorContent()
	mirrorStore.clearMirrorCode()
}

const save = async () => {
	const code = mirrorStore.mirrorCode
	const label = mirrorStore.mirrorLanguage
	const intro = editorStore.editorContent
	const title = codeItemStore.title
	if (code === '' || label === '' || intro === '' || title === '') {
		message.info('请填写完整信息')
		return
	}
	const res = await codeItemStore.addItem({ title, code, label, intro })
	console.log(res)

	if (res) {
		// 清空
		editorStore.clearEditorContent()
		mirrorStore.clearMirrorCode()
		codeItemStore.title = ''
	}
}
</script>

<style scoped></style>
