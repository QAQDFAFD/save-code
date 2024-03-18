<template>
	<main class="code-item">
		<a-dropdown :trigger="['contextmenu']">
			<div>
				<div class="flex h-10 border-gray-300 border-solid border-0 border-b-2 p-2">
					<div class="flex-1 text-slate-800 font-bold">{{ props.item.title }}</div>
					<div id="code" class="w-auto" @click="copy">
						<a-tag :color="LanguageColor[props.item.label]">{{
							props.item.label
						}}</a-tag>
					</div>
				</div>
				<div class="p-2 pb-0 text">
					{{ props.item.code }}
				</div>
			</div>
			<template #overlay>
				<a-menu>
					<a-menu-item key="1" @click="deleteItem(props.item.title)">删除</a-menu-item>
					<a-menu-item key="2" @click="lookDetail">查看详情</a-menu-item>
				</a-menu>
			</template>
		</a-dropdown>
		<a-drawer
			:title="props.item.title"
			:closable="false"
			:placement="'bottom'"
			:open="open"
			@close="onClose">
			<h1 class="text-blue-600">&lt;Intro&gt;</h1>
			<p>
				<Viewer :value="props.item.intro"></Viewer>
			</p>
			<h1 class="text-blue-600">&lt;Code&gt;</h1>
			<p class="bg-gray-200 p-2">{{ props.item.code }}</p>
		</a-drawer>
	</main>
</template>

<script setup lang="ts">
import { CodeItemType } from '@renderer/types'
import { LanguageColor } from '@renderer/types'
import { message } from 'ant-design-vue'
import Clipboard from 'clipboard'
import { useCodeItemStore } from '@renderer/store'
import { ref } from 'vue'
import { Viewer } from '@bytemd/vue-next'

const props = defineProps<{ item: CodeItemType }>()

const copy = () => {
	const clipboard = new Clipboard('#code', {
		text: () => props.item.code
	})
	clipboard.on('success', () => {
		message.success('复制成功')
		clipboard.destroy()
	})
	clipboard.on('error', () => {
		message.error('复制失败')
		clipboard.destroy()
	})
}

const codeItemStore = useCodeItemStore()
const deleteItem = (title: string) => {
	codeItemStore.delItem(title)
}

const open = ref<boolean>(false)

const lookDetail = () => {
	open.value = true
}

const onClose = () => {
	open.value = false
}
</script>

<style scoped lang="scss">
.code-item {
	@apply border-2 border-blue-400 rounded border-solid text-sm cursor-pointer duration-300 text-slate-600;
	&:hover {
		transform: scale(1.02);
	}

	.text {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
	}
}
</style>
