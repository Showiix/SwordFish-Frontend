<template>
  <header class="app-header">
    <div class="container header-content">
      <!-- Logo -->
      <div class="logo" @click="goHome">
        <img src="@/assets/images/logo2.png" alt="Swordfish" class="logo-img" />
        <span class="logo-text">Swordfish</span>
      </div>

      <!-- 搜索栏 -->
      <div class="search-bar">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索商品..."
          size="large"
          class="search-input"
          @keyup.enter="handleSearch"
        >
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
        </el-input>
      </div>

      <!-- 右侧操作 -->
      <div class="header-actions">
        <!-- 筛选按钮 -->
        <el-button class="action-btn" @click="showFilter">
          <el-icon><Filter /></el-icon>
          <span>筛选</span>
        </el-button>

        <!-- 发布商品按钮 -->
        <el-button type="primary" class="sell-btn" @click="goToSell">
          <el-icon><Plus /></el-icon>
          <span>发布商品</span>
        </el-button>

        <!-- 未登录状态 -->
        <template v-if="!isLoggedIn">
          <el-button class="login-btn" @click="goToLogin">
            登录
          </el-button>
        </template>

        <!-- 已登录状态 -->
        <template v-else>
          <!-- 通知图标 -->
          <el-badge :value="unreadCount" :hidden="unreadCount === 0" class="notification-badge">
            <el-button circle class="icon-btn" @click="showNotifications">
              <el-icon><Bell /></el-icon>
            </el-button>
          </el-badge>

          <!-- 用户头像和菜单 -->
          <el-dropdown trigger="click" @command="handleCommand">
            <div class="user-avatar">
              <el-avatar :src="userInfo?.avatar_url" :size="40">
                {{ userInfo?.real_name?.charAt(0) || 'U' }}
              </el-avatar>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile">
                  <el-icon><User /></el-icon>
                  <span>个人中心</span>
                </el-dropdown-item>
                <el-dropdown-item command="orders">
                  <el-icon><ShoppingBag /></el-icon>
                  <span>我的订单</span>
                </el-dropdown-item>
                <el-dropdown-item command="products">
                  <el-icon><Box /></el-icon>
                  <span>我的商品</span>
                </el-dropdown-item>
                <el-dropdown-item command="messages">
                  <el-icon><ChatDotRound /></el-icon>
                  <span>消息</span>
                </el-dropdown-item>
                <el-dropdown-item divided command="logout">
                  <el-icon><SwitchButton /></el-icon>
                  <span>退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  Search,
  Filter,
  Plus,
  Bell,
  User,
  ShoppingBag,
  Box,
  ChatDotRound,
  SwitchButton
} from '@element-plus/icons-vue'
import { useAuthStore } from '@/store/modules/auth'

const router = useRouter()
const authStore = useAuthStore()

const searchKeyword = ref('')
const unreadCount = ref(0)

const isLoggedIn = computed(() => authStore.isAuthenticated)
const userInfo = computed(() => authStore.user)

// 搜索
const handleSearch = () => {
  if (!searchKeyword.value.trim()) return
  router.push({
    path: '/products',
    query: { keyword: searchKeyword.value }
  })
}

// 显示筛选
const showFilter = () => {
  router.push('/products')
}

// 去发布商品
const goToSell = () => {
  if (!isLoggedIn.value) {
    ElMessage.warning('请先登录')
    router.push('/login')
    return
  }
  router.push('/products/publish')
}

// 去登录
const goToLogin = () => {
  router.push('/login')
}

// 显示通知
const showNotifications = () => {
  router.push('/notifications')
}

// 回到首页
const goHome = () => {
  router.push('/')
}

// 下拉菜单命令处理
const handleCommand = (command: string) => {
  switch (command) {
    case 'profile':
      router.push('/profile')
      break
    case 'orders':
      router.push('/orders')
      break
    case 'products':
      router.push('/profile/products')
      break
    case 'messages':
      router.push('/chat')
      break
    case 'logout':
      handleLogout()
      break
  }
}

// 退出登录
const handleLogout = async () => {
  try {
    await authStore.logout()
    ElMessage.success('已退出登录')
    router.push('/')
  } catch (error) {
    ElMessage.error('退出失败')
  }
}
</script>

<style scoped lang="scss">
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  border-bottom: 1px solid $border-color;
  box-shadow: $shadow-sm;
}

.header-content {
  display: flex;
  align-items: center;
  gap: $spacing-lg;
  height: $header-height;
}

.logo {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  cursor: pointer;
  transition: $transition-base;

  &:hover {
    opacity: 0.8;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }

  .logo-text {
    font-size: 20px;
    font-weight: 700;
    color: $primary-color;
  }
}

.search-bar {
  flex: 1;
  max-width: 600px;

  .search-input {
    :deep(.el-input__wrapper) {
      border-radius: $border-radius-full;
      box-shadow: 0 0 0 1px $border-color inset;
      transition: $transition-base;

      &:hover,
      &.is-focus {
        box-shadow: 0 0 0 2px $primary-color inset;
      }
    }
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: $spacing-md;

  .action-btn {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    border-radius: $border-radius-lg;
  }

  .sell-btn {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    background: $primary-color;
    border-radius: $border-radius-lg;
    padding: 10px 20px;

    &:hover {
      background: $secondary-color;
    }
  }

  .login-btn {
    border-radius: $border-radius-lg;
    padding: 10px 24px;
  }

  .notification-badge {
    :deep(.el-badge__content) {
      border: 2px solid white;
    }
  }

  .icon-btn {
    width: 40px;
    height: 40px;
  }

  .user-avatar {
    cursor: pointer;
    transition: $transition-base;

    &:hover {
      opacity: 0.8;
    }
  }
}

@media (max-width: $breakpoint-md) {
  .header-content {
    gap: $spacing-md;
  }

  .search-bar {
    max-width: 400px;
  }

  .action-btn,
  .sell-btn {
    span {
      display: none;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .logo-text {
    display: none;
  }

  .search-bar {
    max-width: 200px;
  }
}
</style>

