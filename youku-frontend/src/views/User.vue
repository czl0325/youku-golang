<template>
  <div class="back">
    <div class="login-container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "User",
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

  .login-container {
    background-color: white;
    position: absolute;
    right: 60px;
    top: 50%;
    width: 400px;
    transform: translate(0, -50%);
    vertical-align: middle;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 4px 4px 4px #88888850;
  }
}
</style>
