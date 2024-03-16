<template>
	<main class="flex-col h-full">
		<NavBar></NavBar>
		<router-view class="pt-8 flex-1"></router-view>
		<Versions></Versions>
	</main>
</template>

<script setup lang="ts">
import Versions from '@renderer/components/Versions.vue'
import NavBar from '@renderer/components/NavBar.vue'
</script>

<style lang="scss" scoped></style>
