<template>
  <div class="safety-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('safetyPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('safetyPage.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 安全警示 -->
        <div class="warning-card">
          <el-icon class="warning-icon"><Warning /></el-icon>
          <h3 class="warning-title">{{ $t('safetyPage.warning.title') }}</h3>
          <p class="warning-text">{{ $t('safetyPage.warning.content') }}</p>
        </div>

        <!-- 交易安全 -->
        <div class="safety-section">
          <h2 class="section-title">
            <el-icon><ShoppingBag /></el-icon>
            <span>{{ $t('safetyPage.trading.title') }}</span>
          </h2>

          <div class="tips-grid">
            <div class="tip-card">
              <div class="tip-header">
                <el-icon class="tip-icon do"><CircleCheck /></el-icon>
                <h3 class="tip-title">{{ $t('safetyPage.trading.do.title') }}</h3>
              </div>
              <ul class="tip-list">
                <li>{{ $t('safetyPage.trading.do.tip1') }}</li>
                <li>{{ $t('safetyPage.trading.do.tip2') }}</li>
                <li>{{ $t('safetyPage.trading.do.tip3') }}</li>
                <li>{{ $t('safetyPage.trading.do.tip4') }}</li>
                <li>{{ $t('safetyPage.trading.do.tip5') }}</li>
                <li>{{ $t('safetyPage.trading.do.tip6') }}</li>
              </ul>
            </div>

            <div class="tip-card">
              <div class="tip-header">
                <el-icon class="tip-icon dont"><CircleClose /></el-icon>
                <h3 class="tip-title">{{ $t('safetyPage.trading.dont.title') }}</h3>
              </div>
              <ul class="tip-list">
                <li>{{ $t('safetyPage.trading.dont.tip1') }}</li>
                <li>{{ $t('safetyPage.trading.dont.tip2') }}</li>
                <li>{{ $t('safetyPage.trading.dont.tip3') }}</li>
                <li>{{ $t('safetyPage.trading.dont.tip4') }}</li>
                <li>{{ $t('safetyPage.trading.dont.tip5') }}</li>
                <li>{{ $t('safetyPage.trading.dont.tip6') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 账号安全 -->
        <div class="safety-section">
          <h2 class="section-title">
            <el-icon><Lock /></el-icon>
            <span>{{ $t('safetyPage.account.title') }}</span>
          </h2>

          <div class="safety-items">
            <div class="safety-item">
              <div class="item-icon">
                <el-icon><Key /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">{{ $t('safetyPage.account.password.title') }}</h3>
                <p class="item-desc">{{ $t('safetyPage.account.password.desc') }}</p>
              </div>
            </div>

            <div class="safety-item">
              <div class="item-icon">
                <el-icon><Refresh /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">{{ $t('safetyPage.account.change.title') }}</h3>
                <p class="item-desc">{{ $t('safetyPage.account.change.desc') }}</p>
              </div>
            </div>

            <div class="safety-item">
              <div class="item-icon">
                <el-icon><Hide /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">{{ $t('safetyPage.account.protect.title') }}</h3>
                <p class="item-desc">{{ $t('safetyPage.account.protect.desc') }}</p>
              </div>
            </div>

            <div class="safety-item">
              <div class="item-icon">
                <el-icon><View /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">{{ $t('safetyPage.account.notice.title') }}</h3>
                <p class="item-desc">{{ $t('safetyPage.account.notice.desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 防骗指南 -->
        <div class="safety-section">
          <h2 class="section-title">
            <el-icon><WarnTriangleFilled /></el-icon>
            <span>{{ $t('safetyPage.scam.title') }}</span>
          </h2>

          <div class="scam-cards">
            <div class="scam-card">
              <h3 class="scam-title">{{ $t('safetyPage.scam.common.title') }}</h3>
              <ul class="scam-list">
                <li>
                  <strong>{{ $t('safetyPage.scam.common.scam1.title') }}</strong>
                  <p>{{ $t('safetyPage.scam.common.scam1.desc') }}</p>
                </li>
                <li>
                  <strong>{{ $t('safetyPage.scam.common.scam2.title') }}</strong>
                  <p>{{ $t('safetyPage.scam.common.scam2.desc') }}</p>
                </li>
                <li>
                  <strong>{{ $t('safetyPage.scam.common.scam3.title') }}</strong>
                  <p>{{ $t('safetyPage.scam.common.scam3.desc') }}</p>
                </li>
                <li>
                  <strong>{{ $t('safetyPage.scam.common.scam4.title') }}</strong>
                  <p>{{ $t('safetyPage.scam.common.scam4.desc') }}</p>
                </li>
              </ul>
            </div>

            <div class="scam-card">
              <h3 class="scam-title">{{ $t('safetyPage.scam.prevent.title') }}</h3>
              <ul class="scam-list prevention">
                <li>
                  <el-icon><Select /></el-icon>
                  <span>{{ $t('safetyPage.scam.prevent.tip1') }}</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>{{ $t('safetyPage.scam.prevent.tip2') }}</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>{{ $t('safetyPage.scam.prevent.tip3') }}</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>{{ $t('safetyPage.scam.prevent.tip4') }}</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>{{ $t('safetyPage.scam.prevent.tip5') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 紧急联系 -->
        <div class="emergency-section">
          <h3 class="emergency-title">
            <el-icon><Phone /></el-icon>
            <span>{{ $t('safetyPage.emergency.title') }}</span>
          </h3>
          <p class="emergency-desc">{{ $t('safetyPage.emergency.desc') }}</p>
          <div class="emergency-steps">
            <div class="step">
              <div class="step-num">1</div>
              <p>{{ $t('safetyPage.emergency.step1') }}</p>
            </div>
            <div class="step">
              <div class="step-num">2</div>
              <p>{{ $t('safetyPage.emergency.step2') }}</p>
            </div>
            <div class="step">
              <div class="step-num">3</div>
              <p>{{ $t('safetyPage.emergency.step3') }}</p>
            </div>
            <div class="step">
              <div class="step-num">4</div>
              <p>{{ $t('safetyPage.emergency.step4') }}</p>
            </div>
          </div>
          <el-button type="primary" size="large" @click="goToContact">
            {{ $t('safetyPage.emergency.contactBtn') }}
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  Warning,
  ShoppingBag,
  CircleCheck,
  CircleClose,
  Lock,
  Key,
  Refresh,
  Hide,
  View,
  WarnTriangleFilled,
  Select,
  Phone
} from '@element-plus/icons-vue'

const router = useRouter()

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.safety-page {
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

// 警示卡片
.warning-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  margin-bottom: 60px;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.2);
}

.warning-icon {
  font-size: 48px;
  color: #f59e0b;
  margin-bottom: $spacing-lg;
}

.warning-title {
  font-size: 24px;
  font-weight: 700;
  color: #92400e;
  margin: 0 0 $spacing-md 0;
}

.warning-text {
  font-size: 16px;
  color: #92400e;
  line-height: 1.8;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
}

// 安全部分
.safety-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  margin-bottom: $spacing-xl;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.section-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 28px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-xl 0;

  .el-icon {
    font-size: 32px;
  }
}

// 提示网格
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
}

.tip-card {
  border: 2px solid $border-color;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
}

.tip-header {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  margin-bottom: $spacing-lg;
}

.tip-icon {
  font-size: 32px;

  &.do {
    color: #10b981;
  }

  &.dont {
    color: #ef4444;
  }
}

.tip-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0;
}

.tip-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  li {
    font-size: 15px;
    color: $text-secondary;
    line-height: 1.6;
    padding-left: $spacing-md;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: $primary-color;
      font-weight: 700;
    }
  }
}

