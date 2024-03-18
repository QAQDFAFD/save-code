<template>
	<main class="nav drag">
		<div class="text-blue-400">代码片段</div>
		<section class="flex justify-between gap-2">
			<router-link to="/" class="no-drag router">代码中心</router-link>
			<router-link to="/home" class="no-drag router">添加代码</router-link>
			<router-link to="/setting" class="no-drag router">配置</router-link>
			<div class="vanish no-drag" @click="vanish">
				<img src="../assets/images/cancel.svg" alt="" />
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
const vanish = () => {
	window.api.vanish()
}
</script>

<style lang="scss" scoped>
.nav {
	@apply h-8 w-full text-slate-600 bg-gray-50 text-xs flex justify-between px-3 py-2 fixed top-0 z-10;
}

.router {
	@apply text-slate-600 no-underline;
}

.vanish {
	@apply w-4 h-4 cursor-pointer flex items-center;

	img {
		width: 100%;
		height: 100%;
	}
}
</style>
