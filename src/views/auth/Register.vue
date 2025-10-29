<template>
  <div class="register-page">
    <div class="container">
      <div class="register-card">
        <!-- 标题 -->
        <h1>{{ $t('register.title') }}</h1>
        <!-- 副标题 -->
        <p class = "subtitle" >  {{ $t('register.subtitle') }}</p>

        <!-- 表单 -->
        <el-form 
        :model="registerForm" 
        label-width="100px"
        ref="registerFormRef"
        :rules="registerRules"
        >
          <el-form-item :label="$t('register.username')" prop="username" >
            <el-input v-model="registerForm.username" 
            :placeholder="$t('register.usernamePlaceholder')" 
            />
          </el-form-item>

          <!-- 邮箱 -->
          <el-form-item :label="$t('register.email')" prop="email" >
            <el-input v-model="registerForm.email" 
            :placeholder="$t('register.emailPlaceholder')" 
            />
          
          
          </el-form-item>

          <!-- 密码 -->
          <el-form-item :label="$t('register.password')" prop="password">
            <el-input v-model="registerForm.password" 
            :placeholder="$t('register.passwordPlaceholder')" 
            />

          </el-form-item>

          <!-- 确认密码 -->
          <el-form-item :label="$t('register.confirmPassword')" prop="confirmPassword">
            <el-input v-model="registerForm.confirmPassword"
            :placeholder="$t('register.confirmPasswordPlaceholder')" 
            show-password
            />
          </el-form-item>

          <!-- 学号 -->
          <el-form-item :label="$t('register.student_id')" prop="student_id" >
            <el-input v-model="registerForm.student_id" 
            :placeholder="$t('register.student_idPlaceholder')" 
            />
          </el-form-item>


          <!-- 同意服务条款和隐私政策 -->
          <el-form-item :label="$t('register.agreeToTerms')" >
            <el-checkbox v-model="registerForm.agreeToTerms" />
            <!-- TODO 服务条款和隐私政策的跳转link待开发 -->

          </el-form-item>


          <!-- 提交注册按钮 -->
          <el-form-item>
            <el-button 
              type="primary" 
              :disabled="!registerForm.agreeToTerms"
              @click="handleRegister"
              :loading="loading">


              {{ $t('register.registerButton') }}

            </el-button>
          </el-form-item>


          <!-- 去登陆按钮 -->
          <el-button @click= "goToLogin"> 
            {{ $t('register.goLogin') }}
          </el-button>



        </el-form>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
// 注册页面
import { reactive , ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '@/store/modules/auth'
import type { RegisterForm } from '@/types/auth'
import type { FormInstance , FormRules } from 'element-plus' // 引入FormInstance和FormRules 表单实例和表单规则


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
      { validator: (rule: any, value: any, callback: any) => {
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

