import type { AddressItem, AddressParams } from '@/types/addresss'
import { http } from '@/utils/http'

/**
 * 添加收货地址
 * @param data 添加地址参数
 * @returns 地址id
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
