// 服务端请求调用放在service中

import type { PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 获取广告
 * @param distributionSite广告区域展示位置 1为首页（默认值）,2为商品分类页。示例值:1
 * */
export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序
 * @returns  数据集合
 */
export const getHomeCategoryMutliApi = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 * @returns 数据集合
 */
export const getHomeHotMutliApi = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

export const getHomeGoodsGuessLikeApi = () => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}
