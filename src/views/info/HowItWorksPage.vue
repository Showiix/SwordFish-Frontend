<template>
  <div class="how-it-works-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('howItWorksPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('howItWorksPage.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 买家指南 -->
        <div class="content-section">
          <div class="section-header">
            <div class="section-icon">
              <el-icon><ShoppingCart /></el-icon>
            </div>
            <h2 class="section-title">{{ $t('howItWorksPage.buyer.title') }}</h2>
          </div>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-icon">
                <el-icon><Search /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.buyer.step1.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.buyer.step1.desc') }}
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-icon">
                <el-icon><View /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.buyer.step2.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.buyer.step2.desc') }}
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-icon">
                <el-icon><ChatDotRound /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.buyer.step3.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.buyer.step3.desc') }}
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-icon">
                <el-icon><CircleCheck /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.buyer.step4.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.buyer.step4.desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- 卖家指南 -->
        <div class="content-section">
          <div class="section-header">
            <div class="section-icon seller">
              <el-icon><Sell /></el-icon>
            </div>
            <h2 class="section-title">{{ $t('howItWorksPage.seller.title') }}</h2>
          </div>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-icon seller">
                <el-icon><Plus /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.seller.step1.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.seller.step1.desc') }}
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-icon seller">
                <el-icon><PriceTag /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.seller.step2.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.seller.step2.desc') }}
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-icon seller">
                <el-icon><Message /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.seller.step3.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.seller.step3.desc') }}
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-icon seller">
                <el-icon><Checked /></el-icon>
              </div>
              <h3 class="step-title">{{ $t('howItWorksPage.seller.step4.title') }}</h3>
              <p class="step-desc">
                {{ $t('howItWorksPage.seller.step4.desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- 安全提示 -->
        <div class="content-section">
          <div class="safety-card">
            <div class="safety-icon">
              <el-icon><Warning /></el-icon>
            </div>
            <h2 class="safety-title">{{ $t('howItWorksPage.safety.title') }}</h2>
            <div class="safety-tips">
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>{{ $t('howItWorksPage.safety.tip1') }}</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>{{ $t('howItWorksPage.safety.tip2') }}</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>{{ $t('howItWorksPage.safety.tip3') }}</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>{{ $t('howItWorksPage.safety.tip4') }}</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>{{ $t('howItWorksPage.safety.tip5') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="content-section cta-section">
          <h2 class="cta-title">{{ $t('howItWorksPage.cta.title') }}</h2>
          <p class="cta-subtitle">
            {{ $t('howItWorksPage.cta.subtitle') }}
          </p>
          <div class="cta-buttons">
            <el-button type="primary" size="large" @click="goToProducts">
              {{ $t('howItWorksPage.cta.browseBtn') }}
            </el-button>
            <el-button size="large" @click="goToPublish">
              {{ $t('howItWorksPage.cta.publishBtn') }}
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
  ShoppingCart,
  Search,
  View,
  ChatDotRound,
  CircleCheck,
  Sell,
  Plus,
  PriceTag,
  Message,
  Checked,
  Warning,
  Select
} from '@element-plus/icons-vue'

const router = useRouter()

const goToProducts = () => {
  router.push('/products')
}

const goToPublish = () => {
  router.push('/products/publish')
}
</script>

<style scoped lang="scss">
.how-it-works-page {
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

.content-section {
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  border-radius: $border-radius-full;
  color: white;
  font-size: 28px;
  box-shadow: 0 8px 24px rgba(113, 196, 239, 0.3);

  &.seller {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
  }
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: $primary-color;
  margin: 0;
}

// 步骤网格
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
}

.step-card {
  position: relative;
  background: white;
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 102, 140, 0.15);
  }
}

.step-number {
  position: absolute;
  top: -15px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  color: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: $border-radius-full;
  box-shadow: 0 4px 12px rgba(113, 196, 239, 0.4);
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  border-radius: $border-radius-lg;
  color: white;
  font-size: 24px;
  margin-bottom: $spacing-md;

  &.seller {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  }
}

.step-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;
}

.step-desc {
  font-size: 15px;
  line-height: 1.6;
  color: $text-secondary;
  margin: 0;
}

// 安全提示卡片
.safety-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.2);
}

.safety-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #f59e0b;
  border-radius: $border-radius-full;
  color: white;
  font-size: 28px;
  margin-bottom: $spacing-lg;
}

.safety-title {
  font-size: 28px;
  font-weight: 700;
  color: #92400e;
  margin: 0 0 $spacing-xl 0;
}

.safety-tips {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 16px;
  color: #92400e;

  .el-icon {
    font-size: 20px;
    color: #10b981;
  }
}

// CTA 区域
.cta-section {
  text-align: center;
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.cta-title {
  font-size: 32px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-md 0;
}

.cta-subtitle {
  font-size: 18px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.cta-buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}
</style>
