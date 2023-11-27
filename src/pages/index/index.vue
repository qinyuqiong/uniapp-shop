<script setup lang="ts">
//
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerApi, getHomeCategoryMutliApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])

const getHomeBanner = async () => {
  const res = await getHomeBannerApi()
  // console.log(res)
  bannerList.value = res.result
}

// eslint-disable-next-line no-undef
const categoryList = ref<CategoryItem[]>([])

const getHomeCategoryMutli = async () => {
  const res = await getHomeCategoryMutliApi()
  categoryList.value = res.result
}

//启动时调用
onLoad(() => {
  getHomeBanner()
  getHomeCategoryMutli()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//调整页面底色
page {
  background-color: #f7f7f7;
}
</style>
