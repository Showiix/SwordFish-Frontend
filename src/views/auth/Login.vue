<template>
  <div class="login-page">
    <div class="container">
      <div class="login-card">
        <!-- 标题区域 -->
        <div class="header-section">
          <h1 class="title">{{ $t('login.title') }}</h1>
          <p class="subtitle">{{ $t('login.subtitle') }}</p>
        </div>

        <!-- 登录表单 -->
        <el-form 
          :model="loginForm" 
          class="login-form"
          label-position="top"
          size="large"
        >
          <!-- 账号 -->
          <el-form-item :label="$t('login.username')">
            <el-input
              v-model="loginForm.account"
              :placeholder="$t('login.usernamePlaceholder')"
              clearable
            >
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item :label="$t('login.password')">
            <el-input
              v-model="loginForm.password"
              type="password"
              :placeholder="$t('login.passwordPlaceholder')"
              show-password
              clearable
              @keyup.enter="handleLogin"
            >
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 记住我和忘记密码 -->
          <el-form-item class="extra-options">
            <div class="options-wrapper">
              <el-checkbox v-model="rememberMe">记住我</el-checkbox>
              <el-button type="text" class="forgot-password">忘记密码？</el-button>
            </div>
          </el-form-item>

          <!-- 登录按钮 -->
          <el-form-item class="button-group">
            <el-button 
              type="primary" 
              @click="handleLogin"
              :loading="loading"
              class="login-button"
            >
              {{ $t('login.loginButton') }}
            </el-button>
          </el-form-item>

          <!-- 去注册 -->
          <div class="footer-section">
            <span class="footer-text">还没有账号？</span>
            <el-button 
              type="text" 
              @click="goToRegister"
              class="register-link"
            >
              {{ $t('login.goRegister') }}
            </el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>






<script setup lang="ts">
// 登录页面
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useAuthStore } from '@/store/modules/auth'

const router = useRouter()
const authStore = useAuthStore()
const { t } = useI18n()

// 表单数据
const loginForm = reactive({
  account: '',
  password: ''
})

// 状态数据
const loading = ref(false)
const rememberMe = ref(false)

// 登录处理
const handleLogin = async () => {
  // 验证表单
  if (!loginForm.account || !loginForm.password) {
    ElMessage.warning(t('login.loginFailed'))
    return
  }

  try {
    loading.value = true

    // 调用登录 API
    const result = await authStore.login(loginForm)
    
    if (result.success) {
      ElMessage.success(t('login.loginSuccess'))
      // TODO: 如果勾选了"记住我"，保存凭据
      if (rememberMe.value) {
        // 保存账号信息
      }
      // 登录成功后跳转到商品列表页
      router.push('/products')
    } else {
      ElMessage.error(result.message || t('login.loginFailed'))
    }
  } catch (error) {
    ElMessage.error(t('login.loginFailed'))
  } finally {
    loading.value = false
  }
}

// 跳转到注册页面 使用的是router.push
const goToRegister = () => {
  router.push('/register')
}

</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - $header-height);
  padding: $spacing-xl 0;
  background: #d4eaf7;
}

.container {
  width: 100%;
  max-width: 500px;
  padding: 0 $spacing-md;
}

.login-card {
  width: 100%;
  padding: $spacing-2xl;
  background: white;
  border-radius: $border-radius-lg;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  // 标题区域
  .header-section {
    text-align: center;
    margin-bottom: $spacing-xl;

    .title {
      font-size: 28px;
      font-weight: 700;
      color: $text-primary;
      margin: 0 0 $spacing-sm 0;
    }

    .subtitle {
      font-size: 14px;
      color: $text-secondary;
      margin: 0;
    }
  }

  // 表单样式
  .login-form {
    margin-top: $spacing-xl;

    :deep(.el-form-item) {
      margin-bottom: $spacing-lg;

      // 标签样式
      .el-form-item__label {
        font-weight: 500;
        color: $text-primary;
        margin-bottom: $spacing-xs;
      }

      // 输入框样式
      .el-input {
        .el-input__wrapper {
          padding: 12px 15px;
          box-shadow: 0 0 0 1px #dcdfe6 inset;
          transition: all 0.3s;

          &:hover {
            box-shadow: 0 0 0 1px #c0c4cc inset;
          }

          &.is-focus {
            box-shadow: 0 0 0 1px $primary-color inset;
          }
        }

        .el-input__prefix {
          color: $text-tertiary;
        }
      }
    }

    // 额外选项（记住我和忘记密码）
    .extra-options {
      margin-bottom: $spacing-md;

      .options-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        :deep(.el-checkbox__label) {
          font-size: 14px;
          color: $text-secondary;
        }

        .forgot-password {
          font-size: 14px;
          padding: 0;
          color: $primary-color;

          &:hover {
            color: darken($primary-color, 10%);
          }
        }
      }
    }

    // 按钮组样式
    .button-group {
      margin-bottom: $spacing-md;

      .login-button {
        width: 100%;
        height: 48px;
        font-size: 16px;
        font-weight: 600;
        border-radius: $border-radius-md;
        transition: all 0.3s;

        &:not(.is-loading):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba($primary-color, 0.3);
        }
      }
    }

    // 底部区域
    .footer-section {
      text-align: center;
      padding-top: $spacing-md;
      border-top: 1px solid $border-color;

      .footer-text {
        font-size: 14px;
        color: $text-secondary;
        margin-right: $spacing-xs;
      }

      .register-link {
        font-size: 14px;
        font-weight: 600;
        padding: 0;

        &:hover {
          color: darken($primary-color, 10%);
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .login-page {
    padding: $spacing-md 0;
  }

  .login-card {
    padding: $spacing-xl $spacing-md;

    .header-section {
      .title {
        font-size: 24px;
      }

      .subtitle {
        font-size: 13px;
      }
    }

    .login-form {
      .button-group {
        .login-button {
          height: 44px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>

