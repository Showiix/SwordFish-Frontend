<template>
  <div class="product-list-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1>商品列表</h1>
        <p class="subtitle">发现你的校园好物</p>
      </div>

      <!-- 搜索和筛选区域 -->
      <div class="search-filter-section">
        <!-- 搜索栏 -->
        <div class="search-bar">
          <el-input
            v-model="searchKeyword"
            placeholder="搜索商品..."
            prefix-icon="Search"
            size="large"
            clearable
            @keyup.enter="handleSearch"
            @clear="handleSearch"
          >
            <template #append>
              <el-button icon="Search" @click="handleSearch">搜索</el-button>
            </template>
          </el-input>
        </div>

        <!-- 筛选栏 -->
        <div class="filter-bar">
          <!-- 商品分类 -->
          <el-select
            v-model="productsStore.filters.goods_type"
            placeholder="全部分类"
            clearable
            @change="handleFilterChange"
          >
            <el-option
              v-for="category in PRODUCT_CATEGORIES"
              :key="category.id"
              :label="category.label"
              :value="category.id"
            >
              <div class="category-option">
                <el-icon><component :is="category.icon" /></el-icon>
                <span>{{ category.label }}</span>
              </div>
            </el-option>
          </el-select>

          <!-- 商品成色 -->
          <el-select
            v-model="productsStore.filters.condition"
            placeholder="商品成色"
            clearable
            @change="handleFilterChange"
          >
            <el-option
              v-for="condition in CONDITION_OPTIONS"
              :key="condition.value"
              :label="condition.label"
              :value="condition.value"
            />
          </el-select>

          <!-- 价格范围 -->
          <div class="price-filter">
            <el-input-number
              v-model="productsStore.filters.min_price"
              placeholder="最低价"
              :min="0"
              :controls="false"
              @change="handleFilterChange"
            />
            <span class="separator">-</span>
            <el-input-number
              v-model="productsStore.filters.max_price"
              placeholder="最高价"
              :min="0"
              :controls="false"
              @change="handleFilterChange"
            />
          </div>

          <!-- 排序方式 -->
          <el-select
            v-model="sortOption"
            @change="handleSortChange"
          >
            <el-option label="最新发布" value="create_time_DESC" />
            <el-option label="价格从低到高" value="goods_price_ASC" />
            <el-option label="价格从高到低" value="goods_price_DESC" />
          </el-select>

          <!-- 重置按钮 -->
          <el-button @click="handleReset">
            <el-icon><RefreshLeft /></el-icon>
            重置
          </el-button>
        </div>
      </div>

      <!-- 商品列表 -->
      <div v-if="productsStore.hasProducts" class="product-grid">
        <ProductCard
          v-for="product in productsStore.products"
          :key="product.goods_id"
          :product="product"
          @click="goToProductDetail"
          @favorite="handleFavorite"
        />
      </div>

      <!-- 加载状态 -->
      <div v-if="productsStore.loading && !productsStore.hasProducts" class="loading-container">
        <el-skeleton :rows="4" animated />
        <el-skeleton :rows="4" animated />
        <el-skeleton :rows="4" animated />
      </div>

      <!-- 空状态 -->
      <el-empty
        v-if="!productsStore.hasProducts && !productsStore.loading"
        description="暂无商品"
      >
        <el-button type="primary" @click="$router.push('/products/publish')">
          发布商品
        </el-button>
      </el-empty>

      <!-- 加载更多 -->
      <div
        v-if="productsStore.hasMore && productsStore.hasProducts"
        class="load-more-container"
      >
        <el-button
          type="primary"
          size="large"
          :loading="loadingMore"
          @click="handleLoadMore"
        >
          {{ loadingMore ? '加载中...' : '加载更多' }}
        </el-button>
      </div>

      <!-- 分页信息 -->
      <div v-if="productsStore.hasProducts" class="pagination-info">
        <span>
          共 {{ productsStore.pagination.total }} 件商品
          ·
          第 {{ productsStore.pagination.current_page }} / {{ productsStore.pagination.total_pages }} 页
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { RefreshLeft } from '@element-plus/icons-vue'
import { useProductsStore } from '@/store/modules/products'
import ProductCard from '@/components/business/ProductCard.vue'
import { PRODUCT_CATEGORIES, PRODUCT_CONDITION } from '@/utils/constants'