// 安全项目
.safety-items {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.safety-item {
  display: flex;
  gap: $spacing-lg;
  padding: $spacing-lg;
  background: $bg-secondary;
  border-radius: $border-radius-lg;

  .item-icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
    border-radius: $border-radius-full;
    color: white;
    font-size: 24px;
  }

  .item-content {
    flex: 1;
  }

  .item-title {
    font-size: 18px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-sm 0;
  }

  .item-desc {
    font-size: 15px;
    color: $text-secondary;
    line-height: 1.6;
    margin: 0;
  }
}

// 诈骗卡片
.scam-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
}

.scam-card {
  border: 2px solid $border-color;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
}

.scam-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-lg 0;
}

.scam-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;

  li {
    strong {
      display: block;
      font-size: 16px;
      color: $text-primary;
      margin-bottom: $spacing-xs;
    }

    p {
      font-size: 14px;
      color: $text-secondary;
      margin: 0;
    }
  }

  &.prevention li {
    display: flex;
    align-items: flex-start;
    gap: $spacing-sm;
    font-size: 15px;
    color: $text-secondary;

    .el-icon {
      flex-shrink: 0;
      color: #10b981;
      font-size: 20px;
    }
  }
}

// 紧急联系
.emergency-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.emergency-title {
  display: inline-flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 24px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-md 0;

  .el-icon {
    font-size: 28px;
    color: $primary-color;
  }
}

.emergency-desc {
  font-size: 16px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.emergency-steps {
  display: flex;
  justify-content: center;
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-sm;

  .step-num {
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
  }

  p {
    font-size: 14px;
    color: $text-secondary;
    margin: 0;
  }
}
</style>

