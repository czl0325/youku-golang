<template>
  <div class="my-container">
    <Header />
    <Footer />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Index",
  components: {
    Header,
    Footer
  },
  setup() {
    const advertVideos = ref([])
    const hotVideos = ref([])
    const japanVideos = ref([])
    const comicTop = ref([])
    const chinaVideos = ref([])
    const girlTop = ref([])
    return {
      advertVideos,
      hotVideos,
      japanVideos,
      comicTop,
      chinaVideos,
      girlTop
    }
  }
})
</script>

<style lang="less" scoped>


</style>
