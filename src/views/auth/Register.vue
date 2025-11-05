<template>
  <div class="register-page">
    <div class="container">
      <div class="register-card">
        <!-- 标题区域 -->
        <div class="header-section">
          <h1 class="title">{{ $t('register.title') }}</h1>
          <p class="subtitle">{{ $t('register.subtitle') }}</p>
        </div>

        <!-- 表单 -->
        <el-form 
          :model="registerForm" 
          ref="registerFormRef"
          :rules="registerRules"
          class="register-form"
          label-position="top"
          size="large"
        >
          <!-- 用户名 -->
          <el-form-item :label="$t('register.username')" prop="username">
            <el-input 
              v-model="registerForm.username" 
              :placeholder="$t('register.usernamePlaceholder')"
              clearable
            >
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 邮箱 -->
          <el-form-item :label="$t('register.email')" prop="email">
            <el-input 
              v-model="registerForm.email" 
              :placeholder="$t('register.emailPlaceholder')"
              clearable
            >
              <template #prefix>
                <el-icon><Message /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 学号 -->
          <el-form-item :label="$t('register.student_id')" prop="student_id">
            <el-input 
              v-model="registerForm.student_id" 
              :placeholder="$t('register.student_idPlaceholder')"
              clearable
            >
              <template #prefix>
                <el-icon><Postcard /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item :label="$t('register.password')" prop="password">
            <el-input 
              v-model="registerForm.password" 
              :placeholder="$t('register.passwordPlaceholder')"
              type="password"
              show-password
              clearable
            >
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 确认密码 -->
          <el-form-item :label="$t('register.confirmPassword')" prop="confirmPassword">
            <el-input 
              v-model="registerForm.confirmPassword"
              :placeholder="$t('register.confirmPasswordPlaceholder')" 
              type="password"
              show-password
              clearable
            >
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 同意服务条款 -->
          <el-form-item class="terms-item">
            <el-checkbox v-model="registerForm.agreeToTerms">
              <span class="terms-text">
                我已阅读并同意
                <a href="#" class="terms-link">《服务条款》</a>
                和
                <a href="#" class="terms-link">《隐私政策》</a>
              </span>
            </el-checkbox>
          </el-form-item>

          <!-- 按钮组 -->
          <el-form-item class="button-group">
            <el-button 
              type="primary" 
              :disabled="!registerForm.agreeToTerms"
              @click="handleRegister"
              :loading="loading"
              class="register-button"
            >
              {{ $t('register.registerButton') }}
            </el-button>
          </el-form-item>

          <!-- 去登录 -->
          <div class="footer-section">
            <span class="footer-text">已有账号？</span>
            <el-button 
              type="text" 
              @click="goToLogin"
              class="login-link"
            >
              {{ $t('register.goLogin') }}
            </el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 注册页面
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { User, Message, Lock, Postcard } from '@element-plus/icons-vue'
import { useAuthStore } from '@/store/modules/auth'
import type { RegisterForm } from '@/types/auth'
import type { FormInstance, FormRules } from 'element-plus'


const router = useRouter() // 引入router，引入useRouter()的router
const authStore = useAuthStore() // 引入authStore，引入useAuthStore()的authStore
const { t } = useI18n() // 引入国际化，引入useI18n()的t方法
const registerFormRef = ref<FormInstance>() // 引入registerFormRef，引入ref()的registerFormRef方法


// 定义表单数据
const registerForm = reactive<RegisterForm>({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  student_id: '',
  agreeToTerms: false,


})

