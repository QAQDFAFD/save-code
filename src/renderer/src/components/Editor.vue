<template>
	<main>
		<Editor :value="content" :plugins="plugins" :locale="zhHans" @change="handleChange" />
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Editor } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'

import zhHans from 'bytemd/locales/zh_Hans'
import 'bytemd/dist/index.css'

console.log(typeof zhHans)

const content = ref('')

const plugins = [gfm()]

const handleChange = (v: string) => {
	content.value = v
}
</script>

<style></style>
