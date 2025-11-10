<template>
  <div class="product-list-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1>{{ $t('productList.title') }}</h1>
        <p class="subtitle">{{ $t('productList.subtitle') }}</p>
      </div>

      <!-- 搜索和筛选区域 -->
      <div class="search-filter-section">
        <!-- 搜索栏 -->
        <div class="search-bar">
          <el-input
            v-model="searchKeyword"
            :placeholder="$t('productList.search.placeholder')"
            prefix-icon="Search"
            size="large"
            clearable
            @keyup.enter="handleSearch"
            @clear="handleSearch"
          >
            <template #append>
              <el-button icon="Search" @click="handleSearch">{{ $t('productList.search.button') }}</el-button>
            </template>
          </el-input>
        </div>

        <!-- 筛选栏 -->
        <div class="filter-bar">
          <div class="filter-group">
            <label class="filter-label">
              <el-icon><Grid /></el-icon>
              {{ $t('productList.filter.category') }}
            </label>
            <el-select
              v-model="productsStore.filters.goods_type"
              :placeholder="$t('productList.filter.categoryPlaceholder')"
              clearable
              @change="handleFilterChange"
              class="filter-select"
            >
              <el-option
                v-for="category in PRODUCT_CATEGORIES"
                :key="category.id"
                :label="getCategoryI18nLabel(category.name)"
                :value="category.id"
              >
                <div class="category-option">
                  <el-icon><component :is="category.icon" /></el-icon>
                  <span>{{ getCategoryI18nLabel(category.name) }}</span>
                </div>
              </el-option>
            </el-select>
          </div>

          <div class="filter-group">
            <label class="filter-label">
              <el-icon><Star /></el-icon>
              {{ $t('productList.filter.condition') }}
            </label>
            <el-select
              v-model="productsStore.filters.condition"
              :placeholder="$t('productList.filter.conditionPlaceholder')"
              clearable
              @change="handleFilterChange"
              class="filter-select"
            >
              <el-option
                v-for="condition in CONDITION_OPTIONS"
                :key="condition.value"
                :label="getConditionI18nLabel(condition.value)"
                :value="condition.value"
              />
            </el-select>
          </div>

          <div class="filter-group price-group">
            <label class="filter-label">
              <el-icon><PriceTag /></el-icon>
              {{ $t('productList.filter.price') }}
            </label>
            <div class="price-filter">
              <el-input-number
                v-model="productsStore.filters.min_price"
                :placeholder="$t('productList.filter.minPrice')"
                :min="0"
                :controls="false"
                @change="handleFilterChange"
                class="price-input"
              />
              <span class="separator">-</span>
              <el-input-number
                v-model="productsStore.filters.max_price"
                :placeholder="$t('productList.filter.maxPrice')"
                :min="0"
                :controls="false"
                @change="handleFilterChange"
                class="price-input"
              />
            </div>
          </div>

          <div class="filter-group">
            <label class="filter-label">
              <el-icon><Sort /></el-icon>
              {{ $t('productList.filter.sort') }}
            </label>
            <el-select
              v-model="sortOption"
              @change="handleSortChange"
              class="filter-select"
            >
              <el-option :label="$t('productList.sort.latest')" value="create_time_DESC" />
              <el-option :label="$t('productList.sort.priceLowToHigh')" value="goods_price_ASC" />
              <el-option :label="$t('productList.sort.priceHighToLow')" value="goods_price_DESC" />
            </el-select>
          </div>

          <div class="filter-actions">
            <el-button @click="handleReset" class="reset-btn">
              <el-icon><RefreshLeft /></el-icon>
              {{ $t('productList.filter.reset') }}
            </el-button>
          </div>
        </div>

        <!-- 当前筛选标签 -->
        <div v-if="hasActiveFilters" class="active-filters">
          <span class="filter-tip">{{ $t('productList.filter.currentFilters') }}</span>
          <el-tag
            v-if="searchKeyword"
            closable
            @close="searchKeyword = ''; handleSearch()"
          >
            {{ $t('productList.filter.keyword') }}: {{ searchKeyword }}
          </el-tag>
          <el-tag
            v-if="productsStore.filters.goods_type"
            closable
            @close="productsStore.filters.goods_type = undefined; handleFilterChange()"
          >
            {{ getCategoryLabel(productsStore.filters.goods_type) }}
          </el-tag>
          <el-tag
            v-if="productsStore.filters.condition"
            closable
            @close="productsStore.filters.condition = undefined; handleFilterChange()"
          >
            {{ getConditionLabel(productsStore.filters.condition) }}
          </el-tag>
          <el-tag
            v-if="productsStore.filters.min_price"
            closable
            @close="productsStore.filters.min_price = undefined; handleFilterChange()"
          >
            ≥ ¥{{ productsStore.filters.min_price }}
          </el-tag>
          <el-tag
            v-if="productsStore.filters.max_price"
            closable
            @close="productsStore.filters.max_price = undefined; handleFilterChange()"
          >
            ≤ ¥{{ productsStore.filters.max_price }}
          </el-tag>
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
        :description="$t('productList.empty')"
      >
        <el-button type="primary" @click="$router.push('/products/publish')">
          {{ $t('productList.publishBtn') }}
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
          {{ loadingMore ? $t('productList.loading') : $t('productList.loadMore') }}
        </el-button>
      </div>

      <!-- 分页信息 -->
      <div v-if="productsStore.hasProducts" class="pagination-info">
        <span>
          {{ $t('productList.pagination.total') }} {{ productsStore.pagination.total }} {{ $t('productList.pagination.items') }}
          ·
          {{ $t('productList.pagination.page') }} {{ productsStore.pagination.current_page }} {{ $t('productList.pagination.of') }} {{ productsStore.pagination.total_pages }} {{ $t('productList.pagination.pages') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { RefreshLeft, Grid, Star, PriceTag, Sort } from '@element-plus/icons-vue'
import { useProductsStore } from '@/store/modules/products'
import ProductCard from '@/components/business/ProductCard.vue'
import { PRODUCT_CATEGORIES, PRODUCT_CONDITION } from '@/utils/constants'

const router = useRouter()
const { t } = useI18n()
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

// 是否有激活的筛选条件
const hasActiveFilters = computed(() => {
  return (
    searchKeyword.value ||
    productsStore.filters.goods_type !== undefined ||
    productsStore.filters.condition !== undefined ||
    productsStore.filters.min_price !== undefined ||
    productsStore.filters.max_price !== undefined
  )
})

// 获取分类的i18n标签
const getCategoryI18nLabel = (categoryName: string) => {
  const key = categoryName.toLowerCase()
  return t(`productCategories.${key}`)
}

// 获取成色的i18n标签
const getConditionI18nLabel = (conditionValue: string) => {
  // 将 brand_new 转换为 brandNew
  const key = conditionValue.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
  return t(`productCondition.${key}`)
}

// 获取分类标签（用于激活筛选标签显示）
const getCategoryLabel = (typeId: number) => {
  const category = PRODUCT_CATEGORIES.find(c => c.id === typeId)
  return category ? getCategoryI18nLabel(category.name) : ''
}

// 获取成色标签（用于激活筛选标签显示）
const getConditionLabel = (conditionValue: string) => {
  return getConditionI18nLabel(conditionValue)
}

/**
 * 处理搜索
 */
const handleSearch = async () => {
  try {
    await productsStore.searchProducts(searchKeyword.value)
  } catch (error) {
    ElMessage.error(t('productList.messages.searchFailed'))
  }
}

/**
 * 处理筛选变化
 */
const handleFilterChange = async () => {
  try {
    await productsStore.fetchProducts(1, false)
  } catch (error) {
    ElMessage.error(t('productList.messages.filterFailed'))
  }
}

/**
 * 处理排序变化
 */
const handleSortChange = async () => {
  try {
    await productsStore.fetchProducts(1, false)
  } catch (error) {
    ElMessage.error(t('productList.messages.sortFailed'))
  }
}

/**
 * 重置筛选条件
 */
const handleReset = async () => {
  searchKeyword.value = ''
  try {
    await productsStore.resetFilters()
    ElMessage.success(t('productList.messages.resetSuccess'))
  } catch (error) {
    ElMessage.error(t('productList.messages.resetFailed'))
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
    ElMessage.error(t('productList.messages.loadFailed'))
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
  ElMessage.success(t('productList.messages.favoriteSuccess'))
}

// 页面加载时获取商品列表
onMounted(async () => {
  try {
    await productsStore.fetchProducts()
  } catch (error) {
    ElMessage.error(t('productList.messages.loadListFailed'))
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
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-sm;
  margin-bottom: $spacing-xl;

  .search-bar {
    margin-bottom: $spacing-lg;
  }

  .filter-bar {
    display: flex;
    gap: $spacing-lg;
    align-items: flex-end;
    flex-wrap: wrap;

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: $spacing-xs;
      flex: 0 0 auto;

      &.price-group {
        flex: 0 0 auto;
      }

      .filter-label {
        display: flex;
        align-items: center;
        gap: $spacing-xs;
        font-size: 14px;
        font-weight: 500;
        color: $text-secondary;
        white-space: nowrap;

        .el-icon {
          font-size: 16px;
          color: $primary-color;
        }
      }

      .filter-select {
        min-width: 160px;
      }
    }

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
        font-weight: 500;
      }

      .price-input {
        width: 120px;

        :deep(.el-input__inner) {
          text-align: center;
        }
      }
    }

    .filter-actions {
      margin-left: auto;

      .reset-btn {
        border-color: $border-color;

        &:hover {
          color: $primary-color;
          border-color: $primary-color;
        }
      }
    }
  }

  .active-filters {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    flex-wrap: wrap;
    margin-top: $spacing-lg;
    padding-top: $spacing-lg;
    border-top: 1px solid $border-color;

    .filter-tip {
      font-size: 14px;
      color: $text-secondary;
      font-weight: 500;
    }

    .el-tag {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 768px) {
    padding: $spacing-md;

    .filter-bar {
      gap: $spacing-md;

      .filter-group {
        flex: 1 1 100%;

        .filter-select {
          width: 100%;
        }
      }

      .filter-actions {
        flex: 1 1 100%;
        margin-left: 0;

        .reset-btn {
          width: 100%;
        }
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

