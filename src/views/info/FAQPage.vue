<template>
  <div class="faq-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('faqPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('faqPage.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 搜索框 -->
        <div class="search-box">
          <el-input
            v-model="searchKeyword"
            :placeholder="$t('faqPage.searchPlaceholder')"
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
            <h3 class="no-answer-title">{{ $t('faqPage.noAnswer.title') }}</h3>
            <p class="no-answer-desc">
              {{ $t('faqPage.noAnswer.desc') }}
            </p>
            <el-button type="primary" size="large" @click="goToContact">
              {{ $t('faqPage.noAnswer.contactBtn') }}
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
import { useI18n } from 'vue-i18n'
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
const { t } = useI18n()

const searchKeyword = ref('')
const activeCategory = ref('all')
const activeNames = ref<string[]>([])

// 分类
const categories = computed(() => [
  { id: 'all', name: t('faqPage.categories.all'), icon: 'Setting' },
  { id: 'account', name: t('faqPage.categories.account'), icon: 'User' },
  { id: 'trading', name: t('faqPage.categories.trading'), icon: 'ShoppingCart' },
  { id: 'safety', name: t('faqPage.categories.safety'), icon: 'Lock' }
])

// FAQ 数据
const faqs = computed(() => [
  {
    id: '1',
    category: 'account',
    question: t('faqPage.faqs.account.q1.question'),
    answer: t('faqPage.faqs.account.q1.answer')
  },
  {
    id: '2',
    category: 'account',
    question: t('faqPage.faqs.account.q2.question'),
    answer: t('faqPage.faqs.account.q2.answer')
  },
  {
    id: '3',
    category: 'account',
    question: t('faqPage.faqs.account.q3.question'),
    answer: t('faqPage.faqs.account.q3.answer')
  },
  {
    id: '4',
    category: 'account',
    question: t('faqPage.faqs.account.q4.question'),
    answer: t('faqPage.faqs.account.q4.answer')
  },
  {
    id: '5',
    category: 'trading',
    question: t('faqPage.faqs.trading.q1.question'),
    answer: t('faqPage.faqs.trading.q1.answer')
  },
  {
    id: '6',
    category: 'trading',
    question: t('faqPage.faqs.trading.q2.question'),
    answer: t('faqPage.faqs.trading.q2.answer')
  },
  {
    id: '7',
    category: 'trading',
    question: t('faqPage.faqs.trading.q3.question'),
    answer: t('faqPage.faqs.trading.q3.answer')
  },
  {
    id: '8',
    category: 'trading',
    question: t('faqPage.faqs.trading.q4.question'),
    answer: t('faqPage.faqs.trading.q4.answer')
  },
  {
    id: '9',
    category: 'trading',
    question: t('faqPage.faqs.trading.q5.question'),
    answer: t('faqPage.faqs.trading.q5.answer')
  },
  {
    id: '10',
    category: 'trading',
    question: t('faqPage.faqs.trading.q6.question'),
    answer: t('faqPage.faqs.trading.q6.answer')
  },
  {
    id: '11',
    category: 'trading',
    question: t('faqPage.faqs.trading.q7.question'),
    answer: t('faqPage.faqs.trading.q7.answer')
  },
  {
    id: '12',
    category: 'safety',
    question: t('faqPage.faqs.safety.q1.question'),
    answer: t('faqPage.faqs.safety.q1.answer')
  },
  {
    id: '13',
    category: 'safety',
    question: t('faqPage.faqs.safety.q2.question'),
    answer: t('faqPage.faqs.safety.q2.answer')
  },
  {
    id: '14',
    category: 'safety',
    question: t('faqPage.faqs.safety.q3.question'),
    answer: t('faqPage.faqs.safety.q3.answer')
  },
  {
    id: '15',
    category: 'safety',
    question: t('faqPage.faqs.safety.q4.question'),
    answer: t('faqPage.faqs.safety.q4.answer')
  },
  {
    id: '16',
    category: 'account',
    question: t('faqPage.faqs.account.q5.question'),
    answer: t('faqPage.faqs.account.q5.answer')
  }
])

// 过滤 FAQ
const filteredFAQs = computed(() => {
  let result = faqs.value

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

