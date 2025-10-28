<template>
  <div class="login-page">
    <div class="container">
      <div class="login-card">
        <h1>{{ $t('login.title') }}</h1>
        <p class="subtitle">{{ $t('login.subtitle') }}</p>
        <el-form :model="loginForm" label-width="100px">

          <el-form-item :label="$t('login.username')">
            <el-input
              v-model="loginForm.account"
              :placeholder="$t('login.usernamePlaceholder')"
            />
          </el-form-item>


          <el-form-item :label="$t('login.password')">
            <el-input
              v-model="loginForm.password"
              type="password"
              :placeholder="$t('login.passwordPlaceholder')"
            />
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="handleLogin">
              {{ $t('login.loginButton') }}
            </el-button>
            <el-button @click="goToRegister">
              {{ $t('login.goRegister') }}
            </el-button>
          </el-form-item>


        </el-form>
      </div>
    </div>
  </div>
</template>






// 脚本部份
<script setup lang="ts">
// 引入vue
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '@/store/modules/auth'

const router = useRouter() // 引入router，引入useRouter()的router
const authStore = useAuthStore() // 引入authStore，引入useAuthStore()的authStore
const { t } = useI18n() // 引入国际化，引入useI18n()的t方法

const loginForm = reactive({
  account: '',
  password: ''
})

// handlelogin逻辑：如果账号或者密码没有填写，那么就会报错
const handleLogin = async () => {
  if (!loginForm.account || !loginForm.password) {
    ElMessage.warning(t('login.loginFailed'))
    return
  }

  // 调用authStore的login方法 
  // pinia的store管理
  const result = await authStore.login(loginForm)
  
  if (result.success) {
    ElMessage.success(t('login.loginSuccess'))
    router.push('/')
  } else {
    ElMessage.error(result.message || t('login.loginFailed'))
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
}

.login-card {
  max-width: 500px;
  width: 100%;
  padding: $spacing-2xl;
  background: white;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-lg;

  h1 {
    text-align: center;
    margin-bottom: $spacing-sm;
    font-size: 28px;
    font-weight: 700;
    color: $text-primary;
  }

  .subtitle {
    text-align: center;
    margin-bottom: $spacing-xl;
    color: $text-secondary;
    font-size: 14px;
  }
}
</style>

