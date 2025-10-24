<template>
  <div class="login-page">
    <div class="container">
      <div class="login-card">
        <h1>登录</h1>
        <el-form :model="loginForm" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="loginForm.account" placeholder="请输入学号或邮箱" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <el-button @click="goToRegister">去注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '@/store/modules/auth'

const router = useRouter()
const authStore = useAuthStore()

const loginForm = reactive({
  account: '',
  password: ''
})

const handleLogin = async () => {
  if (!loginForm.account || !loginForm.password) {
    ElMessage.warning('请输入账号和密码')
    return
  }

  const result = await authStore.login(loginForm)
  if (result.success) {
    ElMessage.success('登录成功')
    router.push('/')
  } else {
    ElMessage.error(result.message || '登录失败')
  }
}

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
    margin-bottom: $spacing-xl;
  }
}
</style>

