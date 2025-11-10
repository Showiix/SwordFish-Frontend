<template>
  <div class="contact-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('contactPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('contactPage.hero.subtitle') }}</p>
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
                <h3 class="method-title">{{ $t('contactPage.methods.email.title') }}</h3>
                <p class="method-value">{{ $t('contactPage.methods.email.value') }}</p>
                <p class="method-desc">{{ $t('contactPage.methods.email.desc') }}</p>
              </div>

              <div class="method-card">
                <div class="method-icon wechat">
                  <el-icon><ChatDotRound /></el-icon>
                </div>
                <h3 class="method-title">{{ $t('contactPage.methods.wechat.title') }}</h3>
                <p class="method-value">{{ $t('contactPage.methods.wechat.value') }}</p>
                <p class="method-desc">{{ $t('contactPage.methods.wechat.desc') }}</p>
              </div>

              <div class="method-card">
                <div class="method-icon">
                  <el-icon><Location /></el-icon>
                </div>
                <h3 class="method-title">{{ $t('contactPage.methods.address.title') }}</h3>
                <p class="method-value">{{ $t('contactPage.methods.address.value') }}</p>
                <p class="method-desc">{{ $t('contactPage.methods.address.desc') }}</p>
              </div>
            </div>
          </div>

          <!-- 右侧：反馈表单 -->
          <div class="contact-form-section">
            <div class="form-card">
              <h2 class="form-title">{{ $t('contactPage.form.title') }}</h2>
              <p class="form-desc">{{ $t('contactPage.form.desc') }}</p>

              <el-form
                ref="formRef"
                :model="form"
                :rules="rules"
                label-position="top"
                class="contact-form"
              >
                <el-form-item :label="$t('contactPage.form.name')" prop="name">
                  <el-input
                    v-model="form.name"
                    :placeholder="$t('contactPage.form.namePlaceholder')"
                    size="large"
                  />
                </el-form-item>

                <el-form-item :label="$t('contactPage.form.email')" prop="email">
                  <el-input
                    v-model="form.email"
                    :placeholder="$t('contactPage.form.emailPlaceholder')"
                    size="large"
                  />
                </el-form-item>

                <el-form-item :label="$t('contactPage.form.subject')" prop="subject">
                  <el-select
                    v-model="form.subject"
                    :placeholder="$t('contactPage.form.subjectPlaceholder')"
                    size="large"
                    style="width: 100%"
                  >
                    <el-option :label="$t('contactPage.form.subjects.technical')" value="technical" />
                    <el-option :label="$t('contactPage.form.subjects.account')" value="account" />
                    <el-option :label="$t('contactPage.form.subjects.dispute')" value="dispute" />
                    <el-option :label="$t('contactPage.form.subjects.suggestion')" value="suggestion" />
                    <el-option :label="$t('contactPage.form.subjects.cooperation')" value="cooperation" />
                    <el-option :label="$t('contactPage.form.subjects.other')" value="other" />
                  </el-select>
                </el-form-item>

                <el-form-item :label="$t('contactPage.form.message')" prop="message">
                  <el-input
                    v-model="form.message"
                    type="textarea"
                    :rows="6"
                    :placeholder="$t('contactPage.form.messagePlaceholder')"
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
                    {{ submitting ? $t('contactPage.form.submittingBtn') : $t('contactPage.form.submitBtn') }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>

        <!-- FAQ 快速链接 -->
        <div class="quick-links">
          <h3 class="quick-title">{{ $t('contactPage.quickLinks.title') }}</h3>
          <p class="quick-desc">{{ $t('contactPage.quickLinks.desc') }}</p>
          <div class="quick-grid">
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>{{ $t('contactPage.quickLinks.q1') }}</span>
            </a>
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>{{ $t('contactPage.quickLinks.q2') }}</span>
            </a>
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>{{ $t('contactPage.quickLinks.q3') }}</span>
            </a>
            <a href="#" class="quick-link" @click.prevent="goToFAQ">
              <el-icon><QuestionFilled /></el-icon>
              <span>{{ $t('contactPage.quickLinks.q4') }}</span>
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
import { useI18n } from 'vue-i18n'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import {
  Message,
  ChatDotRound,
  Location,
  QuestionFilled
} from '@element-plus/icons-vue'

const router = useRouter()
const { t } = useI18n()

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
    { required: true, message: () => t('contactPage.form.rules.nameRequired'), trigger: 'blur' }
  ],
  email: [
    { required: true, message: () => t('contactPage.form.rules.emailRequired'), trigger: 'blur' },
    { type: 'email', message: () => t('contactPage.form.rules.emailInvalid'), trigger: 'blur' }
  ],
  subject: [
    { required: true, message: () => t('contactPage.form.rules.subjectRequired'), trigger: 'change' }
  ],
  message: [
    { required: true, message: () => t('contactPage.form.rules.messageRequired'), trigger: 'blur' },
    { min: 10, message: () => t('contactPage.form.rules.messageMin'), trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  if (!formRef.value) return

  try {
    await formRef.value.validate()
    submitting.value = true

    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500))

    ElMessage.success(t('contactPage.form.submitSuccess'))

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

