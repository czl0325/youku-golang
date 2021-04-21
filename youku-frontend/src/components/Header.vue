<template>
  <div class="header">
    <router-link to="/">
      <el-image style="width: 200px;height: 33px;" :src="require('../assets/logo1.png')" fit="fill"/>
    </router-link>
    <div class="search-container">
      <input placeholder="火影忍者">
      <div class="hot">
        <i class="iconfont icon-hot"></i>
        <span>热搜榜</span>
      </div>
      <div class="search-btn">
        <i class="el-icon-search"></i>
        <span>搜全网</span>
      </div>
    </div>
    <div class="right-view">
      <el-dropdown>
        <el-image :src="require('../assets/icon_know_vip.png')" style="width: 24px;height: 24px;"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>会员精选内容</el-dropdown-item>
            <el-dropdown-item>了解VIP特权</el-dropdown-item>
            <el-dropdown-item>了解VIP套餐</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <button>
        <i class="iconfont icon-clock" />
        <span>看过</span>
      </button>
      <button>
        <i class="iconfont icon-guanzhu" />
        <span>关注</span>
      </button>
      <button>
        <i class="iconfont icon-shangchuan" />
        <span>上传</span>
      </button>
      <button>
        <i class="iconfont icon-bangzhushouji" />
        <span>客户端</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header",
  setup() {

    return {}
  }
})
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  box-sizing: border-box;

  .search-container {
    flex-grow: 1;
    margin: 0 20px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    color: white;
    padding: 0 0 0 20px;
    box-sizing: border-box;

    input {
      background: rgba(255, 25, 255, 0);
      border: 0;
      width: calc(100% - 189px);
      font-size: 14px;
      color: hsla(0, 0%, 100%, .87);
      outline: 0 none;
      vertical-align: middle;
      -webkit-appearance: none;
      flex-grow: 1;
    }

    .hot {
      font-size: 14px;
      margin-right: 10px;
      cursor: default;

      &:hover {
        color: deepskyblue;
      }
    }

    .search-btn {
      background-image: linear-gradient(135deg, #00b7ff, #00d3ff);
      height: 100%;
      width: 80px;
      border-radius: 0 20px 20px 0;
      color: white;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      cursor: default;
    }
  }

  .right-view {
    display: inline-flex;
    align-items: center;

    button {
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      color: #ddd;
      margin-left: 5px;
      font-size: 14px;

      span {
        margin-top: 10px;
      }
    }
  }
}
</style>
