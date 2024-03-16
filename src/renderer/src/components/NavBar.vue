<template>
	<main class="nav drag">
		<div class="text-blue-400">代码片段</div>
		<section class="flex justify-between gap-2">
			<router-link to="/" class="no-drag router">添加代码</router-link>
			<router-link to="/center" class="no-drag router">代码中心</router-link>
			<router-link to="/setting" class="no-drag router">配置</router-link>
		</section>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
	@apply h-8 w-full text-slate-600 bg-gray-50 text-xs flex justify-between px-3 py-2 fixed top-0 z-10;
}

.router {
	@apply text-slate-600 no-underline;
}
</style>
