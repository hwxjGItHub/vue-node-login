import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:"history", 
	routes: [
	{
		path: '*',
		name: 'login',
		component: resolve => require(['../components/Login.vue'], resolve)
	},
	{
		path: '/home',
		name: 'Home',
		component: resolve => require(['../components/Home.vue'], resolve)
	}, 
//	{
//		path: '/search',
//		name: 'search',
//		component: resolve => require(['../components/Search.vue'], resolve)
//	}
	]
})