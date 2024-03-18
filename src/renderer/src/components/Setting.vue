<template>
	<main class="p-4 top">
		<h2 class="text-slate-500 mb-4">快捷键配置</h2>
		<div class="mb-6">
			<div class="mb-2 text-slate-600">弹出代码中心</div>
			<a-input-search v-model:value="value" placeholder="例如：Ctrl + T" size="middle">
				<template #enterButton>
					<a-button type="primary" @click="save">保存</a-button>
				</template>
			</a-input-search>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useSettingStore } from '@renderer/store'
import { message } from 'ant-design-vue'
import { ref, watch } from 'vue'
// import { ipcRenderer } from 'electron'

const value = ref('')

const settingStore = useSettingStore()

watch(
	() => settingStore.popUp,
	value => {
		console.log(value)
		window.api.shortCut('popUp', value)
	}
)

const save = () => {
	// 先检查是否是合法的快捷键，类似于 Ctrl + T 这样的
	if (value.value === '') {
		message.error('快捷键不能为空')
		return
	}
	// 使用正则表达式检查是否是合法的快捷键
	const reg = /^(ctrl|alt|shift|meta)\s\+\s\w$/i

	if (!reg.test(value.value)) {
		message.error('快捷键格式不正确')
		return
	}
	settingStore.popUp = value.value
	message.success('保存成功')
}
</script>

<style scoped lang="scss">
.top {
	padding-top: 3rem !important;
}
</style>
