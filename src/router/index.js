import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DetailsPage from '@/components/DetailsPage'
import Random from '@/components/Random'
import NotFound from '@/components/NotFound'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/object/:objectId',
			name: 'object',
			component: DetailsPage
		},
		{
			path: '/object',
			redirect: '/'
		},
		{
			path: '/random',
			name: 'random',
			component: Random
		},
		{
			path: '/404',
			component: NotFound
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
})

export default router