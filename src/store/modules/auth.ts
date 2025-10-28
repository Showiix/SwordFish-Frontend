// 用户认证状态管理
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { storage } from '@/utils/storage'
import { TOKEN_KEY, USER_KEY } from '@/utils/constants'
import { request } from '@/utils/request'
import type { User, LoginForm, RegisterForm, LoginResponse } from '@/types/auth'

export const useAuthStore = defineStore('auth', () => {
  // 状态
  const user = ref<User | null>(storage.get<User>(USER_KEY))
  const token = ref<string | null>(storage.get<string>(TOKEN_KEY))
  const isLoading = ref(false)

  // 计算属性
  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const userInfo = computed(() => user.value)
  const isVerified = computed(() => user.value?.auth_status === 1)

  // 登录
  const login = async (loginForm: LoginForm) => {
    try {
      isLoading.value = true
      const response = await request.post<{ data: LoginResponse }>('/user/login', loginForm)

      if (response.data) {
        const { token: accessToken, user_info } = response.data

        // 更新状态
        user.value = user_info
        token.value = accessToken

        // 持久化存储
        storage.set(TOKEN_KEY, accessToken)
        storage.set(USER_KEY, user_info)

        return { success: true }
      }

      return { success: false, message: '登录失败' }
    } 
    catch (error: any) {
      return {
        success: false,
        message: error.message || '登录失败'
      }
    } 
    finally 
    {
      isLoading.value = false
    }
  }

  // 注册
  const register = async (registerForm: RegisterForm) => {
    try {
      isLoading.value = true
      const response = await request.post('/user/register', registerForm)

      return {
        success: true,
        message: response.msg || '注册成功'
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message || '注册失败'
      }
    } finally {
      isLoading.value = false
    }
  }

  // 登出
  const logout = async () => {
    try {
      // 可以调用后端登出接口
      // await request.post('/user/logout')
    } catch (error) {
      console.error('登出请求失败:', error)
    } finally {
      // 清除状态和存储
      user.value = null
      token.value = null
      storage.remove(TOKEN_KEY)
      storage.remove(USER_KEY)
    }
  }

  // 获取用户信息
  const fetchUserInfo = async () => {
    try {
      const response = await request.get<{ data: User }>('/user/info')
      if (response.data) {
        user.value = response.data
        storage.set(USER_KEY, response.data)
      }
    } catch (error) {
      console.error('获取用户信息失败:', error)
    }
  }

  // 更新用户信息
  const updateUserInfo = async (data: Partial<User>) => {
    try {
      const response = await request.put('/user/info', data)
      if (response.data) {
        await fetchUserInfo()
        return { success: true }
      }
      return { success: false }
    } catch (error) {
      return { success: false }
    }
  }

  // 初始化认证状态
  const initAuth = async () => {
    const storedUser = storage.get<User>(USER_KEY)
    const storedToken = storage.get<string>(TOKEN_KEY)

    if (storedUser && storedToken) {
      user.value = storedUser
      token.value = storedToken

      // 验证token有效性
      try {
        await fetchUserInfo()
      } catch (error) {
        await logout()
      }
    }
  }

  return {
    // 状态
    user,
    token,
    isLoading,

    // 计算属性
    isAuthenticated,
    userInfo,
    isVerified,

    // 方法
    login,
    register,
    logout,
    fetchUserInfo,
    updateUserInfo,
    initAuth
  }
})

