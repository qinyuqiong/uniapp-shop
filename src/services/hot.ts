import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

//交叉参数。将{}内的拓展到PageParams中
type HotParams = PageParams & { subType?: string }
/**
 * 获取热门推荐
 * @param url 后端路径
 * @param data 请求参数
 * @returns 活动信息
 */
export const getHotRecommendApi = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
