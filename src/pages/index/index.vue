<script setup lang="ts">
//
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'

const getHomeBanner = async () => {
  const res = await getHomeBannerApi()
  console.log(res)
}
//启动时调用
onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
