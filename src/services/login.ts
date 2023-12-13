import type { LoginResult } from '@/types/login'
import { http } from '@/utils/http'

type LoginParam = {
  code: string
  encryptedData: string
  iv: string
}

export const postLoginWxMinAPI = (data: LoginParam) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: { phoneNumber },
  })
}
