<template>
	<main class="code-item">
		<div class="flex h-10 border-gray-300 border-solid border-0 border-b-2 p-2">
			<div class="flex-1">{{ props.item.intro }}</div>
			<div class="w-auto">
				<a-tag :color="LanguageColor[props.item.label]">{{ props.item.label }}</a-tag>
			</div>
		</div>
		<div class="h-15 p-2">
			{{ props.item.code }}
		</div>
	</main>
</template>

<script setup lang="ts">
import { CodeItemType } from '@renderer/types'
import { LanguageColor } from '@renderer/types'

const props = defineProps<{ item: CodeItemType }>()
</script>

<style scoped lang="scss">
.code-item {
	@apply border-2 border-blue-400 rounded border-solid text-sm cursor-pointer hover:scale-105 duration-300 text-slate-600;
}
</style>
