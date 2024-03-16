<template>
	<main>
		<Codemirror />
		<Editor />
		<Button class="mt-2" />
	</main>
</template>

<script setup>
import Editor from '@renderer/components/Editor.vue'
import Codemirror from '@renderer/components/Codemirror.vue'
import Button from '@renderer/components/Button.vue'
</script>

<style lang="scss" scoped></style>
