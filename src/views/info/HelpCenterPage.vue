<template>
  <div class="help-center-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('helpCenterPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('helpCenterPage.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 快速导航 -->
        <div class="quick-nav">
          <div class="nav-card" @click="scrollTo('getting-started')">
            <el-icon class="nav-icon"><Guide /></el-icon>
            <h3 class="nav-title">{{ $t('helpCenterPage.quickNav.gettingStarted.title') }}</h3>
            <p class="nav-desc">{{ $t('helpCenterPage.quickNav.gettingStarted.desc') }}</p>
          </div>
          <div class="nav-card" @click="scrollTo('account')">
            <el-icon class="nav-icon"><User /></el-icon>
            <h3 class="nav-title">{{ $t('helpCenterPage.quickNav.account.title') }}</h3>
            <p class="nav-desc">{{ $t('helpCenterPage.quickNav.account.desc') }}</p>
          </div>
          <div class="nav-card" @click="scrollTo('trading')">
            <el-icon class="nav-icon"><ShoppingBag /></el-icon>
            <h3 class="nav-title">{{ $t('helpCenterPage.quickNav.trading.title') }}</h3>
            <p class="nav-desc">{{ $t('helpCenterPage.quickNav.trading.desc') }}</p>
          </div>
          <div class="nav-card" @click="scrollTo('safety')">
            <el-icon class="nav-icon"><Lock /></el-icon>
            <h3 class="nav-title">{{ $t('helpCenterPage.quickNav.safety.title') }}</h3>
            <p class="nav-desc">{{ $t('helpCenterPage.quickNav.safety.desc') }}</p>
          </div>
        </div>

        <!-- 新手入门 -->
        <div id="getting-started" class="help-section">
          <h2 class="help-title">
            <el-icon><Guide /></el-icon>
            <span>{{ $t('helpCenterPage.gettingStarted.title') }}</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.gettingStarted.what.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.gettingStarted.what.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.gettingStarted.howTo.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.gettingStarted.howTo.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.gettingStarted.features.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.gettingStarted.features.content')"></p>
            </div>
          </div>
        </div>

        <!-- 账号管理 -->
        <div id="account" class="help-section">
          <h2 class="help-title">
            <el-icon><User /></el-icon>
            <span>{{ $t('helpCenterPage.account.title') }}</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.account.edit.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.account.edit.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.account.password.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.account.password.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.account.credit.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.account.credit.content')"></p>
            </div>
          </div>
        </div>

        <!-- 交易指南 -->
        <div id="trading" class="help-section">
          <h2 class="help-title">
            <el-icon><ShoppingBag /></el-icon>
            <span>{{ $t('helpCenterPage.trading.title') }}</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.trading.buy.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.trading.buy.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.trading.publish.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.trading.publish.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.trading.review.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.trading.review.content')"></p>
            </div>
          </div>
        </div>

        <!-- 安全保障 -->
        <div id="safety" class="help-section">
          <h2 class="help-title">
            <el-icon><Lock /></el-icon>
            <span>{{ $t('helpCenterPage.safety.title') }}</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.safety.ensure.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.safety.ensure.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.safety.report.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.safety.report.content')"></p>
            </div>
            <div class="help-item">
              <h3 class="item-title">{{ $t('helpCenterPage.safety.dispute.title') }}</h3>
              <p class="item-text" v-html="$t('helpCenterPage.safety.dispute.content')"></p>
            </div>
          </div>
        </div>

        <!-- 联系我们 -->
        <div class="contact-section">
          <h3 class="contact-title">{{ $t('helpCenterPage.cta.title') }}</h3>
          <p class="contact-desc">{{ $t('helpCenterPage.cta.desc') }}</p>
          <div class="contact-buttons">
            <el-button type="primary" size="large" @click="goToFAQ">
              {{ $t('helpCenterPage.cta.faqBtn') }}
            </el-button>
            <el-button size="large" @click="goToContact">
              {{ $t('helpCenterPage.cta.contactBtn') }}
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  Guide,
  User,
  ShoppingBag,
  Lock
} from '@element-plus/icons-vue'

const router = useRouter()

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const goToFAQ = () => {
  router.push('/faq')
}

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.help-center-page {
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

// 快速导航
.quick-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: $spacing-lg;
  margin-bottom: 80px;
}

.nav-card {
  background: white;
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 102, 140, 0.15);

    .nav-icon {
      transform: scale(1.1);
    }
  }
}

.nav-icon {
  font-size: 48px;
  color: $primary-color;
  margin-bottom: $spacing-md;
  transition: transform 0.3s ease;
}

.nav-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-xs 0;
}

.nav-desc {
  font-size: 14px;
  color: $text-secondary;
  margin: 0;
}

// 帮助部分
.help-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  margin-bottom: $spacing-xl;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.help-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 28px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-xl 0;
  padding-bottom: $spacing-lg;
  border-bottom: 2px solid $border-color-light;

  .el-icon {
    font-size: 32px;
  }
}

.help-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.help-item {
  .item-title {
    font-size: 18px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-md 0;
  }

  .item-text {
    font-size: 15px;
    line-height: 1.8;
    color: $text-secondary;
    margin: 0;

    strong {
      color: $primary-color;
      font-weight: 600;
    }
  }
}

// 联系区域
.contact-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.contact-title {
  font-size: 24px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-md 0;
}

.contact-desc {
  font-size: 16px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.contact-buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}
</style>

