<template>
	<main>
		<CodeItem v-for="item in items" :key="item.code" :item="item" class="mb-4" />
	</main>
</template>

<script setup lang="ts">
import CodeItem from './CodeItem.vue'

// 模拟数据
const items = [
	{
		code: 'console.log("Hello World!")',
		intro: '打印 Hello World!',
		label: 'JavaScript'
	},
	{
		code: 'print("Hello World!")',
		intro: '打印 Hello World!',
		label: 'Python'
	},
	{
		code: 'fmt.Println("Hello World!")',
		intro: '打印 Hello World!',
		label: 'Go'
	}
]
</script>

<style scoped></style>