const router = useRouter()
const productsStore = useProductsStore()

const searchKeyword = ref('')
const loadingMore = ref(false)

// 成色选项
const CONDITION_OPTIONS = Object.values(PRODUCT_CONDITION)

// 排序选项
const sortOption = computed({
  get: () => `${productsStore.filters.sort_by}_${productsStore.filters.sort_order}`,
  set: (value: string) => {
    const [sort_by, sort_order] = value.split('_')
    productsStore.filters.sort_by = sort_by
    productsStore.filters.sort_order = sort_order as 'ASC' | 'DESC'
  }
})

/**
 * 处理搜索
 */
const handleSearch = async () => {
  try {
    await productsStore.searchProducts(searchKeyword.value)
  } catch (error) {
    ElMessage.error('搜索失败，请重试')
  }
}

/**
 * 处理筛选变化
 */
const handleFilterChange = async () => {
  try {
    await productsStore.fetchProducts(1, false)
  } catch (error) {
    ElMessage.error('筛选失败，请重试')
  }
}

/**
 * 处理排序变化
 */
const handleSortChange = async () => {
  try {
    await productsStore.fetchProducts(1, false)
  } catch (error) {
    ElMessage.error('排序失败，请重试')
  }
}

/**
 * 重置筛选条件
 */
const handleReset = async () => {
  searchKeyword.value = ''
  try {
    await productsStore.resetFilters()
    ElMessage.success('已重置筛选条件')
  } catch (error) {
    ElMessage.error('重置失败，请重试')
  }
}

/**
 * 加载更多
 */
const handleLoadMore = async () => {
  try {
    loadingMore.value = true
    await productsStore.loadMore()
  } catch (error) {
    ElMessage.error('加载失败，请重试')
  } finally {
    loadingMore.value = false
  }
}

/**
 * 跳转到商品详情
 */
const goToProductDetail = (id: number) => {
  router.push(`/products/${id}`)
}

/**
 * 收藏/取消收藏
 */
const handleFavorite = (productId: number) => {
  // TODO: 实现收藏功能
  console.log('收藏商品ID:', productId)
  ElMessage.success('收藏成功')
}

// 页面加载时获取商品列表
onMounted(async () => {
  try {
    await productsStore.fetchProducts()
  } catch (error) {
    ElMessage.error('加载商品列表失败')
  }
})
</script>

<style scoped lang="scss">
.product-list-page {
  min-height: 100vh;
  background: $bg-secondary;
  padding: $spacing-xl 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
}

.page-header {
  text-align: center;
  margin-bottom: $spacing-xl;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: $text-primary;
    margin: 0 0 $spacing-sm 0;
  }

  .subtitle {
    font-size: 16px;
    color: $text-secondary;
    margin: 0;
  }
}

.search-filter-section {
  background: white;
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-sm;
  margin-bottom: $spacing-xl;

  .search-bar {
    margin-bottom: $spacing-lg;
  }

  .filter-bar {
    display: flex;
    gap: $spacing-md;
    align-items: center;
    flex-wrap: wrap;

    .category-option {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
    }

    .price-filter {
      display: flex;
      align-items: center;
      gap: $spacing-sm;

      .separator {
        color: $text-tertiary;
      }

      :deep(.el-input-number) {
        width: 120px;
      }
    }
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: $spacing-md;
  }
}

.loading-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin: $spacing-xl 0;

  .el-button {
    min-width: 200px;
  }
}

.pagination-info {
  text-align: center;
  padding: $spacing-lg 0;
  color: $text-secondary;
  font-size: 14px;
}
</style>

