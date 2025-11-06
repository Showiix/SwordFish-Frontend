<template>
  <div class="contact-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">联系我们</h1>
        <p class="page-subtitle">我们随时准备倾听你的声音</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <div class="contact-grid">
          <!-- 左侧：联系方式 -->
          <div class="contact-info">
            <div class="contact-methods">
              <div class="method-card">
                <div class="method-icon">
                  <el-icon><Message /></el-icon>
                </div>
                <h3 class="method-title">邮箱</h3>
                <p class="method-value">2138757206@qq.com</p>
                <p class="method-desc">我们会在 24 小时内回复</p>
              </div>

              <div class="method-card">
                <div class="method-icon wechat">
                  <el-icon><ChatDotRound /></el-icon>
                </div>
                <h3 class="method-title">微信号</h3>
                <p class="method-value">aa13717132345</p>
                <p class="method-desc">添加微信联系我们</p>
              </div>

              <div class="method-card">
                <div class="method-icon">
                  <el-icon><Location /></el-icon>
                </div>
                <h3 class="method-title">办公地址</h3>
                <p class="method-value">华南师范大学南海校区</p>
                <p class="method-desc">欢迎预约到访</p>
              </div>
            </div>
          </div>

          <!-- 右侧：反馈表单 -->
          <div class="contact-form-section">
            <div class="form-card">
              <h2 class="form-title">发送消息</h2>
              <p class="form-desc">填写下方表单，我们会尽快回复你</p>

              <el-form
                ref="formRef"
                :model="form"
                :rules="rules"
                label-position="top"
                class="contact-form"
              >
                <el-form-item label="姓名" prop="name">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入你的姓名"
                    size="large"
                  />
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                  <el-input
                    v-model="form.email"
                    placeholder="请输入你的邮箱"
                    size="large"
                  />
                </el-form-item>

                <el-form-item label="主题" prop="subject">
                  <el-select
                    v-model="form.subject"
                    placeholder="请选择主题"
                    size="large"
                    style="width: 100%"
                  >
                    <el-option label="技术问题" value="technical" />
                    <el-option label="账号问题" value="account" />
                    <el-option label="交易纠纷" value="dispute" />
                    <el-option label="功能建议" value="suggestion" />
                    <el-option label="合作咨询" value="cooperation" />
                    <el-option label="其他" value="other" />
                  </el-select>
                </el-form-item>

                <el-form-item label="消息内容" prop="message">
                  <el-input
                    v-model="form.message"
                    type="textarea"
                    :rows="6"
                    placeholder="请详细描述你的问题或建议..."
                    maxlength="500"
                    show-word-limit
                  />
                </el-form-item>

                <el-form-item>
                  <el-button
                    type="primary"
                    size="large"
                    :loading="submitting"
                    @click="handleSubmit"
                    style="width: 100%"
                  >
                    {{ submitting ? '发送中...' : '发送消息' }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>

        <!-- FAQ 快速链接 -->
        <div class="quick-links">
          <h3 class="quick-title">常见问题</h3>
          <p class="quick-desc">或许这里能找到你的答案</p>
          <div class="quick-grid">
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>如何注册账号？</span>
            </a>
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>如何发布商品？</span>
            </a>
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>如何确保交易安全？</span>
            </a>
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>忘记密码怎么办？</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import {
  Message,
  ChatDotRound,
  Location,
  QuestionFilled
} from '@element-plus/icons-vue'

const router = useRouter()

const formRef = ref<FormInstance>()
const submitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const rules: FormRules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  subject: [
    { required: true, message: '请选择主题', trigger: 'change' }
  ],
  message: [
    { required: true, message: '请输入消息内容', trigger: 'blur' },
    { min: 10, message: '消息内容至少 10 个字符', trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  if (!formRef.value) return

  try {
    await formRef.value.validate()
    submitting.value = true

    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500))

    ElMessage.success('消息发送成功！我们会尽快回复你')
    
    // 重置表单
    formRef.value.resetFields()
  } catch (error) {
    console.error('表单验证失败:', error)
  } finally {
    submitting.value = false
  }
}

const goToFAQ = () => {
  router.push('/faq')
}
</script>

<style scoped lang="scss">
.contact-page {
  min-height: 100vh;
  background: $bg-secondary;
}

.page-hero {
  background: linear-gradient(135deg, #005571 0%, #00668c 50%, #4fa8c5 100%);
  color: white;
  padding: 80px 0 60px;
  text-align: center;
}

.page-title {
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 $spacing-md 0;
  letter-spacing: -0.02em;

  @media (max-width: $breakpoint-sm) {
    font-size: 36px;
  }
}

.page-subtitle {
  font-size: 20px;
  opacity: 0.9;
  margin: 0;
}

.page-content {
  padding: 80px 0;
}

// 联系网格
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: $spacing-2xl;
  margin-bottom: 80px;
  align-items: start; // 顶部对齐

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

// 联系信息
.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  margin-bottom: $spacing-2xl;
}

.method-card {
  background: white;
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 102, 140, 0.12);
  }
}

.method-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  border-radius: $border-radius-full;
  color: white;
  font-size: 24px;
  margin-bottom: $spacing-md;

  &.wechat {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  }
}

.method-title {
  font-size: 18px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-xs 0;
}

.method-value {
  font-size: 16px;
  font-weight: 500;
  color: $primary-color;
  margin: 0 0 $spacing-xs 0;
}

.method-desc {
  font-size: 14px;
  color: $text-secondary;
  margin: 0;
}

// 表单区域
.contact-form-section {
  .form-card {
    background: white;
    padding: $spacing-2xl;
    border-radius: $border-radius-lg;
    box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
    height: 100%; // 使卡片高度一致
  }

  .form-title {
    font-size: 28px;
    font-weight: 700;
    color: $text-primary;
    margin: 0 0 $spacing-sm 0;
  }

  .form-desc {
    font-size: 15px;
    color: $text-secondary;
    margin: 0 0 $spacing-xl 0;
  }
}

.contact-form {
  :deep(.el-form-item__label) {
    font-weight: 500;
    color: $text-primary;
  }
}

// 快速链接
.quick-links {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
  text-align: center;
}

.quick-title {
  font-size: 24px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;
}

.quick-desc {
  font-size: 15px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-md;
}

.quick-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  padding: $spacing-md;
  background: $bg-secondary;
  border-radius: $border-radius-lg;
  color: $text-secondary;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
    color: white;
    transform: translateY(-2px);
  }

  .el-icon {
    font-size: 18px;
  }
}
</style>

