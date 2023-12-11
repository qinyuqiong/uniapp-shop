import { http } from '@/utils/http'

export const getGoodsByIdApi = (id: string) => {
  return http({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
