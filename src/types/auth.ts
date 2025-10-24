// 用户认证相关类型

/** 用户信息 */
export interface User {
  user_id: number
  student_id: string
  campus_email: string
  real_name?: string
  phone?: string
  auth_status: number
  credit_score: number
  avatar_url?: string
  ban_status?: number
  ban_reason?: string
  create_time?: string
  update_time?: string
}

/** 登录表单 */
export interface LoginForm {
  account: string
  password: string
}

/** 注册表单 */
export interface RegisterForm {
  student_id: string
  campus_email: string
  password: string
  phone?: string
  avatar_url?: string
}

/** 登录响应 */
export interface LoginResponse {
  token: string
  user_info: User
}

/** 认证申请表单 */
export interface AuthForm {
  real_name: string
  student_card_url: string
}

/** Token数据 */
export interface TokenData {
  access_token: string
  refresh_token: string
}

