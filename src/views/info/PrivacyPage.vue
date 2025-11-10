<template>
  <div class="privacy-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('privacyPage.hero.title') }}</h1>
        <p class="page-subtitle">{{ $t('privacyPage.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 引言 -->
        <div class="intro-section">
          <p class="intro-text">{{ $t('privacyPage.intro') }}</p>
          <div class="highlight-box">
            <el-icon class="highlight-icon"><Lock /></el-icon>
            <p class="highlight-text">{{ $t('privacyPage.commitment') }}</p>
          </div>
        </div>

        <!-- 隐私内容 -->
        <div class="privacy-content">
          <!-- 第一条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">1</span>
              <span>{{ $t('privacyPage.collection.title') }}</span>
            </h2>
            <div class="privacy-text">
              <h3 class="sub-title">{{ $t('privacyPage.collection.provided.title') }}</h3>
              <p>{{ $t('privacyPage.collection.provided.intro') }}</p>
              <ul class="info-list">
                <li v-html="$t('privacyPage.collection.provided.account')"></li>
                <li v-html="$t('privacyPage.collection.provided.profile')"></li>
                <li v-html="$t('privacyPage.collection.provided.product')"></li>
                <li v-html="$t('privacyPage.collection.provided.transaction')"></li>
              </ul>

              <h3 class="sub-title">{{ $t('privacyPage.collection.auto.title') }}</h3>
              <p>{{ $t('privacyPage.collection.auto.intro') }}</p>
              <ul class="info-list">
                <li v-html="$t('privacyPage.collection.auto.device')"></li>
                <li v-html="$t('privacyPage.collection.auto.log')"></li>
                <li v-html="$t('privacyPage.collection.auto.location')"></li>
                <li v-html="$t('privacyPage.collection.auto.cookie')"></li>
              </ul>
            </div>
          </div>

          <!-- 第二条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">2</span>
              <span>{{ $t('privacyPage.usage.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.usage.intro') }}</p>
              <ul class="info-list">
                <li v-html="$t('privacyPage.usage.service')"></li>
                <li v-html="$t('privacyPage.usage.auth')"></li>
                <li v-html="$t('privacyPage.usage.improve')"></li>
                <li v-html="$t('privacyPage.usage.security')"></li>
                <li v-html="$t('privacyPage.usage.support')"></li>
                <li v-html="$t('privacyPage.usage.notification')"></li>
              </ul>
            </div>
          </div>

          <!-- 第三条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">3</span>
              <span>{{ $t('privacyPage.sharing.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.sharing.intro') }}</p>

              <h3 class="sub-title">{{ $t('privacyPage.sharing.consent.title') }}</h3>
              <p>{{ $t('privacyPage.sharing.consent.desc') }}</p>

              <h3 class="sub-title">{{ $t('privacyPage.sharing.platform.title') }}</h3>
              <p>{{ $t('privacyPage.sharing.platform.desc') }}</p>

              <h3 class="sub-title">{{ $t('privacyPage.sharing.legal.title') }}</h3>
              <p>{{ $t('privacyPage.sharing.legal.desc') }}</p>

              <h3 class="sub-title">{{ $t('privacyPage.sharing.affiliate.title') }}</h3>
              <p>{{ $t('privacyPage.sharing.affiliate.desc') }}</p>
            </div>
          </div>

          <!-- 第四条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">4</span>
              <span>{{ $t('privacyPage.storage.title') }}</span>
            </h2>
            <div class="privacy-text">
              <h3 class="sub-title">{{ $t('privacyPage.storage.location.title') }}</h3>
              <p>{{ $t('privacyPage.storage.location.desc') }}</p>

              <h3 class="sub-title">{{ $t('privacyPage.storage.period.title') }}</h3>
              <p>{{ $t('privacyPage.storage.period.desc') }}</p>

              <h3 class="sub-title">{{ $t('privacyPage.storage.deletion.title') }}</h3>
              <p>{{ $t('privacyPage.storage.deletion.desc') }}</p>
            </div>
          </div>

          <!-- 第五条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">5</span>
              <span>{{ $t('privacyPage.protection.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.protection.intro') }}</p>

              <div class="security-grid">
                <div class="security-card">
                  <el-icon class="security-icon"><Lock /></el-icon>
                  <h4 class="security-title">{{ $t('privacyPage.protection.encryption.title') }}</h4>
                  <p class="security-desc">{{ $t('privacyPage.protection.encryption.desc') }}</p>
                </div>
                <div class="security-card">
                  <el-icon class="security-icon"><CircleCheck /></el-icon>
                  <h4 class="security-title">{{ $t('privacyPage.protection.access.title') }}</h4>
                  <p class="security-desc">{{ $t('privacyPage.protection.access.desc') }}</p>
                </div>
                <div class="security-card">
                  <el-icon class="security-icon"><Platform /></el-icon>
                  <h4 class="security-title">{{ $t('privacyPage.protection.monitor.title') }}</h4>
                  <p class="security-desc">{{ $t('privacyPage.protection.monitor.desc') }}</p>
                </div>
                <div class="security-card">
                  <el-icon class="security-icon"><CopyDocument /></el-icon>
                  <h4 class="security-title">{{ $t('privacyPage.protection.backup.title') }}</h4>
                  <p class="security-desc">{{ $t('privacyPage.protection.backup.desc') }}</p>
                </div>
              </div>

              <p class="warning-text">
                <el-icon><Warning /></el-icon>
                <span>{{ $t('privacyPage.protection.warning') }}</span>
              </p>
            </div>
          </div>

          <!-- 第六条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">6</span>
              <span>{{ $t('privacyPage.rights.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.rights.intro') }}</p>

              <div class="rights-list">
                <div class="right-item">
                  <div class="right-icon">
                    <el-icon><View /></el-icon>
                  </div>
                  <div class="right-content">
                    <h4 class="right-title">{{ $t('privacyPage.rights.access.title') }}</h4>
                    <p class="right-desc">{{ $t('privacyPage.rights.access.desc') }}</p>
                  </div>
                </div>
                <div class="right-item">
                  <div class="right-icon">
                    <el-icon><Edit /></el-icon>
                  </div>
                  <div class="right-content">
                    <h4 class="right-title">{{ $t('privacyPage.rights.correct.title') }}</h4>
                    <p class="right-desc">{{ $t('privacyPage.rights.correct.desc') }}</p>
                  </div>
                </div>
                <div class="right-item">
                  <div class="right-icon">
                    <el-icon><Delete /></el-icon>
                  </div>
                  <div class="right-content">
                    <h4 class="right-title">{{ $t('privacyPage.rights.delete.title') }}</h4>
                    <p class="right-desc">{{ $t('privacyPage.rights.delete.desc') }}</p>
                  </div>
                </div>
                <div class="right-item">
                  <div class="right-icon">
                    <el-icon><Download /></el-icon>
                  </div>
                  <div class="right-content">
                    <h4 class="right-title">{{ $t('privacyPage.rights.portable.title') }}</h4>
                    <p class="right-desc">{{ $t('privacyPage.rights.portable.desc') }}</p>
                  </div>
                </div>
                <div class="right-item">
                  <div class="right-icon">
                    <el-icon><CloseBold /></el-icon>
                  </div>
                  <div class="right-content">
                    <h4 class="right-title">{{ $t('privacyPage.rights.cancel.title') }}</h4>
                    <p class="right-desc">{{ $t('privacyPage.rights.cancel.desc') }}</p>
                  </div>
                </div>
              </div>

              <p>{{ $t('privacyPage.rights.contact') }}</p>
            </div>
          </div>

          <!-- 第七条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">7</span>
              <span>{{ $t('privacyPage.minors.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.minors.intro') }}</p>
              <ul class="info-list">
                <li>{{ $t('privacyPage.minors.item1') }}</li>
                <li>{{ $t('privacyPage.minors.item2') }}</li>
                <li>{{ $t('privacyPage.minors.item3') }}</li>
                <li>{{ $t('privacyPage.minors.item4') }}</li>
              </ul>
            </div>
          </div>

          <!-- 第八条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">8</span>
              <span>{{ $t('privacyPage.cookie.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.cookie.intro') }}</p>
              <ul class="info-list">
                <li v-html="$t('privacyPage.cookie.necessary')"></li>
                <li v-html="$t('privacyPage.cookie.functional')"></li>
                <li v-html="$t('privacyPage.cookie.analytical')"></li>
              </ul>
              <p>{{ $t('privacyPage.cookie.manage') }}</p>
            </div>
          </div>

          <!-- 第九条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">9</span>
              <span>{{ $t('privacyPage.updates.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.updates.item1') }}</p>
              <p>{{ $t('privacyPage.updates.item2') }}</p>
            </div>
          </div>

          <!-- 第十条 -->
          <div class="privacy-section">
            <h2 class="privacy-title">
              <span class="title-number">10</span>
              <span>{{ $t('privacyPage.contact.title') }}</span>
            </h2>
            <div class="privacy-text">
              <p>{{ $t('privacyPage.contact.intro') }}</p>
              <div class="contact-info">
                <p v-html="$t('privacyPage.contact.email')"></p>
                <p v-html="$t('privacyPage.contact.wechat')"></p>
                <p v-html="$t('privacyPage.contact.address')"></p>
              </div>
              <p>{{ $t('privacyPage.contact.response') }}</p>
            </div>
          </div>
        </div>

        <!-- 底部提示 -->
        <div class="footer-cta">
          <h3 class="cta-title">{{ $t('privacyPage.cta.title') }}</h3>
          <p class="cta-desc">{{ $t('privacyPage.cta.desc') }}</p>
          <el-button type="primary" size="large" @click="goToContact">
            {{ $t('privacyPage.cta.contactBtn') }}
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  Lock,
  CircleCheck,
  Platform,
  CopyDocument,
  Warning,
  View,
  Edit,
  Delete,
  Download,
  CloseBold
} from '@element-plus/icons-vue'

const router = useRouter()

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.privacy-page {
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
  margin: 0 0 $spacing-xl 0;
}

.highlight-box {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-left: 4px solid $primary-color;
  padding: $spacing-lg;
  border-radius: $border-radius-md;
  display: flex;
  gap: $spacing-md;
}

.highlight-icon {
  flex-shrink: 0;
  font-size: 24px;
  color: $primary-color;
}

.highlight-text {
  font-size: 15px;
  line-height: 1.8;
  color: $text-secondary;
  margin: 0;
}

// 隐私内容
.privacy-content {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.privacy-section {
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

.privacy-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 24px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-lg 0;

  .title-number {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
    color: white;
    border-radius: $border-radius-full;
    font-size: 20px;
    font-weight: 700;
  }
}

.privacy-text {
  font-size: 15px;
  line-height: 1.8;
  color: $text-secondary;

  p {
    margin: 0 0 $spacing-md 0;
  }

  .sub-title {
    font-size: 17px;
    font-weight: 600;
    color: $text-primary;
    margin: $spacing-lg 0 $spacing-md 0;
  }
}

.info-list {
  padding-left: $spacing-xl;
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
  margin: $spacing-md 0;

  li {
    line-height: 1.8;

    strong {
      color: $text-primary;
      font-weight: 600;
    }
  }
}

// 安全网格
.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: $spacing-lg;
  margin: $spacing-xl 0;
}

.security-card {
  background: $bg-secondary;
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  text-align: center;
}

.security-icon {
  font-size: 36px;
  color: $primary-color;
  margin-bottom: $spacing-md;
}

.security-title {
  font-size: 16px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;
}

.security-desc {
  font-size: 14px;
  color: $text-secondary;
  line-height: 1.6;
  margin: 0;
}

.warning-text {
  display: flex;
  gap: $spacing-sm;
  align-items: flex-start;
  padding: $spacing-lg;
  background: #fef3c7;
  border-radius: $border-radius-md;
  margin-top: $spacing-xl;

  .el-icon {
    flex-shrink: 0;
    color: #f59e0b;
    font-size: 20px;
  }

  span {
    font-size: 14px;
    color: #92400e;
    line-height: 1.6;
  }
}

// 权利列表
.rights-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  margin: $spacing-xl 0;
}

.right-item {
  display: flex;
  gap: $spacing-md;
  padding: $spacing-lg;
  background: $bg-secondary;
  border-radius: $border-radius-lg;
}

.right-icon {
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

.right-content {
  flex: 1;
}

.right-title {
  font-size: 17px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-xs 0;
}

.right-desc {
  font-size: 14px;
  color: $text-secondary;
  line-height: 1.6;
  margin: 0;
}

// 联系信息
.contact-info {
  background: $bg-secondary;
  padding: $spacing-lg;
  border-radius: $border-radius-md;
  margin: $spacing-lg 0;

  p {
    margin: $spacing-sm 0;

    strong {
      color: $text-primary;
    }
  }
}

// 底部 CTA
.footer-cta {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  margin-top: $spacing-xl;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.cta-title {
  font-size: 24px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-md 0;
}

.cta-desc {
  font-size: 16px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}
</style>

