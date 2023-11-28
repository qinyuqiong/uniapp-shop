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
  <scroll-view class="scroll-view" scroll-y>
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList"></HotPanel>
    <!-- 猜你喜欢 -->
    <XtxGuess></XtxGuess>
    <view class="index">index</view>
  </scroll-view>
</template>

<style lang="scss">
//调整页面底色
page {
  background-color: #f7f7f7;
  // 设置页面高度
  height: 100%;
  // 设置页面最小宽度
  display: flex;
  // 设置页面主轴方向为竖向
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
