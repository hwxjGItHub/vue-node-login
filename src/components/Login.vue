<template>
  <div class="login_top">
    <div class="login_con">
      <van-tabs v-model="active">
        <van-tab title="登录">
          <van-cell-group>
            <van-field
              v-model="form.username"
              required
              label="用户名"
              placeholder="请输入用户名"
            />
            <van-field
              v-model="form.password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
            />
            <div style="text-align: center;">
              <van-button type="primary" round size="small" @click="login"
                >登 录</van-button
              >
            </div>
          </van-cell-group>
        </van-tab>
        <van-tab title="注册">
          <van-field
            v-model="formData.username"
            required
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="formData.password"
            type="password"
            required
            label="密码"
            placeholder="请输入密码"
          />
          <van-field
            v-model="formData.age"
            label="年龄"
            placeholder="请输入年龄"
          />
          <van-field
            v-model="formData.address"
            label="地址"
            placeholder="请输入地址"
          />
          <div style="text-align: center;">
            <van-button type="primary" round size="small" @click="register"
              >注册</van-button
            >
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      form: {
        username: "",
        password: ""
      },
      formData: {
        username: "",
        password: "",
        age: "",
        address: ""
      }
    };
  },
  methods: {
    login() {
      let params = {
        username: this.form.username,
        password: this.form.password
      };
      this.axios.post("api/users/login", params).then(res => {
        if (res.data.status == 200) {
          this.$toast.success(res.data.message);
          this.$router.push({ path: "/home" });
        } else {
          this.form = {
            username: "",
            password: ""
          };
          this.$toast.fail(res.data.message);
        }
      });
    },
    register() {
      let params = {
        username: this.formData.username,
        password: this.formData.password,
        age: this.formData.age,
        address: this.formData.address
      };
      this.axios.post("api/users/register", params).then(res => {
        if (res.data.status == 201) {
          this.$toast.success(res.data.message);
        } else if (res.data.status == 200) {
          this.$toast.success(res.data.message);
          this.active = 0;
        }
      });
    }
  }
};
</script>

<style scoped>
.login_top {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.login_con {
  width: 60%;
  margin: 150px auto;
}
</style>