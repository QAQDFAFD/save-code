import { createRouter, createWebHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import Center from '@renderer/components/Center.vue'
import Setting from '@renderer/components/Setting.vue'

const routes = [
	{ name: 'Home', path: '/', component: Home },
	{
		name: 'Center',
		path: '/center',
		component: Center
	},
	{
		name: 'Setting',
		path: '/setting',
		component: Setting
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router