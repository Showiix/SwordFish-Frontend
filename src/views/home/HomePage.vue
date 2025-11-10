<template>
  <div class="home-page">
    <!-- Hero区域 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <!-- Logo -->
          <div class="hero-logo">
            <img src="@/assets/images/logo2.png" alt="Swordfish" class="logo-image" />
          </div>

          <!-- 主标题 -->
          <h1 class="hero-title">
            {{ $t('homePage.hero.title') }}
          </h1>

          <!-- 副标题 -->
          <p class="hero-subtitle">
            {{ $t('homePage.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA 行动号召区域 -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">{{ $t('homePage.cta.title') }}</h2>
          <p class="cta-subtitle">
            {{ $t('homePage.cta.subtitle') }}
          </p>
          <div class="cta-buttons">
            <el-button type="primary" size="large" class="cta-btn" @click="goToProducts">
              {{ $t('homePage.cta.browseBtn') }}
            </el-button>
            <el-button size="large" class="cta-btn-outline" @click="goToPublish">
              {{ $t('homePage.cta.publishBtn') }}
            </el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能介绍区域 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">{{ $t('homePage.features.title') }}</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><CircleCheck /></el-icon>
            </div>
            <h3 class="feature-title">{{ $t('homePage.features.secure.title') }}</h3>
            <p class="feature-desc">
              {{ $t('homePage.features.secure.desc') }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><ChatDotRound /></el-icon>
            </div>
            <h3 class="feature-title">{{ $t('homePage.features.communication.title') }}</h3>
            <p class="feature-desc">
              {{ $t('homePage.features.communication.desc') }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><Trophy /></el-icon>
            </div>
            <h3 class="feature-title">{{ $t('homePage.features.credit.title') }}</h3>
            <p class="feature-desc">
              {{ $t('homePage.features.credit.desc') }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><Sunny /></el-icon>
            </div>
            <h3 class="feature-title">{{ $t('homePage.features.green.title') }}</h3>
            <p class="feature-desc">
              {{ $t('homePage.features.green.desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  CircleCheck,
  ChatDotRound,
  Trophy,
  Sunny
} from '@element-plus/icons-vue'

const router = useRouter()

// 跳转到商品列表
const goToProducts = () => {
  router.push('/products')
}

// 跳转到发布商品
const goToPublish = () => {
  router.push('/products/publish')
}
</script>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #005571 0%, #00668c 50%, #4fa8c5 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  // 添加装饰性背景元素
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: rgba(113, 196, 239, 0.15);
    border-radius: 50%;
    filter: blur(80px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: rgba(113, 196, 239, 0.12);
    border-radius: 50%;
    filter: blur(60px);
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-lg;
  position: relative;
  z-index: 1;
}

.hero-logo {
  width: 140px;
  height: 140px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 
              0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }

  .logo-image {
    width: 90px;
    height: 90px;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  max-width: 900px;
  margin: 0;
  color: white;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.02em;

  @media (max-width: $breakpoint-md) {
    font-size: 42px;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: 32px;
  }
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.8;
  max-width: 640px;
  margin: 0;
  opacity: 0.95;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: $breakpoint-sm) {
    font-size: 17px;
  }
}

.features-section {
  background: linear-gradient(to bottom, #f8fbfd 0%, #ffffff 100%);
  padding: 90px 0 70px;
  position: relative;

  .section-title {
    text-align: center;
    margin-bottom: 50px;
    color: #00668c;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
}

.feature-card {
  text-align: center;
  padding: $spacing-xl;
  background: white;
  border-radius: $border-radius-lg;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 102, 140, 0.15);

    .feature-icon {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 16px 40px rgba(113, 196, 239, 0.4);
    }
  }

  .feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 85px;
    background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
    border-radius: $border-radius-full;
    color: white;
    font-size: 42px;
    margin: 0 auto 24px;
    box-shadow: 0 8px 24px rgba(113, 196, 239, 0.3);
    transition: all 0.3s ease;
  }

  .feature-title {
    font-size: 22px;
    font-weight: 700;
    color: #00668c;
    margin: 0 0 12px 0;
    letter-spacing: -0.01em;
  }

  .feature-desc {
    font-size: 15px;
    color: #313d44;
    line-height: 1.7;
    margin: 0;
  }
}

// CTA 行动号召区域
.cta-section {
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  padding: 70px 0;
  position: relative;
  overflow: hidden;

  // 装饰背景
  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -5%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    filter: blur(80px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 450px;
    height: 450px;
    background: rgba(0, 102, 140, 0.08);
    border-radius: 50%;
    filter: blur(60px);
  }
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 42px;
  font-weight: 800;
  color: #00668c;
  margin: 0 0 $spacing-md 0;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);

  @media (max-width: $breakpoint-md) {
    font-size: 36px;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: 28px;
  }
}

.cta-subtitle {
  font-size: 18px;
  color: rgba(0, 85, 113, 0.85);
  line-height: 1.8;
  margin: 0 auto $spacing-xl;
  max-width: 600px;
  font-weight: 500;

  @media (max-width: $breakpoint-sm) {
    font-size: 16px;
  }
}

.cta-buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 600;
  border-radius: $border-radius-lg;
  background: linear-gradient(135deg, #00668c 0%, #005571 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 24px rgba(0, 102, 140, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 102, 140, 0.4);
    background: linear-gradient(135deg, #005571 0%, #003d4d 100%);
    color: white;
  }

  @media (max-width: $breakpoint-sm) {
    padding: 14px 32px;
    font-size: 16px;
    width: 100%;
  }
}

.cta-btn-outline {
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 600;
  border-radius: $border-radius-lg;
  background: white;
  color: $primary-color;
  border: 2px solid white;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.95);
    color: #005571;
    border-color: white;
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.4);
  }

  @media (max-width: $breakpoint-sm) {
    padding: 14px 32px;
    font-size: 16px;
    width: 100%;
  }
}
</style>

