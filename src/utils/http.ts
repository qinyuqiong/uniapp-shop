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
