<script setup lang="ts">
//
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerApi, getHomeCategoryMutliApi, getHomeHotMutliApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

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

const hotList = ref<HotItem[]>([])

const getHomeHotMutli = async () => {
  const res = await getHomeHotMutliApi()
  hotList.value = res.result
}
//启动时调用
onLoad(() => {
  getHomeBanner()
  getHomeCategoryMutli()
  getHomeHotMutli()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel :list="categoryList" />
  <!-- 热门推荐 -->
  <HotPanel :list="hotList"></HotPanel>
  <view class="index">index</view>
</template>

<style lang="scss">
//调整页面底色
page {
  background-color: #f7f7f7;
}
</style>
