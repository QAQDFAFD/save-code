<template>
	<main>
		<a-select
			v-model:value="languageVal"
			style="width: 200px"
			placeholder="选择语言"
			@change="changeLanguage">
			<a-select-option
				v-for="(item, index) in language"
				:key="index"
				:value="item"></a-select-option>
		</a-select>
		<a-select
			v-model:value="styleVal"
			style="width: 200px"
			placeholder="切换样式"
			@change="changeStyle">
			<a-select-option v-for="(item, index) in theme" :key="index" :value="item">
			</a-select-option>
		</a-select>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMirrorStore } from '@renderer/store'

const languageVal = ref<string | null>(null)
const styleVal = ref<string | null>(null)

const mirrorStore = useMirrorStore()
languageVal.value = mirrorStore.mirrorLanguage
styleVal.value = mirrorStore.mirrorTheme
console.log(languageVal.value, styleVal.value)

type Props = {
	theme: string[]
	language: string[]
}

const props = defineProps<Props>()

const changeLanguage = (value: string) => {
	languageVal.value = value
	mirrorStore.mirrorLanguage = value
}
const changeStyle = (value: string) => {
	styleVal.value = value
	mirrorStore.mirrorTheme = value
}
</script>

<style scoped lang="scss">
:deep(.ant-select-single .ant-select-selector) {
	border-radius: 0;
}
</style>
