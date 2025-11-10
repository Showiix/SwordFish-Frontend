// 用户信息类型
export interface UserInfo {
  id?: number
  username: string
  name: string
  gender: number
  studentId: string
  college: string
  phone: string
  email: string
  avatar: string
  creditScore: number
}

// 商品类型
export interface Product {
  id: number
  name: string
  price: number
  images: string[]
  status: number
  description?: string
  createdAt?: string
  updatedAt?: string
}

// 订单类型
export interface Order {
  id: number
  goodsId: number
  goodsName: string
  goodsImage: string
  price: number
  status: number
  createdAt: string
  updatedAt?: string
}

// 信用记录类型
export interface CreditRecord {
  id: number
  userId: number
  reason: string
  scoreChange: number
  createdAt: string
}

// 编辑用户信息表单类型
export interface EditUserForm {
  name: string
  gender: number
  college: string
  phone: string
  email: string
  avatar: string
}

// 修改密码表单类型
export interface PasswordForm {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
