import type { GoodsItem } from './global'

/**分类列表-小程序 */
export type CategoryTopResult = {
  // 一级分类id
  id: string
  //一级分类名称
  name: string
  // 一级分类图片
  picture: string
  // 一级分类图片集
  imageBanners: string[]
  //二级分类集合
  children: Children[]
}
/**二级分类集合 */
export type Children = {
  //二级分类id
  id: string
  //二级分类名称
  name: string
  //二级分类图片
  picture: string
  parentId: string
  parentName: string
  goods: GoodsItem[]
  categories: string
  brands: string
  saleProperties: string
}
