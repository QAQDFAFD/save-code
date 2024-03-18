import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import Center from '@renderer/components/Center.vue'
import Setting from '@renderer/components/Setting.vue'

const routes = [
	{ name: 'Home', path: '/home', component: Home },
	{
		name: 'Center',
		path: '/:any(.*)+',
		component: Center
	},
	{
		name: 'Setting',
		path: '/setting',
		component: Setting
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
