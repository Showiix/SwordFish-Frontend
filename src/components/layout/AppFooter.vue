<template>
  <footer class="app-footer">
    <div class="container footer-content">
      <!-- Footer主要内容 -->
      <div class="footer-main">
        <!-- Logo和简介 -->
        <div class="footer-section">
          <div class="footer-logo">
            <img src="@/assets/images/logo2.png" alt="Swordfish" class="logo-img" />
            <span class="logo-text">Swordfish</span>
          </div>
          <p class="footer-description">
            您的校园二手交易市场。
            让学生的可持续购物变得简单。
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <el-icon><Message /></el-icon>
            </a>
            <a href="#" class="social-link">
              <el-icon><Star /></el-icon>
            </a>
            <a href="#" class="social-link">
              <el-icon><Share /></el-icon>
            </a>
          </div>
        </div>

        <!-- 链接分组 -->
        <div class="footer-section">
          <h3 class="footer-title">快速链接</h3>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="goTo('/about')">关于我们</a></li>
            <li><a href="#" @click.prevent="goTo('/how-it-works')">如何使用</a></li>
            <li><a href="#" @click.prevent="goTo('/faq')">常见问题</a></li>
            <li><a href="#" @click.prevent="goTo('/contact')">联系我们</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">商品分类</h3>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="searchCategory('Electronics')">电子产品</a></li>
            <li><a href="#" @click.prevent="searchCategory('Books')">图书文具</a></li>
            <li><a href="#" @click.prevent="searchCategory('Fashion')">服饰鞋包</a></li>
            <li><a href="#" @click.prevent="searchCategory('Furniture')">家具家居</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">帮助支持</h3>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="goTo('/help')">帮助中心</a></li>
            <li><a href="#" @click.prevent="goTo('/safety')">安全提示</a></li>
            <li><a href="#" @click.prevent="goTo('/terms')">服务条款</a></li>
            <li><a href="#" @click.prevent="goTo('/privacy')">隐私政策</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer底部 -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Swordfish. All rights reserved.
        </p>
        <div class="footer-meta">
          <span>用 ❤️ 为学生打造</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Message, Star, Share } from '@element-plus/icons-vue'

const router = useRouter()
const currentYear = computed(() => new Date().getFullYear())

const goTo = (path: string) => {
  router.push(path)
}

const searchCategory = (category: string) => {
  router.push({
    path: '/products',
    query: { category }
  })
}
</script>

<style scoped lang="scss">
.app-footer {
  background: $bg-dark;
  color: rgba(255, 255, 255, 0.8);
  margin-top: auto;
}

.footer-content {
  padding: $spacing-2xl 0;
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
  margin-bottom: $spacing-xl;
}

.footer-section {
  .footer-logo {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-md;

    .logo-img {
      width: 36px;
      height: 36px;
      // PNG logo不需要颜色滤镜
    }

    .logo-text {
      font-size: 20px;
      font-weight: 700;
      color: white;
    }
  }

  .footer-description {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin-bottom: $spacing-md;
  }

  .social-links {
    display: flex;
    gap: $spacing-sm;

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: $border-radius-full;
      color: white;
      transition: $transition-base;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }
    }
  }

  .footer-title {
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: $spacing-md;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;

    li {
      a {
        color: rgba(255, 255, 255, 0.6);
        transition: $transition-base;

        &:hover {
          color: white;
          padding-left: $spacing-xs;
        }
      }
    }
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: $spacing-lg;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: $font-size-small;

  .copyright {
    margin: 0;
  }

  .footer-meta {
    span {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

@media (max-width: $breakpoint-md) {
  .footer-main {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom {
    flex-direction: column;
    gap: $spacing-sm;
    text-align: center;
  }
}

@media (max-width: $breakpoint-sm) {
  .footer-main {
    grid-template-columns: 1fr;
  }
}
</style>

