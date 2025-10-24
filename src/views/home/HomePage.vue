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
            您的校园二手交易市场
          </h1>

          <!-- 副标题 -->
          <p class="hero-subtitle">
            在您的大学社区内安心买卖。让学生的可持续购物变得简单。
          </p>

          <!-- 分类标签 -->
          <div class="category-tags">
            <button
              v-for="category in categories"
              :key="category.id"
              class="category-tag"
              :class="{ active: selectedCategory === category.name }"
              @click="selectCategory(category.name)"
            >
              {{ category.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Items区域 -->
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">精选商品</h2>
          <el-button text class="view-all-btn" @click="viewAllProducts">
            查看全部
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>

        <!-- 商品列表 -->
        <div v-if="!loading && products.length > 0" class="products-grid">
          <ProductCard
            v-for="product in products"
            :key="product.goods_id"
            :product="product"
            @click="goToProductDetail"
            @favorite="handleFavorite"
          />
        </div>

        <!-- 加载状态 -->
        <div v-if="loading" class="loading-container">
          <el-skeleton :rows="4" animated />
          <el-skeleton :rows="4" animated />
          <el-skeleton :rows="4" animated />
          <el-skeleton :rows="4" animated />
        </div>

        <!-- 空状态 -->
        <el-empty v-if="!loading && products.length === 0" description="暂无商品">
          <el-button type="primary" @click="goToSell">发布商品</el-button>
        </el-empty>
      </div>
    </section>

    <!-- 功能介绍区域 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">为什么选择 Swordfish？</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><ShieldCheck /></el-icon>
            </div>
            <h3 class="feature-title">安全可靠</h3>
            <p class="feature-desc">
              学生身份认证和安全支付系统，让交易无忧。
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><ChatDotRound /></el-icon>
            </div>
            <h3 class="feature-title">便捷沟通</h3>
            <p class="feature-desc">
              内置即时通讯系统，快速联系买家和卖家。
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><TrophyBase /></el-icon>
            </div>
            <h3 class="feature-title">信用体系</h3>
            <p class="feature-desc">
              通过信用评分系统和可信评价建立您的声誉。
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><Sunny /></el-icon>
            </div>
            <h3 class="feature-title">绿色环保</h3>
            <p class="feature-desc">
              让物品在校园内获得第二次生命，支持可持续发展。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  ArrowRight,
  ShieldCheck,
  ChatDotRound,
  TrophyBase,
  Sunny
} from '@element-plus/icons-vue'
import ProductCard from '@/components/business/ProductCard.vue'
import { PRODUCT_CATEGORIES } from '@/utils/constants'
import { request } from '@/utils/request'
import type { Product } from '@/types/products'
import type { PaginationData } from '@/types/common'

const router = useRouter()

const categories = PRODUCT_CATEGORIES
const selectedCategory = ref<string | null>(null)
const products = ref<Product[]>([])
const loading = ref(false)

// 选择分类
const selectCategory = (category: string) => {
  if (selectedCategory.value === category) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = category
  }
  // 可以根据分类筛选商品
  fetchFeaturedProducts()
}

// 获取推荐商品
const fetchFeaturedProducts = async () => {
  try {
    loading.value = true
    const params: any = {
      page: 1,
      page_size: 8
    }

    if (selectedCategory.value) {
      const category = categories.find(c => c.name === selectedCategory.value)
      if (category) {
        params.goods_type = category.id
      }
    }

    const response = await request.get<{ data: PaginationData<Product> }>('/goods/list', {
      params
    })

    products.value = response.data.list || []
  } catch (error) {
    console.error('获取商品失败:', error)
    // 使用模拟数据
    products.value = getMockProducts()
  } finally {
    loading.value = false
  }
}

