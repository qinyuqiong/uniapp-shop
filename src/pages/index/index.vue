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
import type { XtxGuessInstance } from '@/types/component'

const bannerList = ref<BannerItem[]>([])
// eslint-disable-next-line no-undef
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
//获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()

const getHomeBanner = async () => {
  const res = await getHomeBannerApi()
  // console.log(res)
  bannerList.value = res.result
}

const getHomeCategoryMutli = async () => {
  const res = await getHomeCategoryMutliApi()
  categoryList.value = res.result
}

const getHomeHotMutli = async () => {
  const res = await getHomeHotMutliApi()
  hotList.value = res.result
}

//滚动触底
const onScrolltolower = () => {
  // console.log('滚动触底')
  //调用实例中的方法
  guessRef.value?.getMore()
}

const isTrigger = ref(false)
//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  //开始动画
  isTrigger.value = true
  //重置猜你喜欢
  guessRef.value?.resetData()
  //加载数据,异步（await）同时请求（Promise.all）三个方法
  await Promise.all([
    getHomeBanner(),
    getHomeCategoryMutli(),
    getHomeHotMutli(),
    guessRef.value?.getMore(),
  ])
  //结束动画
  isTrigger.value = false
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
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTrigger"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef" />
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
