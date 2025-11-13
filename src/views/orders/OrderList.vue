<template>
  <div class="order-list-page">
    <div class="container">
      <!-- 页面头部 -->
      <div class="page-header">
        <h1 class="page-title">{{ $t('orderList.pageTitle') }}</h1>
        <p class="page-subtitle">{{ $t('orderList.pageSubtitle') }}</p>
      </div>

      <!-- 订单状态筛选标签 -->
      <div class="status-tabs">
        <el-radio-group v-model="currentStatus" @change="handleStatusChange" class="tab-group">
          <el-radio-button :label="-1">
            {{ $t('orderList.tabs.all') }}
          </el-radio-button>
          <el-radio-button :label="OrderStatus.PENDING">
            {{ $t('orderList.tabs.pending') }}
          </el-radio-button>
          <el-radio-button :label="OrderStatus.COMPLETED">
            {{ $t('orderList.tabs.completed') }}
          </el-radio-button>
          <el-radio-button :label="OrderStatus.CANCELLED">
            {{ $t('orderList.tabs.cancelled') }}
          </el-radio-button>
        </el-radio-group>
      </div>

      <!-- 加载状态 -->
      <div v-if="ordersStore.loading" class="loading-container">
        <el-skeleton :rows="3" animated />
        <el-skeleton :rows="3" animated />
      </div>

      <!-- 订单列表 -->
      <div v-else-if="ordersStore.hasOrders" class="orders-container">
        <div v-for="order in ordersStore.orders" :key="order.order_id" class="order-card">
          <el-card shadow="hover">
            <!-- 订单头部 -->
            <div class="order-header">
              <div class="order-info">
                <span class="order-no">
                  {{ $t('orderList.card.orderNo') }}: {{ order.order_id }}
                </span>
                <span class="order-time">
                  {{ $t('orderList.card.createTime') }}: {{ formatTime(order.create_time) }}
                </span>
              </div>
              <el-tag :type="getStatusTagType(order.order_status)" size="large">
                {{ getStatusLabel(order.order_status) }}
              </el-tag>
            </div>

            <!-- 订单主体 -->
            <div class="order-body">
              <!-- 商品信息 -->
              <div class="goods-info" @click="viewProductDetail(order.goods_info.goods_id)">
                <el-image
                  :src="order.goods_info.goods_images?.[0] || ''"
                  fit="cover"
                  class="goods-image"
                >
                  <template #error>
                    <div class="image-error">
                      <el-icon><Picture /></el-icon>
                    </div>
                  </template>
                </el-image>
                <div class="goods-details">
                  <h3 class="goods-title">{{ order.goods_info.goods_title }}</h3>
                  <p class="goods-price">¥{{ order.goods_info.goods_price }}</p>
                </div>
              </div>

              <!-- 订单详细信息 -->
              <div class="order-details">
                <div class="detail-item">
                  <span class="label">{{ $t('orderList.card.seller') }}:</span>
                  <span class="value">{{ order.seller_info.real_name || order.seller_info.student_id }}</span>
                </div>
                <div v-if="order.buyer_note" class="detail-item">
                  <span class="label">{{ $t('orderList.card.buyerNote') }}:</span>
                  <span class="value">{{ order.buyer_note }}</span>
                </div>
                <div class="detail-item total-amount">
                  <span class="label">{{ $t('orderList.card.totalAmount') }}:</span>
                  <span class="value amount">¥{{ order.order_price }}</span>
                </div>
              </div>
            </div>

            <!-- 订单操作 -->
            <div class="order-actions">
              <el-button
                v-if="order.order_status === OrderStatus.PENDING"
                type="primary"
                @click="handlePay"
              >
                {{ $t('orderList.card.payNow') }}
              </el-button>
              <el-button
                v-if="order.order_status === OrderStatus.PENDING"
                @click="handleCancelOrder(order)"
              >
                {{ $t('orderList.card.cancelOrder') }}
              </el-button>
              <el-button @click="handleContactSeller">
                {{ $t('orderList.card.contactSeller') }}
              </el-button>
            </div>
          </el-card>
        </div>
      </div>

      <!-- 空状态 -->
      <el-empty
        v-else
        :description="$t('orderList.empty.title')"
        class="empty-state"
      >
        <template #image>
          <el-icon :size="120" color="#b6ccd8">
            <ShoppingBag />
          </el-icon>
        </template>
        <p class="empty-subtitle">{{ $t('orderList.empty.subtitle') }}</p>
        <el-button type="primary" @click="goToProducts">
          {{ $t('orderList.empty.browseBtn') }}
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
import { Picture, ShoppingBag } from '@element-plus/icons-vue'
import { useOrdersStore } from '@/store/modules/orders'
import { OrderStatus, getOrderStatusMap, ORDER_STATUS_TAG_TYPE } from '@/types/orders'
import type { Order } from '@/types/orders'
import dayjs from 'dayjs'

const router = useRouter()
const ordersStore = useOrdersStore()
const { t } = useI18n()