// 模拟数据(开发用)
const getMockProducts = (): Product[] => {
  return [
    {
      goods_id: 1,
      goods_title: 'MacBook Pro 2020',
      goods_type: 1,
      goods_price: 800,
      goods_desc: '成色极好，几乎未使用。包含充电器和原装盒子。',
      goods_images: ['https://via.placeholder.com/400x300/1e3a8a/ffffff?text=MacBook'],
      goods_status: 1,
      condition_level: 'excellent',
      create_time: '2025-01-15T10:00:00Z',
      publisher: {
        user_id: 1,
        student_id: '2023001',
        real_name: 'Alice',
        credit_score: 520,
        avatar_url: ''
      }
    },
    {
      goods_id: 2,
      goods_title: '复古皮夹克',
      goods_type: 3,
      goods_price: 45,
      goods_desc: '经典棕色皮夹克，秋季必备。',
      goods_images: ['https://via.placeholder.com/400x300/8b4513/ffffff?text=Jacket'],
      goods_status: 1,
      condition_level: 'good',
      create_time: '2025-01-14T15:30:00Z',
      publisher: {
        user_id: 2,
        student_id: '2023002',
        real_name: 'Bob',
        credit_score: 495,
        avatar_url: ''
      }
    },
    {
      goods_id: 3,
      goods_title: '微积分教材',
      goods_type: 2,
      goods_price: 25,
      goods_desc: '3本微积分教材，标记很少。',
      goods_images: ['https://via.placeholder.com/400x300/4a5568/ffffff?text=Books'],
      goods_status: 1,
      condition_level: 'very_good',
      create_time: '2025-01-13T09:20:00Z',
      publisher: {
        user_id: 3,
        student_id: '2023003',
        real_name: 'Carol',
        credit_score: 510,
        avatar_url: ''
      }
    },
    {
      goods_id: 4,
      goods_title: '雅马哈民谣吉他',
      goods_type: 5,
      goods_price: 120,
      goods_desc: '雅马哈民谣吉他，含琴盒和配件。',
      goods_images: ['https://via.placeholder.com/400x300/d4a76a/ffffff?text=Guitar'],
      goods_status: 1,
      condition_level: 'good',
      create_time: '2025-01-12T14:45:00Z',
      publisher: {
        user_id: 4,
        student_id: '2023004',
        real_name: 'David',
        credit_score: 505,
        avatar_url: ''
      }
    }
  ]
}

// 查看所有商品
const viewAllProducts = () => {
  router.push('/products')
}

// 去商品详情
const goToProductDetail = (id: number) => {
  router.push(`/products/${id}`)
}

// 收藏商品
const handleFavorite = (id: number) => {
  ElMessage.success('收藏成功')
}

// 去发布商品
const goToSell = () => {
  router.push('/products/publish')
}

onMounted(() => {
  fetchFeaturedProducts()
})
</script>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: $spacing-2xl 0;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-lg;
}

.hero-logo {
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: $border-radius-xl;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  .logo-image {
    width: 80px;
    height: 80px;
    // PNG logo不需要颜色滤镜
  }
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  max-width: 800px;
  margin: 0;

  @media (max-width: $breakpoint-md) {
    font-size: 36px;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: 28px;
  }
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
  opacity: 0.9;

  @media (max-width: $breakpoint-sm) {
    font-size: 16px;
  }
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
  justify-content: center;
  max-width: 800px;
}

.category-tag {
  padding: $spacing-sm $spacing-lg;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: $border-radius-full;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: $transition-base;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  &.active {
    background: white;
    color: $primary-color;
    border-color: white;
  }
}

.featured-section {
  padding: $spacing-2xl 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-xl;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: $text-primary;
  margin: 0;

  @media (max-width: $breakpoint-sm) {
    font-size: 24px;
  }
}

.view-all-btn {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font-size: 16px;
  color: $primary-color;

  &:hover {
    color: $secondary-color;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-lg;
}

.loading-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-lg;
}

.features-section {
  background: white;
  padding: $spacing-2xl 0;
  margin-top: $spacing-2xl;

  .section-title {
    text-align: center;
    margin-bottom: $spacing-xl;
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

  .feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    border-radius: $border-radius-full;
    color: white;
    font-size: 40px;
    margin: 0 auto $spacing-md;
  }

  .feature-title {
    font-size: 20px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-sm 0;
  }

  .feature-desc {
    font-size: 14px;
    color: $text-secondary;
    line-height: 1.6;
    margin: 0;
  }
}
</style>

