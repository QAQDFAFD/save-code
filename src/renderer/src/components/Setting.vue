<template>
	<main class="p-4 pt-16">
		<div>
			<h2 class="text-slate-500 mb-4">快捷键配置</h2>
			<div class="mb-6">
				<div class="mb-2 text-slate-600">弹出代码中心</div>
				<a-input-search
					v-model:value="value"
					placeholder="例如：Ctrl + T"
					size="middle"
					@search="onSearch">
					<template #enterButton>
						<a-button type="primary">保存</a-button>
					</template>
				</a-input-search>
			</div>
			<div class="mb-6">
				<div class="mb-2 text-slate-600">弹出 Vue Snippet</div>
				<a-input-search
					v-model:value="value"
					placeholder="例如：Ctrl + T + V"
					size="middle"
					@search="onSearch">
					<template #enterButton>
						<a-button type="primary">保存</a-button>
					</template>
				</a-input-search>
			</div>
			<div class="mb-6">
				<div class="mb-2 text-slate-600">弹出 React Snippet</div>
				<a-input-search
					v-model:value="value"
					placeholder="例如：Ctrl + T + R"
					size="middle"
					@search="onSearch">
					<template #enterButton>
						<a-button type="primary">保存</a-button>
					</template>
				</a-input-search>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const onSearch = (value: string) => {
	console.log(value)
}
</script>

<style scoped></style>
