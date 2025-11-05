<template>
  <div class="product-detail-page">
    <!-- ============================================ -->
    <!-- 加载状态：使用骨架屏提升用户体验 -->
    <!-- ============================================ -->
    <div v-if="loading" class="product-detail-skeleton">
      <div class="container">
        <div class="skeleton-main">
          <!-- 左侧图片骨架 -->
          <div class="skeleton-left">
            <el-skeleton-item variant="image" style="height: 400px; border-radius: 8px;" />
            <div class="skeleton-thumbnails">
              <el-skeleton-item
                v-for="i in 4"
                :key="i"
                variant="image"
                style="width: 60px; height: 60px; border-radius: 4px;"
              />
            </div>
          </div>

          <!-- 右侧信息骨架 -->
          <div class="skeleton-right">
            <el-skeleton :rows="10" animated />
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- 错误状态：商品不存在或加载失败 -->
    <!-- ============================================ -->
    <div v-else-if="error || (!currentProduct && !loading)" class="error-container">
      <div class="container">
        <el-result
          icon="warning"
          :title="errorMessage || '商品不存在'"
          sub-title="该商品可能已被删除或下架"
        >
          <template #extra>
            <el-space>
              <el-button type="primary" @click="retry">重新加载</el-button>
              <el-button @click="router.push('/products')">返回商品列表</el-button>
            </el-space>
          </template>
        </el-result>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- 正常显示：商品详情内容 -->
    <!-- ============================================ -->
    <div v-else-if="currentProduct" class="product-detail-content">
      <div class="container">
        <!-- 主要内容区域 -->
        <div class="detail-main">
          <!-- 左侧：图片��示区 -->
          <div class="detail-left">
            <ProductImages :images="imageList" />
          </div>

          <!-- 右侧：商品信息区 -->
          <div class="detail-right">
            <!-- 商品基本信息 -->
            <ProductBasicInfo :product="currentProduct" />

            <!-- 卖家信息 -->
            <SellerCard :seller="currentProduct.publisher" />

            <!-- 操作按钮 -->
            <ProductActions :product="currentProduct" />
          </div>
        </div>

        <!-- 底部：商品详细描述 -->
        <div class="detail-description">
          <ProductDescription :description="currentProduct.goods_desc" />
        </div>

        <!-- 推荐区域（可选，暂时注释） -->
        <!-- <div class="detail-recommend">
          <RelatedProducts :category="currentProduct.goods_type" />
        </div> -->
      </div>
    </div>
  </div>
</template>







<script setup lang="ts">
/**
 * ============================================
 * 商品详情页面
 * ============================================
 * 功能：
 * 1. 根据 URL 参数获取商品ID
 * 2. 从后端加载商品详情数据
 * 3. 展示商品完整信息（图片、价格、描述等）
 * 4. 提供收藏、联系卖家、购买等交互功能
 * 5. 优化加载和错误状态的用户体验
 */

import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/store/modules/products'
import { ElMessage } from 'element-plus'

// 导入子组件
import ProductImages from '@/views/products/components/ProductImages.vue'
import ProductBasicInfo from '@/views/products/components/ProductBasicInfo.vue'
import SellerCard from '@/views/products/components/SellerCard.vue'
import ProductActions from '@/views/products/components/ProductActions.vue'
import ProductDescription from '@/views/products/components/ProductDescription.vue'

// ============================================
// 1. 路由和状态管理
// ============================================

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()

// ============================================
// 2. 响应式数据
// ============================================

// 错误状态
const error = ref(false)
const errorMessage = ref('')

// ============================================
// 3. 计算属性
// ============================================

// 从 store 获取当前商品数据
const currentProduct = computed(() => productsStore.currentProduct)

// 从 store 获取加载状态
const loading = computed(() => productsStore.loading)

// 图片列表（如果没有图片，使用默认占位图）
const imageList = computed(() => {
  const images = currentProduct.value?.goods_images || []
  // 如果没有图片，返回默认占位图
  return images.length > 0 ? images : ['/images/placeholder.png']
})

// ============================================
// 4. 方法定义
// ============================================

/**
 * 加载商品详情数据
 * 这是页面的核心功能，从后端获取商品完整信息
 */
const loadProductDetail = async () => {
  try {
    // 重置错误状态
    error.value = false
    errorMessage.value = ''

    // 从 URL 获取商品 ID
    const id = Number(route.params.id)

    // 验证 ID 是否有效
    if (isNaN(id) || id <= 0) {
      throw new Error('无效的商品ID')
    }

    // 调用 store 方法获取商品详情
    await productsStore.fetchProductDetail(id)

    // 如果获取失败（商品不存在）
    if (!currentProduct.value) {
      throw new Error('商品不存在')
    }

  } catch (err: any) {
    // 捕获错误并显示
    error.value = true
    errorMessage.value = err.message || '加载失败'
    ElMessage.error(err.message || '加载商品详情失败')
  }
}

/**
 * 重试加载
 * 用户点击"重新加载"按钮时调用
 */
const retry = () => {
  loadProductDetail()
}

// ============================================
// 5. 生命周期钩子
// ============================================

/**
 * 组件挂载时
 * 1. 加载商品详情
 */
onMounted(() => {
  loadProductDetail()
})

/**
 * 组件卸载时
 * 清空当前商品数据，避免影响其他页面
 */
onUnmounted(() => {
  productsStore.clearCurrentProduct()
})

/**
 * 监听路由参数变化
 * 当用户在详情页之间跳转时（如从商品1跳到商品2）
 * 需要重新加载数据
 */
watch(
  () => route.params.id,
  (newId, oldId) => {
    // 只有当 ID 真正变化时才重新加载
    if (newId && newId !== oldId) {
      loadProductDetail()
    }
  }
)
</script>

















<style scoped lang="scss">
/**
 * ============================================
 * 样式说明
 * ============================================
 * 1. 使用 Grid 布局实现左右分栏
 * 2. 响应式设计，适配不同设备
 * 3. 统一使用项目的 SCSS 变量
 */

.product-detail-page {
  min-height: calc(100vh - 60px); // 减去导航栏高度
  background-color: #f5f7fa;
  padding: $spacing-xl 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 $spacing-md;
  }
}

// ============================================
// 骨架屏样式
// ============================================
.product-detail-skeleton {
  .skeleton-main {
    display: grid;
    grid-template-columns: 600px 1fr;
    gap: 24px;
    padding: 24px;
    background: white;
    border-radius: 8px;
  }

  .skeleton-thumbnails {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }
}

// ============================================
// 错误状态样式
// ============================================
.error-container {
  padding: $spacing-2xl 0;
}

// ============================================
// 正常内容样式
// ============================================
.product-detail-content {
  .detail-main {
    display: grid;
    grid-template-columns: 600px 1fr; // 左侧固定600px，右侧自适应
    gap: 24px;
    margin-bottom: 24px;

    // 平板设备
    @media (max-width: 1024px) {
      grid-template-columns: 500px 1fr;
      gap: 16px;
    }

    // 手机设备：改为单列布局
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }

  .detail-description {
    margin-top: 24px;
  }

  .detail-recommend {
    margin-top: 24px;
  }
}
</style>

