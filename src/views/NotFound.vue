<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">Page Not Found</h1>
        <p class="error-desc">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div class="error-actions">
          <el-button type="primary" size="large" @click="goHome">
            <el-icon><HomeFilled /></el-icon>
            <span>Back to Home</span>
          </el-button>
          <el-button size="large" @click="goBack">
            <el-icon><ArrowLeft /></el-icon>
            <span>Go Back</span>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { HomeFilled, ArrowLeft } from '@element-plus/icons-vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.back()
}
</script>

<style scoped lang="scss">
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - $header-height);
  padding: $spacing-2xl 0;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.error-code {
  font-size: 120px;
  font-weight: 900;
  color: $primary-color;
  line-height: 1;
  margin-bottom: $spacing-lg;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: $breakpoint-sm) {
    font-size: 80px;
  }
}

.error-title {
  font-size: 36px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-md 0;

  @media (max-width: $breakpoint-sm) {
    font-size: 28px;
  }
}

.error-desc {
  font-size: 18px;
  color: $text-secondary;
  line-height: 1.6;
  margin: 0 0 $spacing-xl 0;

  @media (max-width: $breakpoint-sm) {
    font-size: 16px;
  }
}

.error-actions {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  flex-wrap: wrap;

  .el-button {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
  }
}
</style>

