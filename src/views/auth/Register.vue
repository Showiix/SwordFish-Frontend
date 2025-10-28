<template>
  <div class="register-page">
    <div class="container">
      <div class="register-card">
        <!-- 标题 -->
        <h1>{{ $t('register.title') }}</h1>
        <!-- 副标题 -->
        <p class = "subtitle" >  {{ $t('register.subtitle') }}</p>

        <!-- 表单 -->
        <el-form :model="registerForm" label-width="100px">
          <el-form-item :label="$t('register.username')" >
            <el-input v-model="registerForm.username" 
            :placeholder="$t('register.usernamePlaceholder')" 
            />
          </el-form-item>

          <!-- 邮箱 -->
          <el-form-item :label="$t('register.email')" >
            <el-input v-model="registerForm.email" 
            :placeholder="$t('register.emailPlaceholder')" 
            />
          
          
          </el-form-item>

          <!-- 学号 -->
          <el-form-item :label="$t('register.password')" >
            <el-input v-model="registerForm.password" 
            :placeholder="$t('register.passwordPlaceholder')" 
            />

          </el-form-item>

          <!-- 确认密码 -->
          <el-form-item :label="$t('register.confirmPassword')" >
            <el-input v-model="registerForm.confirmPassword"
            :placeholder="$t('register.confirmPasswordPlaceholder')" 
            show-password
            />
          </el-form-item>

          <!-- 学号 -->
          <el-form-item :label="$t('register.student_id')" >
            <el-input v-model="registerForm.student_id" 
            :placeholder="$t('register.student_idPlaceholder')" 
            />
          </el-form-item>


          <!-- 同意服务条款和隐私政策 -->
          <el-form-item :label="$t('register.agreeToTerms')" >
            <el-checkbox v-model="registerForm.agreeToTerms" />
            <!-- TODO 服务条款和隐私政策的跳转待开发 -->

          </el-form-item>


          <!-- 提交注册按钮 -->
          <el-form-item>
          <!-- TODO 注册功能函数handleRegister待开发 -->
            <el-button 
              type="primary" 
              :disabled="!registerForm.agreeToTerms"
              @click="handleRegister">

              {{ $t('register.registerButton') }}

            </el-button>
          </el-form-item>



        </el-form>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
// 注册页面
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '@/store/modules/auth'
import type { RegisterForm } from '@/types/auth'
const router = useRouter() // 引入router，引入useRouter()的router
const authStore = useAuthStore() // 引入authStore，引入useAuthStore()的authStore
const { t } = useI18n() // 引入国际化，引入useI18n()的t方法

const registerForm = reactive<RegisterForm>({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  student_id: '',
  agreeToTerms: false,


})

// handleRegister逻辑：如果注册表单有遗漏，那么就会报错
// 必须包含用户名、邮箱、密码、确认密码、学号、同意服务条款和隐私政策
const  handleRegister = async () => {
  if (!registerForm.username || 
      !registerForm.email || 
      !registerForm.password || 
      !registerForm.confirmPassword || 
      !registerForm.student_id || 
      !registerForm.agreeToTerms) 
  {
    ElMessage.warning(t('register.registerFailed'))
    return
  }

  const result = await authStore.register(registerForm)
}

</script>








<style scoped lang="scss">
.register-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - $header-height);
  padding: $spacing-xl 0;
}

.register-card {
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

