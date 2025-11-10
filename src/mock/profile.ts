// Mock 个人中心数据
import type { UserInfo, Product, Order, CreditRecord } from '@/types/profile'

/**
 * Mock 用户个人信息
 */
export const mockUserInfo: UserInfo = {
  username: 'student001',
  name: '张三',
  gender: 1,
  studentId: '2021001234',
  college: '计算机学院',
  phone: '13800138000',
  email: 'zhangsan@example.com',
  avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  creditScore: 95
}

/**
 * Mock 我的商品列表
 */
export const mockMyProducts: Product[] = [
  {
    id: 1,
    name: '二手自行车 - 95新',
    price: 299,
    images: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
    status: 1, // 已上架
    description: '9成新山地自行车，骑行流畅，适合校园代步',
    createdAt: '2024-11-01T10:00:00',
    updatedAt: '2024-11-01T10:00:00'
  },
  {
    id: 2,
    name: '大学物理教材',
    price: 35,
    images: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'],
    status: 1, // 已上架
    description: '全新教材，仅翻阅过几次，无笔记',
    createdAt: '2024-10-28T14:30:00',
    updatedAt: '2024-10-28T14:30:00'
  },
  {
    id: 3,
    name: 'iPhone 12 手机壳',
    price: 15,
    images: ['https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'],
    status: 3, // 已售出
    description: '全新未使用，透明硅胶材质',
    createdAt: '2024-10-25T09:15:00',
    updatedAt: '2024-11-05T16:20:00'
  },
  {
    id: 4,
    name: '无线蓝牙鼠标',
    price: 45,
    images: ['https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'],
    status: 0, // 审核中
    description: '罗技蓝牙鼠标，使用一年，功能正常',
    createdAt: '2024-11-08T11:00:00',
    updatedAt: '2024-11-08T11:00:00'
  },
  {
    id: 5,
    name: '台灯 护眼学习灯',
    price: 68,
    images: ['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],
    status: 2, // 已下架
    description: '小米台灯，三档调光，护眼模式',
    createdAt: '2024-10-20T15:45:00',
    updatedAt: '2024-11-03T10:30:00'
  }
]

/**
 * Mock 我的订单列表
 */
export const mockMyOrders: Order[] = [
  {
    id: 1001,
    goodsId: 101,
    goodsName: '高等数学教材（上册）',
    goodsImage: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    price: 45,
    status: 1, // 已完成
    createdAt: '2024-11-08T10:30:00',
    updatedAt: '2024-11-08T15:20:00'
  },
  {
    id: 1002,
    goodsId: 102,
    goodsName: '笔记本电脑支架',
    goodsImage: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    price: 58,
    status: 1, // 已完成
    createdAt: '2024-11-05T14:20:00',
    updatedAt: '2024-11-06T09:15:00'
  },
  {
    id: 1003,
    goodsId: 103,
    goodsName: '蓝牙耳机',
    goodsImage: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    price: 120,
    status: 0, // 待支付
    createdAt: '2024-11-10T09:15:00',
    updatedAt: '2024-11-10T09:15:00'
  },
  {
    id: 1004,
    goodsId: 104,
    goodsName: 'U盘 32GB',
    goodsImage: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    price: 25,
    status: 1, // 已完成
    createdAt: '2024-11-02T16:45:00',
    updatedAt: '2024-11-03T11:30:00'
  },
  {
    id: 1005,
    goodsId: 105,
    goodsName: '英语四级词汇书',
    goodsImage: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    price: 18,
    status: 2, // 已取消
    createdAt: '2024-10-30T13:20:00',
    updatedAt: '2024-10-31T10:00:00'
  }
]

/**
 * Mock 信用记录列表
 */
export const mockCreditRecords: CreditRecord[] = [
  {
    id: 1,
    userId: 1,
    reason: '完成交易，买家好评',
    scoreChange: 5,
    createdAt: '2024-11-09T16:45:00'
  },
  {
    id: 2,
    userId: 1,
    reason: '成功出售商品',
    scoreChange: 3,
    createdAt: '2024-11-08T11:20:00'
  },
  {
    id: 3,
    userId: 1,
    reason: '完成交易，买家好评',
    scoreChange: 5,
    createdAt: '2024-11-06T14:30:00'
  },
  {
    id: 4,
    userId: 1,
    reason: '订单超时未处理',
    scoreChange: -2,
    createdAt: '2024-11-03T09:10:00'
  },
  {
    id: 5,
    userId: 1,
    reason: '账号实名认证',
    scoreChange: 10,
    createdAt: '2024-10-28T10:00:00'
  },
  {
    id: 6,
    userId: 1,
    reason: '首次发布商品',
    scoreChange: 2,
    createdAt: '2024-10-25T15:30:00'
  },
  {
    id: 7,
    userId: 1,
    reason: '完成交易，买家好评',
    scoreChange: 5,
    createdAt: '2024-10-20T11:00:00'
  },
  {
    id: 8,
    userId: 1,
    reason: '违规发布商品',
    scoreChange: -5,
    createdAt: '2024-10-15T14:20:00'
  }
]

/**
 * Mock 获取用户信息
 */
export async function getMockUserInfo(): Promise<UserInfo> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300))
  return mockUserInfo
}

/**
 * Mock 更新用户信息
 */
export async function updateMockUserInfo(data: Partial<UserInfo>): Promise<UserInfo> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  Object.assign(mockUserInfo, data)
  return mockUserInfo
}

/**
 * Mock 修改密码
 */
export async function changeMockPassword(data: {
  oldPassword: string
  newPassword: string
}): Promise<{ success: boolean; message: string }> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  // 简单验证
  if (data.oldPassword === '12345678') {
    return {
      success: true,
      message: '密码修改成功'
    }
  }

  return {
    success: false,
    message: '原密码错误'
  }
}

/**
 * Mock 获取我的商品列表
 */
export async function getMockMyProducts(): Promise<Product[]> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 400))
  return mockMyProducts
}

/**
 * Mock 获取我的订单列表
 */
export async function getMockMyOrders(): Promise<Order[]> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 400))
  return mockMyOrders
}

/**
 * Mock 获取信用记录
 */
export async function getMockCreditRecords(): Promise<CreditRecord[]> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 400))
  return mockCreditRecords
}
