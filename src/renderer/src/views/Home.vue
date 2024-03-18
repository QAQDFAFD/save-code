<template>
	<main>
		<ToolBar :theme="Object.keys(themes)" :language="Object.keys(language)" />
		<Codemirror :theme="curTheme" :language="curLanguage!" />
		<a-input v-model:value="codeItem.title" placeholder="代码片段名称" />
		<Editor />
		<Button class="mt-2" />
	</main>
</template>

<script setup lang="ts">
import Editor from '@renderer/components/Editor.vue'
import Codemirror from '@renderer/components/Codemirror.vue'
import Button from '@renderer/components/Button.vue'
import ToolBar from '@renderer/components/ToolBar.vue'
import language from '@renderer/codemirror/language'
import * as themes from '@renderer/codemirror/theme'
import { useMirrorStore, useCodeItemStore } from '@renderer/store'
import { computed, ref, watchEffect } from 'vue'

const curLanguage = ref(null)

const mirrorStore = useMirrorStore()

const curTheme = computed(() => themes[mirrorStore.mirrorTheme])

const getLanguage = async () => {
	const module = await language[mirrorStore.mirrorLanguage]()
	const lang = module.default.language
	return lang
}

watchEffect(async () => {
	const lang = await getLanguage()
	curLanguage.value = lang // 更新响应式属性
})

const codeItem = useCodeItemStore()
</script>

<style lang="scss" scoped>
:deep(.ant-select-single .ant-select-selector) {
	border-radius: 0;
}
</style>
