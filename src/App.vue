<template>
	<div id="app">
		<!--<van-tabbar v-model="active" route active-color="#07c160" class="head">
			<van-tabbar-item replace to="/home" icon="home-o">
				首页
			</van-tabbar-item>
			<van-tabbar-item replace to="/search" icon="search">
				搜索
			</van-tabbar-item>
			<van-tabbar-item replace to="/" icon="search">
				购物
			</van-tabbar-item>
			<van-tabbar-item replace to="/" icon="friends-o">
				我的
			</van-tabbar-item>
		</van-tabbar>-->
		<router-view/>
		
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				active: 1
			}
		}
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.head {
		box-shadow:0 0 12px #ccc;
	}
</style>