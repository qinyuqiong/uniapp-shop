// 服务端请求调用放在service中

import type { BannerItem } from '@/types/home'
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

export const getHomeCategoryMutliApi = () => {
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
