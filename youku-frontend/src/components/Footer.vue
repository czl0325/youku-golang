<template>
  <div class="foot-container">
    <el-row :gutter="20" style="color: #ccc;font-size: 12px;" type="flex" justify="space-between" align="bottom" >
      <el-col :span="3">
        <el-space wrap :size="10">
          <div v-for="item in channels" :key="item">
            <el-button type="text">{{item}}</el-button>
          </div>
        </el-space>
      </el-col>
      <el-col :span="6">
        <p style="font-size: 16px;">产品中心</p>
        <p v-for="item in products" :key="item" style="font-size: 12px;margin-top:10px;">{{item}}</p>
      </el-col>
      <el-col :span="4">
        <p style="font-size: 16px;">用户协议</p>
        <el-space wrap :size="10" style="margin-top: 10px;">
          <div v-for="item in protocols" :key="item">
            <el-button type="text">{{item}}</el-button>
          </div>
        </el-space>
      </el-col>
      <el-col :span="4">
        <p style="font-size: 16px;">服务</p>
        <el-space wrap :size="10" style="margin-top: 10px;">
          <div v-for="item in services" :key="item">
            <el-button type="text">{{item}}</el-button>
          </div>
        </el-space>
      </el-col>
    </el-row>
    <p style="font-size: 12px; color: #ccc;margin-top: 15px;">Copyright©2021 优酷</p>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "Footer",
  setup() {
    const channels = ref(['剧集','电影','综艺','音乐','少儿','资讯','纪录','公益','娱乐','文化','动漫','搞笑','游戏','会员','发现','片库'])
    const products = ref(['PC客户端', '视频云', '手机客户端'])
    const protocols = ref(['用户协议', '历史协议文本', '知识产权声明', '隐私政策', '账号注销协议', '反盗销声明'])
    const services = ref(['侵权投诉', '广告服务', '开通大鱼号', '鲸观', '在线反馈', '联系我们', '关于我们', '繁体字'])
    return {
      channels,
      products,
      protocols,
      services
    }
  }
})
</script>

<style lang="less" scoped>
.foot-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>
