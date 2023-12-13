/**
 * empty object
 */
export interface LoginResult {
  /**
   * 提示语
   */
  msg: string
  /**
   * 用户信息
   */
  result: Result
  [property: string]: any
}

/**
 * 用户信息
 */
export interface Result {
  /**
   * 用户名
   */
  account: string
  /**
   * 用户头像
   */
  avatar: string
  /**
   * 用户id
   */
  id: string
  /**
   * 用户手机号
   */
  mobile: string
  /**
   * 用户昵称
   */
  nickname: string
  /**
   * 用于后续接口调用的token，有效期三天
   */
  token: string
  [property: string]: any
}