// 当前选中的状态
const currentStatus = ref<number>(-1)

// 获取国际化的订单状态映射
const statusMap = computed(() => getOrderStatusMap(t))

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
const getStatusTagType = (status: number): 'warning' | 'success' | 'info' => {
  return ORDER_STATUS_TAG_TYPE[status] || 'info'
}

/**
 * 状态变化处理
 */
const handleStatusChange = async (status: string | number | boolean | undefined) => {
  try {
    const statusNum = typeof status === 'number' ? status : -1
    await ordersStore.updateStatusFilter(statusNum)
  } catch (error) {
    ElMessage.error(t('orderList.messages.loadFailed'))
  }
}

/**
 * 查看商品详情
 */
const viewProductDetail = (goodsId: number) => {
  router.push(`/products/${goodsId}`)
}

/**
 * 支付订单
 */
const handlePay = () => {
  ElMessage.info(t('orderList.messages.paymentComingSoon'))
}

/**
 * 取消订单
 */
const handleCancelOrder = async (order: Order) => {
  try {
    await ElMessageBox.confirm(
      t('orderList.messages.cancelConfirm'),
      t('orderList.messages.cancelConfirmTitle'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      }
    )

    await ordersStore.cancelOrder(order.order_id)
    ElMessage.success(t('orderList.messages.cancelSuccess'))
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error(t('orderList.messages.cancelFailed'))
    }
  }
}

/**
 * 联系卖家
 */
const handleContactSeller = () => {
  ElMessage.info(t('orderList.messages.chatComingSoon'))
}

/**
 * 前往商品列表
 */
const goToProducts = () => {
  router.push('/products')
}

/**
 * 页面加载时获取订单列表
 */
onMounted(async () => {
  try {
    await ordersStore.fetchOrders()
  } catch (error) {
    ElMessage.error(t('orderList.messages.loadFailed'))
  }
})
</script>

<style scoped lang="scss">
.order-list-page {
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

  .orders-container {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
  }

  .order-card {
    :deep(.el-card) {
      border-radius: $border-radius-lg;
      transition: $transition-base;

      &:hover {
        box-shadow: $shadow-lg;
      }
    }

    :deep(.el-card__body) {
      padding: $spacing-lg;
    }

    .order-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: $spacing-md;
      border-bottom: 1px solid $border-color-light;
      margin-bottom: $spacing-md;

      .order-info {
        display: flex;
        flex-direction: column;
        gap: $spacing-xs;

        .order-no {
          font-size: $font-size-base;
          font-weight: 600;
          color: $text-primary;
        }

        .order-time {
          font-size: $font-size-sm;
          color: $text-tertiary;
        }
      }
    }

    .order-body {
      display: flex;
      gap: $spacing-xl;
      margin-bottom: $spacing-lg;

      .goods-info {
        display: flex;
        gap: $spacing-md;
        flex: 1;
        cursor: pointer;
        transition: $transition-fast;

        &:hover {
          opacity: 0.8;
        }

        .goods-image {
          width: 120px;
          height: 120px;
          border-radius: $border-radius-md;
          flex-shrink: 0;
          overflow: hidden;

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

        .goods-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .goods-title {
            font-size: $font-size-large;
            font-weight: 600;
            color: $text-primary;
            margin-bottom: $spacing-sm;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .goods-price {
            font-size: $font-size-xlarge;
            font-weight: 700;
            color: $primary-color;
          }
        }
      }

      .order-details {
        display: flex;
        flex-direction: column;
        gap: $spacing-sm;
        min-width: 300px;

        .detail-item {
          display: flex;
          justify-content: space-between;
          font-size: $font-size-base;

          .label {
            color: $text-secondary;
          }

          .value {
            color: $text-primary;
            font-weight: 500;
            text-align: right;
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          &.total-amount {
            margin-top: $spacing-sm;
            padding-top: $spacing-sm;
            border-top: 1px solid $border-color-light;

            .value.amount {
              font-size: $font-size-large;
              font-weight: 700;
              color: $danger-color;
            }
          }
        }
      }
    }

    .order-actions {
      display: flex;
      justify-content: flex-end;
      gap: $spacing-md;
      padding-top: $spacing-md;
      border-top: 1px solid $border-color-light;
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
  .order-list-page {
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

    .order-card {
      .order-body {
        flex-direction: column;

        .order-details {
          min-width: auto;
        }
      }

      .order-actions {
        flex-wrap: wrap;

        .el-button {
          flex: 1;
          min-width: 120px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .order-list-page {
    .order-card {
      .order-header {
        flex-direction: column;
        align-items: flex-start;
        gap: $spacing-sm;
      }

      .order-body {
        .goods-info {
          .goods-image {
            width: 80px;
            height: 80px;
          }

          .goods-details {
            .goods-title {
              font-size: $font-size-base;
            }

            .goods-price {
              font-size: $font-size-large;
            }
          }
        }
      }

      .order-actions {
        flex-direction: column;

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
