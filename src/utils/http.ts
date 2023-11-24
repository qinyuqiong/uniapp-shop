import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    console.log('拦截器')

    //非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    //请求超时
    options.timeout = 10000
    //请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //添加token 请求头标识
    const memberStore = useMemberStore()
    //如果用户信息被清理getToken可能拿不到，所以加个？
    console.log(memberStore)

    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

//设置返回类型
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        //由于没有axios需要自己处理不同的状态码
        if (res.statusCode >= 200 && res.statusCode < 300) {
          //断言判断类型
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          //401错误 -> 清理用户信息，跳转登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          //标记失败
          reject(res)
        } else {
          //其他错误 -> 根据后端错误信息
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
            icon: 'none',
          })
          //标记失败
          reject(res)
        }
      },
      //响应失败
      fail(err) {
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}
