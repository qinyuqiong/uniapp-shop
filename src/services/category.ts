import type { CategoryTopResult } from '@/types/category'
import { http } from '@/utils/http'
/**
 * 分类列表-小程序
 * @returns 分类列表
 */
export const getCategoryTopApi = () => {
  return http<CategoryTopResult[]>({
    method: 'GET',
    url: '/category/top',
  })
}
