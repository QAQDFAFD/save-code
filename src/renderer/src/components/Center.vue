<template>
	<main class="p-4 top">
		<a-input-search
			v-model:value="searchVal"
			placeholder="input search text"
			@search="onSearch">
			<template #enterButton>
				<a-button type="primary">重置</a-button>
			</template>
		</a-input-search>
		<CodeList class="mt-6" :searchVal="searchVal" />
	</main>
</template>

<script setup lang="ts">
import CodeList from './CodeList.vue'

import { ref } from 'vue'

const searchVal = ref('')
const onSearch = () => {
	searchVal.value = ''
}
</script>

<style scoped lang="scss">
.top {
	padding-top: 3rem !important;
}
</style>