// 定义表单规则
const registerRules = reactive<FormRules>(
  {
    // 用户名 必须输入，且不能为空 ，触发方式为blur 
    username:[
      { required: true, message: t('register.usernameRequired'), trigger: 'blur' },
    ],

    // 邮箱 必须输入，且不能为空 ，触发方式为blur ，类型为email ，提示信息为t('register.emailInvalid')
    email:[
      { required: true, message: t('register.emailRequired'), trigger: 'blur' },
      { type: 'email', message: t('register.emailInvalid'), trigger: 'blur' },
    ],

    // 密码 必须输入，且不能为空 ，触发方式为blur ，长度为8-20位 ，提示信息为t('register.passwordLength')
    password:[
      { required: true, message: t('register.passwordRequired'), trigger: 'blur' },
      { min: 8, max: 20, message: t('register.passwordLength'), trigger: 'blur' },
    ],

    // 确认密码 必须输入，且不能为空 ，触发方式为blur ，长度为8-20位 ，提示信息为t('register.confirmPasswordLength')
    confirmPassword:[
      { required: true, message: t('register.confirmPasswordRequired'), trigger: 'blur' },

      // 确认密码和密码必须相同 
      { validator: (_rule: any, value: any, callback: any) => {
        if (value !== registerForm.password) {
          callback(new Error(t('register.confirmPasswordInvalid')))
        } else {
          callback()
        }
      }, trigger: 'blur' },
    ],

    // 学号 必须输入，且不能为空 ，触发方式为blur ，长度为5-12位 ，提示信息为t('register.studentIdLength')
    student_id:[
      { required: true, message: t('register.studentIdRequired'), trigger: 'blur' },
      { min: 5, max: 12, message: t('register.studentIdLength'), trigger: 'blur' },
    ],





  }
)

const loading = ref(false) // 定义一个loading，用于控制按钮的加载状态


// handleRegister逻辑：如果注册表单有遗漏，那么就会报错
// 必须包含用户名、邮箱、密码、确认密码、学号、同意服务条款和隐私政策
const  handleRegister = async () => {

  // 如果用户没有同意服务条款和隐私政策，那么就会报错
  if(!registerForm.agreeToTerms){
    ElMessage.warning(t('register.agreeToTermsRequired')) 
    return
  }

  // 使用表单验证方式
  if (!registerFormRef.value) return  // 如果这个注册表单的组件还没有加载出来，直接return

  try{
    loading.value = true // 开始加载
    await registerFormRef.value.validate() // 这个validate方法是elementplus提供的专门用来自动校验表单


    const result = await authStore.register(registerForm) // 验证通过，调用注册的api

    if(result.success){ // 如果注册成功，
      ElMessage.success(t('register.registerSuccess')) // 那么就会提示注册成功
      router.push('/login') // 然后跳转到登录页面
    }
    else{
      ElMessage.error(result.message) // 如果注册失败，那么就会提示注册失败
    }


    }
  catch(error){
    ElMessage.error(t('register.registerFailed'))  // 如果注册失败，那么就会提示注册失败
    }

  finally{

    loading.value = false // 结束加载
  }


}

// 跳转到登录页面的函数
const goToLogin = () => {
  router.push('/login')
}



</script>








<style scoped lang="scss">
.register-page {
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

.register-card {
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
  .register-form {
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

    // 服务条款样式
    .terms-item {
      margin-bottom: $spacing-md;

      :deep(.el-form-item__content) {
        line-height: 1.6;
      }

      .terms-text {
        font-size: 14px;
        color: $text-secondary;

        .terms-link {
          color: $primary-color;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: darken($primary-color, 10%);
            text-decoration: underline;
          }
        }
      }
    }

    // 按钮组样式
    .button-group {
      margin-bottom: $spacing-md;

      .register-button {
        width: 100%;
        height: 48px;
        font-size: 16px;
        font-weight: 600;
        border-radius: $border-radius-md;
        transition: all 0.3s;

        &:not(.is-disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba($primary-color, 0.3);
        }

        &.is-disabled {
          opacity: 0.6;
          cursor: not-allowed;
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

      .login-link {
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
  .register-page {
    padding: $spacing-md 0;
  }

  .register-card {
    padding: $spacing-xl $spacing-md;

    .header-section {
      .title {
        font-size: 24px;
      }

      .subtitle {
        font-size: 13px;
      }
    }

    .register-form {
      .button-group {
        .register-button {
          height: 44px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>

