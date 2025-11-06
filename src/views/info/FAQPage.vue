<template>
  <div class="faq-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">常见问题</h1>
        <p class="page-subtitle">快速找到你想了解的问题答案</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 搜索框 -->
        <div class="search-box">
          <el-input
            v-model="searchKeyword"
            placeholder="搜索问题..."
            size="large"
            clearable
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
        </div>

        <!-- FAQ 分类标签 -->
        <div class="category-tabs">
          <button
            v-for="cat in categories"
            :key="cat.id"
            class="category-tab"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            <el-icon><component :is="cat.icon" /></el-icon>
            <span>{{ cat.name }}</span>
          </button>
        </div>

        <!-- FAQ 列表 -->
        <div class="faq-list">
          <el-collapse v-model="activeNames">
            <el-collapse-item
              v-for="item in filteredFAQs"
              :key="item.id"
              :name="item.id"
              class="faq-item"
            >
              <template #title>
                <div class="faq-question">
                  <el-icon class="question-icon"><QuestionFilled /></el-icon>
                  <span>{{ item.question }}</span>
                </div>
              </template>
              <div class="faq-answer">
                <p v-html="item.answer"></p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <!-- 找不到答案 -->
        <div class="no-answer-section">
          <div class="no-answer-card">
            <el-icon class="no-answer-icon"><ChatDotRound /></el-icon>
            <h3 class="no-answer-title">没有找到你要的答案？</h3>
            <p class="no-answer-desc">
              联系我们的客服团队，我们会尽快为你解答
            </p>
            <el-button type="primary" size="large" @click="goToContact">
              联系客服
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  Search,
  QuestionFilled,
  ChatDotRound,
  User,
  ShoppingCart,
  Setting,
  Lock
} from '@element-plus/icons-vue'

const router = useRouter()

const searchKeyword = ref('')
const activeCategory = ref('all')
const activeNames = ref<string[]>([])

// 分类
const categories = [
  { id: 'all', name: '全部', icon: 'Setting' },
  { id: 'account', name: '账号相关', icon: 'User' },
  { id: 'trading', name: '交易相关', icon: 'ShoppingCart' },
  { id: 'safety', name: '安全相关', icon: 'Lock' }
]

// FAQ 数据
const faqs = [
  {
    id: '1',
    category: 'account',
    question: '如何注册 Swordfish 账号？',
    answer: '点击页面右上角的"登录"按钮，然后选择"注册"。填写你的学号、姓名、密码等信息，完成邮箱验证即可注册成功。'
  },
  {
    id: '2',
    category: 'account',
    question: '忘记密码怎么办？',
    answer: '在登录页面点击"忘记密码"，输入你的注册邮箱，我们会向你发送重置密码的链接。点击链接即可设置新密码。'
  },
  {
    id: '3',
    category: 'account',
    question: '如何修改个人信息？',
    answer: '登录后点击右上角的头像，选择"个人中心"，即可编辑你的个人信息、头像、联系方式等。'
  },
  {
    id: '4',
    category: 'account',
    question: '信用评分是如何计算的？',
    answer: '信用评分基于你的交易历史、买卖双方评价、账号活跃度等多个维度综合计算。保持良好的交易记录可以提升信用分数。'
  },
  {
    id: '5',
    category: 'trading',
    question: '如何发布商品？',
    answer: '登录后点击页面顶部的"发布商品"按钮，填写商品信息、上传图片、设置价格，提交审核即可。审核通过后商品会在平台上展示。'
  },
  {
    id: '6',
    category: 'trading',
    question: '商品审核需要多长时间？',
    answer: '通常情况下，商品审核会在 24 小时内完成。我们会检查商品信息是否完整、图片是否清晰、描述是否准确等。'
  },
  {
    id: '7',
    category: 'trading',
    question: '可以修改已发布的商品信息吗？',
    answer: '可以。在"我的商品"页面找到对应商品，点击"编辑"即可修改商品信息。修改后需要重新审核。'
  },
  {
    id: '8',
    category: 'trading',
    question: '如何联系卖家/买家？',
    answer: '在商品详情页点击"联系卖家"按钮，即可打开聊天窗口。平台提供实时聊天功能，你可以与对方沟通商品细节、约定交易时间地点等。'
  },
  {
    id: '9',
    category: 'trading',
    question: '交易方式有哪些？',
    answer: '我们建议在校园内公共场所进行当面交易。买家验货无误后再付款，确保交易安全。暂不支持线上支付和邮寄交易。'
  },
  {
    id: '10',
    category: 'trading',
    question: '商品卖出后如何操作？',
    answer: '交易完成后，请在"我的商品"中将商品标记为"已售出"。同时记得给买家评价，帮助建立良好的社区信用体系。'
  },
  {
    id: '11',
    category: 'trading',
    question: '可以下架商品吗？',
    answer: '可以。在"我的商品"页面找到对应商品，点击"下架"按钮即可。下架后的商品不会在平台上显示，但信息会保留。'
  },
  {
    id: '12',
    category: 'safety',
    question: '如何确保交易安全？',
    answer: '建议在校园内人流量大的公共场所进行当面交易，仔细验货后再付款。保留聊天记录和交易凭证，遇到可疑情况及时联系客服。'
  },
  {
    id: '13',
    category: 'safety',
    question: '遇到诈骗怎么办？',
    answer: '立即停止交易，保留聊天记录和相关证据，联系平台客服举报。我们会对违规用户进行处理，必要时协助报警。'
  },
  {
    id: '14',
    category: 'safety',
    question: '个人信息会泄露吗？',
    answer: '我们严格保护用户隐私。你的手机号、邮箱等敏感信息不会公开显示。聊天记录经过加密传输，请放心使用。'
  },
  {
    id: '15',
    category: 'safety',
    question: '如何举报违规商品或用户？',
    answer: '在商品详情页或用户主页点击"举报"按钮，选择举报原因并提交。我们会在 24 小时内处理举报并给予反馈。'
  },
  {
    id: '16',
    category: 'account',
    question: '可以注销账号吗？',
    answer: '可以。在"个人中心"-"账号设置"中选择"注销账号"。注意：注销后你的账号信息、交易记录等将被永久删除且无法恢复。'
  }
]

