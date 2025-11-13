<template>
  <div class="my-products-page">
    <div class="container">
      <!-- 页面头部 -->
      <div class="page-header">
        <h1 class="page-title">{{ $t('myProducts.pageTitle') }}</h1>
        <p class="page-subtitle">{{ $t('myProducts.pageSubtitle') }}</p>
      </div>

      <!-- 商品状态筛选标签 -->
      <div class="status-tabs">
        <el-radio-group v-model="currentStatus" @change="handleStatusChange" class="tab-group">
          <el-radio-button :label="-1">
            {{ $t('myProducts.tabs.all') }}
          </el-radio-button>
          <el-radio-button :label="ProductStatus.AVAILABLE">
            {{ $t('myProducts.tabs.onSale') }}
          </el-radio-button>
          <el-radio-button :label="ProductStatus.SOLD">
            {{ $t('myProducts.tabs.sold') }}
          </el-radio-button>
          <el-radio-button :label="ProductStatus.OFF_SHELF">
            {{ $t('myProducts.tabs.offShelf') }}
          </el-radio-button>
        </el-radio-group>
      </div>

      <!-- 加载状态 -->
      <div v-if="productsStore.myProductsLoading" class="loading-container">
        <el-skeleton :rows="3" animated />
        <el-skeleton :rows="3" animated />
      </div>

      <!-- 商品列表 -->
      <div v-else-if="productsStore.hasMyProducts" class="products-container">
        <div v-for="product in productsStore.myProducts" :key="product.goods_id" class="product-card">
          <el-card shadow="hover">
            <!-- 商品主体 -->
            <div class="product-body">
              <!-- 商品图片 -->
              <div class="product-image-wrapper" @click="viewProductDetail(product.goods_id)">
                <el-image
                  :src="product.goods_images?.[0] || ''"
                  fit="cover"
                  class="product-image"
                >
                  <template #error>
                    <div class="image-error">
                      <el-icon><Picture /></el-icon>
                    </div>
                  </template>
                </el-image>
                <!-- 商品状态标签 -->
                <div class="status-badge">
                  <el-tag :type="getStatusTagType(product.goods_status)" size="large">
                    {{ getStatusLabel(product.goods_status) }}
                  </el-tag>
                </div>
              </div>

              <!-- 商品信息 -->
              <div class="product-info">
                <h3 class="product-title" @click="viewProductDetail(product.goods_id)">
                  {{ product.goods_title }}
                </h3>

                <div class="product-details">
                  <div class="detail-row">
                    <span class="label">{{ $t('myProducts.card.price') }}:</span>
                    <span class="value price">¥{{ product.goods_price }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">{{ $t('myProducts.card.category') }}:</span>
                    <span class="value">{{ getCategoryLabel(product.goods_type) }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">{{ $t('myProducts.card.condition') }}:</span>
                    <span class="value">{{ getConditionLabel(product.condition_level) }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">{{ $t('myProducts.card.views') }}:</span>
                    <span class="value">{{ product.views || 0 }} {{ $t('myProducts.card.viewsUnit') }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">{{ $t('myProducts.card.publishTime') }}:</span>
                    <span class="value">{{ formatTime(product.create_time) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 商品操作 -->
            <div class="product-actions">
              <el-button @click="viewProductDetail(product.goods_id)" text>
                <el-icon><View /></el-icon>
                {{ $t('myProducts.card.viewDetails') }}
              </el-button>

              <el-button @click="handleEdit(product)" text>
                <el-icon><Edit /></el-icon>
                {{ $t('myProducts.card.edit') }}
              </el-button>

              <!-- 在售状态：显示下架按钮 -->
              <el-button
                v-if="product.goods_status === ProductStatus.AVAILABLE"
                @click="handleOffShelf(product)"
                text
                type="warning"
              >
                <el-icon><Bottom /></el-icon>
                {{ $t('myProducts.card.offShelf') }}
              </el-button>

              <!-- 已下架状态：显示重新上架按钮 -->
              <el-button
                v-if="product.goods_status === ProductStatus.OFF_SHELF"
                @click="handleRelist(product)"
                text
                type="success"
              >
                <el-icon><Top /></el-icon>
                {{ $t('myProducts.card.relist') }}
              </el-button>

              <!-- 已下架或已售出状态：显示删除按钮 -->
              <el-button
                v-if="product.goods_status === ProductStatus.OFF_SHELF || product.goods_status === ProductStatus.SOLD"
                @click="handleDelete(product)"
                text
                type="danger"
              >
                <el-icon><Delete /></el-icon>
                {{ $t('myProducts.card.delete') }}
              </el-button>
            </div>
          </el-card>
        </div>
      </div>

      <!-- 空状态 -->
      <el-empty
        v-else
        :description="$t('myProducts.empty.title')"
        class="empty-state"
      >
        <template #image>
          <el-icon :size="120" color="#b6ccd8">
            <Box />
          </el-icon>
        </template>
        <p class="empty-subtitle">{{ $t('myProducts.empty.subtitle') }}</p>
        <el-button type="primary" @click="goToPublish">
          {{ $t('myProducts.empty.publishBtn') }}
        </el-button>
      </el-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Picture, View, Edit, Delete, Bottom, Top, Box } from '@element-plus/icons-vue'
import { useProductsStore } from '@/store/modules/products'
import {
  ProductStatus,
  getProductStatusMap,
  PRODUCT_STATUS_TAG_TYPE,
  getCategoryMap,
  getConditionMap
} from '@/types/products'
import type { Product } from '@/types/products'
import dayjs from 'dayjs'

const router = useRouter()
const productsStore = useProductsStore()
const { t } = useI18n()

// 当前选中的状态
const currentStatus = ref<number>(-1)

// 获取国际化映射
const statusMap = computed(() => getProductStatusMap(t))
const categoryMap = computed(() => getCategoryMap(t))
const conditionMap = computed(() => getConditionMap(t))

/**
 * 格式化时间
 */
const formatTime = (time: string): string => {
  return dayjs(time).format('YYYY-MM-DD HH:mm')
}

/**
 * 获取状态标签
 */
const getStatusLabel = (status: number): string => {
  return statusMap.value[status] || ''
}

/**
 * 获取状态标签类型
 */
const getStatusTagType = (status: number): 'success' | 'info' | 'warning' | 'danger' => {
  return PRODUCT_STATUS_TAG_TYPE[status] || 'info'
}

/**
 * 获取分类标签
 */
const getCategoryLabel = (categoryId: number): string => {
  return categoryMap.value[categoryId] || t('productDetail.basicInfo.uncategorized')
}

/**
 * 获取成色标签
 */
const getConditionLabel = (condition?: string): string => {
  if (!condition) return t('productDetail.basicInfo.unknown')
  return conditionMap.value[condition] || condition
}

/**
 * 状态变化处理
 */
const handleStatusChange = async (status: string | number | boolean | undefined) => {
  try {
    const statusNum = typeof status === 'number' ? status : -1
    await productsStore.updateMyProductsStatusFilter(statusNum)
  } catch (error) {
    ElMessage.error(t('myProducts.messages.loadFailed'))
  }
}

/**
 * 查看商品详情
 */
const viewProductDetail = (goodsId: number) => {
  router.push(`/products/${goodsId}`)
}

/**
 * 编辑商品
 */
const handleEdit = () => {
  ElMessage.info(t('myProducts.messages.editComingSoon'))
}

/**
 * 下架商品
 */
const handleOffShelf = async (product: Product) => {
  try {
    await ElMessageBox.confirm(
      t('myProducts.messages.offShelfConfirm'),
      t('myProducts.messages.offShelfConfirmTitle'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      }
    )

    await productsStore.offShelfProduct(product.goods_id)
    ElMessage.success(t('myProducts.messages.offShelfSuccess'))

    // 刷新列表
    await productsStore.fetchMyProducts()
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error(t('myProducts.messages.offShelfFailed'))
    }
  }
}

/**
 * 重新上架商品
 */
const handleRelist = async (product: Product) => {
  try {
    await ElMessageBox.confirm(
      t('myProducts.messages.relistConfirm'),
      t('myProducts.messages.relistConfirmTitle'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'success'
      }
    )

    await productsStore.relistProduct(product.goods_id)
    ElMessage.success(t('myProducts.messages.relistSuccess'))

    // 刷新列表
    await productsStore.fetchMyProducts()
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error(t('myProducts.messages.relistFailed'))
    }
  }
}

/**
 * 删除商品
 */
const handleDelete = async (product: Product) => {
  try {
    await ElMessageBox.confirm(
      t('myProducts.messages.deleteConfirm'),
      t('myProducts.messages.deleteConfirmTitle'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'error'
      }
    )

    await productsStore.deleteProduct(product.goods_id)
    ElMessage.success(t('myProducts.messages.deleteSuccess'))
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error(t('myProducts.messages.deleteFailed'))
    }
  }
}

/**
 * 前往发布商品
 */
const goToPublish = () => {
  router.push('/products/publish')
}

/**
 * 页面加载时获取商品列表
 */
onMounted(async () => {
  try {
    await productsStore.fetchMyProducts()
  } catch (error) {
    ElMessage.error(t('myProducts.messages.loadFailed'))
  }
})
</script>

<style scoped lang="scss">
.my-products-page {
  min-height: calc(100vh - $header-height);
  padding: $spacing-xl 0;
  background: $bg-color-page;

  .container {
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 $spacing-lg;
  }

  .page-header {
    margin-bottom: $spacing-xl;
    text-align: center;

    .page-title {
      font-size: 32px;
      font-weight: 600;
      color: $text-primary;
      margin-bottom: $spacing-sm;
    }

    .page-subtitle {
      font-size: $font-size-base;
      color: $text-secondary;
    }
  }

  .status-tabs {
    margin-bottom: $spacing-xl;
    display: flex;
    justify-content: center;

    .tab-group {
      :deep(.el-radio-button__inner) {
        padding: 12px 24px;
        font-size: $font-size-base;
        border-color: $border-color-base;
      }

      :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
        background-color: $primary-color;
        border-color: $primary-color;
      }
    }
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: $spacing-lg;
  }

  .product-card {
    :deep(.el-card) {
      height: 100%;
      border-radius: $border-radius-lg;
      transition: $transition-base;

      &:hover {
        box-shadow: $shadow-lg;
      }
    }

    :deep(.el-card__body) {
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .product-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: $spacing-lg;
      gap: $spacing-md;
    }

    .product-image-wrapper {
      position: relative;
      cursor: pointer;
      border-radius: $border-radius-md;
      overflow: hidden;

      .product-image {
        width: 100%;
        height: 200px;
        border-radius: $border-radius-md;

        .image-error {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: $bg-secondary;
          color: $text-tertiary;

          .el-icon {
            font-size: 48px;
          }
        }
      }

      .status-badge {
        position: absolute;
        top: $spacing-sm;
        right: $spacing-sm;
      }
    }

    .product-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: $spacing-md;

      .product-title {
        font-size: $font-size-large;
        font-weight: 600;
        color: $text-primary;
        cursor: pointer;
        transition: $transition-fast;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        &:hover {
          color: $primary-color;
        }
      }

      .product-details {
        display: flex;
        flex-direction: column;
        gap: $spacing-xs;

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: $font-size-sm;

          .label {
            color: $text-secondary;
          }

          .value {
            color: $text-primary;
            font-weight: 500;

            &.price {
              font-size: $font-size-large;
              font-weight: 700;
              color: $primary-color;
            }
          }
        }
      }
    }

    .product-actions {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-md $spacing-lg;
      border-top: 1px solid $border-color-light;
      flex-wrap: wrap;

      .el-button {
        padding: 8px 12px;
        font-size: $font-size-sm;
      }
    }
  }

  .empty-state {
    margin-top: $spacing-2xl;

    .empty-subtitle {
      font-size: $font-size-base;
      color: $text-secondary;
      margin: $spacing-md 0 $spacing-lg;
    }
  }
}

// 响应式设计
@media (max-width: $breakpoint-md) {
  .my-products-page {
    .page-header {
      .page-title {
        font-size: 24px;
      }
    }

    .status-tabs {
      .tab-group {
        width: 100%;
        display: flex;

        :deep(.el-radio-button) {
          flex: 1;
        }

        :deep(.el-radio-button__inner) {
          padding: 10px 12px;
          font-size: $font-size-sm;
        }
      }
    }

    .products-container {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .my-products-page {
    .product-card {
      .product-actions {
        .el-button {
          flex: 1;
          min-width: 80px;
        }
      }
    }
  }
}
</style>
