/**
 * 轮播图数据结构
 */
export type BannerItem = {
  //id
  id: string
  //banner链接
  imgUrl: string
  //跳转链接
  hrefUrl: string
  //跳转类型1、页面2、H5 3、小程序（小程序使用）
  type: number
}
