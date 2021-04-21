<template>
  <div class="back">
    登录页面
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Login",
  setup() {

    return {}
  }
})
</script>

<style lang="less" scoped>
.back {
  background: url("../assets/bg_login.jpg") no-repeat;
  min-height: 100vh;
  width: 100%;
  background-origin: initial;
  background-size: cover;

  
}
</style>
