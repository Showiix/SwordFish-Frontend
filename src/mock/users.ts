// Mock 用户数据
import type { User, LoginResponse } from '@/types/auth'

/**
 * Mock 用户列表
 * 用于测试登录和注册功能
 */
export const mockUsers: User[] = [
  {
    user_id: 1001,
    student_id: '2024001',
    campus_email: 'zhangsan@university.edu.cn',
    real_name: '张三',
    phone: '13800138001',
    auth_status: 1, // 已认证
    credit_score: 98,
    avatar_url: 'https://i.pravatar.cc/150?img=1',
    ban_status: 0,
    create_time: '2024-09-01T08:00:00Z',
    update_time: '2025-11-01T10:30:00Z'
  },
  {
    user_id: 1002,
    student_id: '2023105',
    campus_email: 'lisi@university.edu.cn',
    real_name: '李四',
    phone: '13800138002',
    auth_status: 1,
    credit_score: 95,
    avatar_url: 'https://i.pravatar.cc/150?img=2',
    ban_status: 0,
    create_time: '2023-09-01T08:00:00Z',
    update_time: '2025-10-28T15:45:00Z'
  },
  {
    user_id: 1003,
    student_id: '2024089',
    campus_email: 'wangwu@university.edu.cn',
    real_name: '王五',
    phone: '13800138003',
    auth_status: 0, // 未认证
    credit_score: 92,
    avatar_url: 'https://i.pravatar.cc/150?img=3',
    ban_status: 0,
    create_time: '2024-09-01T08:00:00Z',
    update_time: '2025-11-03T09:15:00Z'
  },
  {
    user_id: 1004,
    student_id: '2023045',
    campus_email: 'zhaoliu@university.edu.cn',
    real_name: '赵六',
    phone: '13800138004',
    auth_status: 1,
    credit_score: 100,
    avatar_url: 'https://i.pravatar.cc/150?img=4',
    ban_status: 0,
    create_time: '2023-09-01T08:00:00Z',
    update_time: '2025-11-04T16:20:00Z'
  },
  {
    user_id: 1005,
    student_id: '2024112',
    campus_email: 'sunqi@university.edu.cn',
    real_name: '孙七',
    phone: '13800138005',
    auth_status: 1,
    credit_score: 88,
    avatar_url: 'https://i.pravatar.cc/150?img=5',
    ban_status: 0,
    create_time: '2024-09-01T08:00:00Z',
    update_time: '2025-11-02T11:30:00Z'
  }
]

/**
 * Mock 账号密码数据
 * 用于登录验证
 */
export const mockAccounts = [
  {
    account: 'zhangsan',      // 可以用用户名登录
    studentId: '2024001',     // 或用学号登录
    email: 'zhangsan@university.edu.cn', // 或用邮箱登录
    password: '12345678',
    userId: 1001
  },
  {
    account: 'lisi',
    studentId: '2023105',
    email: 'lisi@university.edu.cn',
    password: '12345678',
    userId: 1002
  },
  {
    account: 'wangwu',
    studentId: '2024089',
    email: 'wangwu@university.edu.cn',
    password: '12345678',
    userId: 1003
  },
  {
    account: 'zhaoliu',
    studentId: '2023045',
    email: 'zhaoliu@university.edu.cn',
    password: '12345678',
    userId: 1004
  },
  {
    account: 'sunqi',
    studentId: '2024112',
    email: 'sunqi@university.edu.cn',
    password: '12345678',
    userId: 1005
  }
]

/**
 * 根据账号和密码查找用户
 * @param account 账号（可以是用户名、学号或邮箱）
 * @param password 密码
 * @returns 用户信息或 null
 */
export function findUserByCredentials(account: string, password: string): User | null {
  // 查找账号
  const accountData = mockAccounts.find(
    acc => acc.account === account || 
           acc.studentId === account || 
           acc.email === account
  )

  // 验证密码
  if (accountData && accountData.password === password) {
    const user = mockUsers.find(u => u.user_id === accountData.userId)
    return user || null
  }

  return null
}

/**
 * 检查账号是否已存在
 * @param account 账号（用户名、学号或邮箱）
 * @returns 是否存在
 */
export function isAccountExists(account: string): boolean {
  return mockAccounts.some(
    acc => acc.account === account || 
           acc.studentId === account || 
           acc.email === account
  )
}

/**
 * 检查学号是否已存在
 */
export function isStudentIdExists(studentId: string): boolean {
  return mockAccounts.some(acc => acc.studentId === studentId)
}

/**
 * 检查邮箱是否已存在
 */
export function isEmailExists(email: string): boolean {
  return mockAccounts.some(acc => acc.email === email)
}

/**
 * Mock 登录
 * @param account 账号
 * @param password 密码
 * @returns 登录响应或错误
 */
export async function mockLogin(
  account: string, 
  password: string
): Promise<{ success: boolean; data?: LoginResponse; message?: string }> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800))

  // 查找用户
  const user = findUserByCredentials(account, password)

  if (!user) {
    return {
      success: false,
      message: '账号或密码错误'
    }
  }

  // 检查账号状态
  if (user.ban_status === 1) {
    return {
      success: false,
      message: `账号已被封禁：${user.ban_reason || '违反社区规则'}`
    }
  }

  // 生成 Mock Token
  const token = `mock_token_${user.user_id}_${Date.now()}`

  return {
    success: true,
    data: {
      token,
      user_info: user
    }
  }
}

/**
 * Mock 注册
 * @param registerData 注册数据
 * @returns 注册结果
 */
export async function mockRegister(registerData: {
  username: string
  email: string
  student_id: string
  password: string
}): Promise<{ success: boolean; message: string }> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000))

  // 检查学号是否已存在
  if (isStudentIdExists(registerData.student_id)) {
    return {
      success: false,
      message: '该学号已被注册'
    }
  }

  // 检查邮箱是否已存在
  if (isEmailExists(registerData.email)) {
    return {
      success: false,
      message: '该邮箱已被注册'
    }
  }

  // 检查用户名是否已存在
  if (isAccountExists(registerData.username)) {
    return {
      success: false,
      message: '该用户名已被使用'
    }
  }

  // 模拟成功注册
  // 实际应用中这里会将新用户添加到 mockUsers 数组
  console.log('Mock 注册成功：', registerData)

  return {
    success: true,
    message: '注册成功！请使用账号密码登录'
  }
}

/**
 * 根据 user_id 获取用户信息
 */
export function getMockUserById(userId: number): User | null {
  return mockUsers.find(u => u.user_id === userId) || null
}

