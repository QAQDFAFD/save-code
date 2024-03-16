<template>
	<main class="p-4 pt-16">
		<a-input-search
			v-model:value="value"
			placeholder="input search text"
			enter-button
			@search="onSearch" />
		<CodeList class="mt-6" />
	</main>
</template>

<script setup lang="ts">
import CodeList from './CodeList.vue'

import { ref } from 'vue'

const value = ref('')
const onSearch = (value: string) => {
	console.log(value)
}
</script>

<style scoped></style>
