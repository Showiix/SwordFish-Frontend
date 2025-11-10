// 用户API服务
import { request } from '@/utils/request'
import type { UserInfo, Product, Order, CreditRecord, EditUserForm, PasswordForm } from '@/types/profile'
// 导入Mock数据（开发阶段使用）
import {
  getMockUserInfo,
  updateMockUserInfo,
  changeMockPassword,
  getMockMyProducts,
  getMockMyOrders,
  getMockCreditRecords
} from '@/mock/profile'

// API响应类型
interface ApiResponse<T> {
  code: number
  msg: string
  data: T
}

// 是否使用Mock数据（方便切换）
const USE_MOCK = true

/**
 * 获取用户个人信息
 */
export async function getUserInfo(): Promise<ApiResponse<UserInfo>> {
  if (USE_MOCK) {
    const data = await getMockUserInfo()
    return { code: 200, msg: '成功', data }
  }
  return request.get<ApiResponse<UserInfo>>('/api/user/info')
}

/**
 * 修改用户个人信息
 */
export async function updateUserInfo(formData: EditUserForm): Promise<ApiResponse<UserInfo>> {
  if (USE_MOCK) {
    const data = await updateMockUserInfo(formData)
    return { code: 200, msg: '更新成功', data }
  }
  return request.put<ApiResponse<UserInfo>>('/api/user/info', formData)
}

/**
 * 修改密码
 */
export async function changePassword(data: PasswordForm): Promise<ApiResponse<any>> {
  if (USE_MOCK) {
    const result = await changeMockPassword(data)
    if (result.success) {
      return { code: 200, msg: result.message, data: null }
    } else {
      throw new Error(result.message)
    }
  }
  return request.put<ApiResponse<any>>('/api/user/password', {
    old_password: data.oldPassword,
    new_password: data.newPassword
  })
}

/**
 * 获取用户信用记录
 */
export async function getCreditRecords(): Promise<ApiResponse<CreditRecord[]>> {
  if (USE_MOCK) {
    const data = await getMockCreditRecords()
    return { code: 200, msg: '成功', data }
  }
  return request.get<ApiResponse<CreditRecord[]>>('/api/user/credit')
}

/**
 * 获取我发布的商品列表
 */
export async function getMyProducts(): Promise<ApiResponse<Product[]>> {
  if (USE_MOCK) {
    const data = await getMockMyProducts()
    return { code: 200, msg: '成功', data }
  }
  return request.get<ApiResponse<Product[]>>('/api/goods/my-publish')
}

/**
 * 获取我的订单列表
 */
export async function getOrderList(): Promise<ApiResponse<Order[]>> {
  if (USE_MOCK) {
    const data = await getMockMyOrders()
    return { code: 200, msg: '成功', data }
  }
  return request.get<ApiResponse<Order[]>>('/api/order/list')
}