// 过滤 FAQ
const filteredFAQs = computed(() => {
  let result = faqs

  // 按分类筛选
  if (activeCategory.value !== 'all') {
    result = result.filter(faq => faq.category === activeCategory.value)
  }

  // 按关键词搜索
  if (searchKeyword.value.trim()) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(faq =>
      faq.question.toLowerCase().includes(keyword) ||
      faq.answer.toLowerCase().includes(keyword)
    )
  }

  return result
})

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.faq-page {
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

// 搜索框
.search-box {
  max-width: 600px;
  margin: 0 auto $spacing-2xl;

  :deep(.el-input__wrapper) {
    box-shadow: 0 4px 16px rgba(0, 102, 140, 0.1);
    border-radius: $border-radius-lg;
  }
}

// 分类标签
.category-tabs {
  display: flex;
  gap: $spacing-md;
  margin-bottom: $spacing-2xl;
  overflow-x: auto;
  padding-bottom: $spacing-sm;

  &::-webkit-scrollbar {
    height: 4px;
  }
}

.category-tab {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-md $spacing-lg;
  background: white;
  border: 2px solid $border-color;
  border-radius: $border-radius-full;
  color: $text-secondary;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: $primary-color;
    color: $primary-color;
  }

  &.active {
    background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
    border-color: #71c4ef;
    color: white;
  }

  .el-icon {
    font-size: 18px;
  }
}

// FAQ 列表
.faq-list {
  background: white;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.faq-item {
  :deep(.el-collapse-item__header) {
    padding: $spacing-lg;
    font-size: 16px;
    border-bottom: 1px solid $border-color-light;
  }

  :deep(.el-collapse-item__wrap) {
    border-bottom: 1px solid $border-color-light;
  }

  :deep(.el-collapse-item__content) {
    padding: $spacing-lg;
  }
}

.faq-question {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-weight: 500;
  color: $text-primary;

  .question-icon {
    font-size: 20px;
    color: $primary-color;
  }
}

.faq-answer {
  font-size: 15px;
  line-height: 1.8;
  color: $text-secondary;

  p {
    margin: 0;
  }
}

// 找不到答案
.no-answer-section {
  margin-top: $spacing-2xl;
}

.no-answer-card {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.no-answer-icon {
  font-size: 48px;
  color: $primary-color;
  margin-bottom: $spacing-lg;
}

.no-answer-title {
  font-size: 24px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-md 0;
}

.no-answer-desc {
  font-size: 16px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}
</style>

