<template>
  <div class="terms-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('termsPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('termsPage.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 引言 -->
        <div class="intro-section">
          <p class="intro-text">{{ $t('termsPage.intro') }}</p>
        </div>

        <!-- 条款内容 -->
        <div class="terms-content">
          <!-- 第一条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.service.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.service.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.service.item2') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.service.item3') }}</p>
            </div>
          </div>

          <!-- 第二条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.account.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.account.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.account.item2') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.account.item3') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.account.item4') }}</p>
            </div>
          </div>

          <!-- 第三条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.behavior.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.behavior.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.behavior.item2') }}</p>
              <ul class="term-list">
                <li>{{ $t('termsPage.sections.behavior.prohibited.item1') }}</li>
                <li>{{ $t('termsPage.sections.behavior.prohibited.item2') }}</li>
                <li>{{ $t('termsPage.sections.behavior.prohibited.item3') }}</li>
                <li>{{ $t('termsPage.sections.behavior.prohibited.item4') }}</li>
                <li>{{ $t('termsPage.sections.behavior.prohibited.item5') }}</li>
              </ul>
              <p class="term-text">{{ $t('termsPage.sections.behavior.item3') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.behavior.item4') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.behavior.item5') }}</p>
            </div>
          </div>

          <!-- 第四条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.trading.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.trading.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.trading.item2') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.trading.item3') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.trading.item4') }}</p>
            </div>
          </div>

          <!-- 第五条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.intellectual.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.intellectual.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.intellectual.item2') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.intellectual.item3') }}</p>
            </div>
          </div>

          <!-- 第六条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.privacy.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.privacy.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.privacy.item2') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.privacy.item3') }}</p>
            </div>
          </div>

          <!-- 第七条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.disclaimer.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.disclaimer.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.disclaimer.item2') }}</p>
              <ul class="term-list">
                <li>{{ $t('termsPage.sections.disclaimer.situations.item1') }}</li>
                <li>{{ $t('termsPage.sections.disclaimer.situations.item2') }}</li>
                <li>{{ $t('termsPage.sections.disclaimer.situations.item3') }}</li>
                <li>{{ $t('termsPage.sections.disclaimer.situations.item4') }}</li>
                <li>{{ $t('termsPage.sections.disclaimer.situations.item5') }}</li>
              </ul>
              <p class="term-text">{{ $t('termsPage.sections.disclaimer.item3') }}</p>
            </div>
          </div>

          <!-- 第八条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.violation.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.violation.item1') }}</p>
              <ul class="term-list">
                <li>{{ $t('termsPage.sections.violation.measures.item1') }}</li>
                <li>{{ $t('termsPage.sections.violation.measures.item2') }}</li>
                <li>{{ $t('termsPage.sections.violation.measures.item3') }}</li>
                <li>{{ $t('termsPage.sections.violation.measures.item4') }}</li>
                <li>{{ $t('termsPage.sections.violation.measures.item5') }}</li>
              </ul>
              <p class="term-text">{{ $t('termsPage.sections.violation.item2') }}</p>
            </div>
          </div>

          <!-- 第九条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.changes.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.changes.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.changes.item2') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.changes.item3') }}</p>
            </div>
          </div>

          <!-- 第十条 -->
          <div class="term-section">
            <h2 class="term-title">{{ $t('termsPage.sections.other.title') }}</h2>
            <div class="term-content">
              <p class="term-text">{{ $t('termsPage.sections.other.item1') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.other.item2') }}</p>
              <p class="term-text">{{ $t('termsPage.sections.other.item3') }}</p>
            </div>
          </div>
        </div>

        <!-- 底部联系 -->
        <div class="contact-footer">
          <p class="footer-text">
            {{ $t('termsPage.footer.question') }}
            <el-button type="primary" link @click="goToContact">{{ $t('termsPage.footer.contactLink') }}</el-button>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.terms-page {
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
  font-size: 16px;
  opacity: 0.85;
  margin: 0;
}

.page-content {
  padding: 80px 0;
}

// 引言
.intro-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  margin-bottom: $spacing-xl;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.intro-text {
  font-size: 16px;
  line-height: 1.8;
  color: $text-secondary;
  margin: 0;
}

// 条款内容
.terms-content {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.term-section {
  padding: $spacing-xl 0;
  border-bottom: 1px solid $border-color-light;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
}

.term-title {
  font-size: 24px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-lg 0;
}

.term-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.term-text {
  font-size: 15px;
  line-height: 1.8;
  color: $text-secondary;
  margin: 0;
}

.term-list {
  padding-left: $spacing-xl;
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;

  li {
    font-size: 15px;
    line-height: 1.8;
    color: $text-secondary;
  }
}

// 底部联系
.contact-footer {
  margin-top: $spacing-xl;
  padding: $spacing-xl;
  background: white;
  border-radius: $border-radius-lg;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.footer-text {
  font-size: 16px;
  color: $text-secondary;
  margin: 0;
}
</style>

