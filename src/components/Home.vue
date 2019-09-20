<template>
	<div class="home_head">
		<h1>
			我是首页
		</h1>
		<h2>用户名是{{username}}</h2>
		<van-button type="primary" round size="small" @click="loginOut">登 出</van-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: ''
			}
		},
		created() {
			 this.axios.get("api/users/session",).then(res => {
				this.username = res.data.username;
			 })
		},
		methods: {
			loginOut() {
				this.$toast.success('退出成功');
				this.$router.push({path: '/login'})
			}
		}
	}
</script>

<style scoped>
.home_head{
	width: 100%;
	height: 100%;
}
img{
	width: 100%;
	height: 300px;
}
</style>