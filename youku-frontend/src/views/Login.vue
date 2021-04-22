<template>
  <p>用户登录</p>
  <el-form label-position="right" label-width="80px" style="margin-top: 20px;">
    <el-form-item label="手机号" required>
      <el-input v-model="user.mobile"></el-input>
    </el-form-item>
    <el-form-item label="密码" required>
      <el-input v-model="user.password" show-password></el-input>
    </el-form-item>
    <div style="text-align: right;margin-bottom: 10px;">
      <router-link style="font-size: 12px;" to="register">没有账号，点击注册</router-link>
    </div>
    <el-button style="width: 100%;" type="primary" @click="login">立即登录</el-button>
  </el-form>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'

export default defineComponent({
  name: "Login",
  setup() {
    const user = reactive({
      mobile: '',
      password: ''
    })
    const login = () => {

    }
    return {
      user,
      login
    }
  }
})
</script>

<style lang="less" scoped>

</style>
