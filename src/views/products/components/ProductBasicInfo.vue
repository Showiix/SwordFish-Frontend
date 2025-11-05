<template>
  <div class="product-basic-info">
    <!-- ============================================ -->
    <!-- 商品标题 -->
    <!-- ============================================ -->
    <h1 class="product-title">
      {{ product.goods_title }}
    </h1>

    <!-- ============================================ -->
    <!-- 价格和成色 -->
    <!-- ============================================ -->
    <div class="product-meta">
      <!-- 价格区域 -->
      <div class="price-section">
        <span class="price-label">价格</span>
        <span class="price-value">¥{{ formattedPrice }}</span>
      </div>

      <!-- 成色区域 -->
      <div v-if="product.condition_level" class="condition-section">
        <span class="label">成色</span>
        <el-tag :type="conditionTagType" size="large">
          {{ conditionText }}
        </el-tag>
      </div>

      <!-- 商品状态 -->
      <div class="status-section">
        <el-tag v-if="isAvailable" type="success" effect="dark">
          在售中
        </el-tag>
        <el-tag v-else type="info" effect="dark">
          {{ statusText }}
        </el-tag>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- 商品信息列表 -->
    <!-- ============================================ -->
    <el-descriptions :column="2" border class="product-descriptions">
      <el-descriptions-item label="商品分类">
        <el-tag>{{ categoryText }}</el-tag>
      </el-descriptions-item>

      <el-descriptions-item label="发布时间">
        {{ publishTimeText }}
      </el-descriptions-item>

      <el-descriptions-item label="浏览次数" v-if="product.views !== undefined">
        {{ product.views || 0 }} 次
      </el-descriptions-item>

      <el-descriptions-item label="商品编号">
        #{{ product.goods_id }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
/**
 * ============================================
 * 商品基本信息组件
 * ============================================
 * 功能：
 * 1. 显示商品标题
 * 2. 显示价格（格式化为两位小数）
 * 3. 显示成色（带颜色标签）
 * 4. 显示商品状态
 * 5. 显示其他基本信息
 */

import { computed } from 'vue'
import type { Product } from '@/types/products'
import {
  CONDITION_MAP,
  CONDITION_TAG_TYPE,
  CATEGORY_MAP,
  ProductStatus,
  STATUS_MAP
} from '@/types/products'

// ============================================
// Props 定义
// ============================================

interface Props {
  product: Product
}

const props = defineProps<Props>()

// ============================================
// 计算属性
// ============================================

/**
 * 格式化价格
 * 确保价格显示为两位小数
 */
const formattedPrice = computed(() => {
  return props.product.goods_price?.toFixed(2) || '0.00'
})

/**
 * 成色文本
 * 将成色代码转换为用户可读的文字
 */
const conditionText = computed(() => {
  const condition = props.product.condition_level
  return condition ? CONDITION_MAP[condition] || '未知' : '未知'
})

/**
 * 成色标签类型
 * 用于 el-tag 的 type 属性
 */
const conditionTagType = computed(() => {
  const condition = props.product.condition_level
  return condition ? CONDITION_TAG_TYPE[condition] : 'info'
})

/**
 * 商品分类文本
 */
const categoryText = computed(() => {
  return CATEGORY_MAP[props.product.goods_type] || '未分类'
})

/**
 * 商品是否可购买
 */
const isAvailable = computed(() => {
  return props.product.goods_status === ProductStatus.AVAILABLE
})

/**
 * 商品状态文本
 */
const statusText = computed(() => {
  return STATUS_MAP[props.product.goods_status] || '未知'
})

/**
 * 发布时间格式化
 * 将时间戳转换为相对时间（如：3天前）或绝对时间
 */
const publishTimeText = computed(() => {
  const createTime = props.product.create_time

  if (!createTime) return '未知'

  // 方案1：显示绝对时间
  const date = new Date(createTime)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })

  // 方案2：显示相对时间（需要安装 dayjs）
  // import dayjs from 'dayjs'
  // import relativeTime from 'dayjs/plugin/relativeTime'
  // import 'dayjs/locale/zh-cn'
  // dayjs.extend(relativeTime)
  // dayjs.locale('zh-cn')
  // return dayjs(createTime).fromNow()
})
</script>

<style scoped lang="scss">
.product-basic-info {
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  // 商品标题
  .product-title {
    font-size: 24px;
    font-weight: 600;
    color: #303133;
    margin: 0 0 20px 0;
    line-height: 1.4;
    word-break: break-word; // 长标题自动换行
  }

  // 价格和成色区域
  .product-meta {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap; // 手机端自动换行
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #ebeef5;

    // 价格区域
    .price-section {
      display: flex;
      align-items: baseline;
      gap: 8px;

      .price-label {
        font-size: 14px;
        color: #909399;
      }

      .price-value {
        font-size: 32px;
        font-weight: 700;
        color: #f56c6c;
        font-family: 'Arial', sans-serif;
      }
    }

    // 成色区域
    .condition-section {
      display: flex;
      align-items: center;
      gap: 8px;

      .label {
        font-size: 14px;
        color: #909399;
      }
    }

    // 状态区域
    .status-section {
      margin-left: auto; // 推到右侧

      @media (max-width: 768px) {
        margin-left: 0; // 手机端取消右对齐
      }
    }
  }

  // 商品信息列表
  .product-descriptions {
    :deep(.el-descriptions__label) {
      width: 100px;
      background: #fafafa;
      font-weight: 500;
    }

    :deep(.el-descriptions__content) {
      color: #606266;
    }
  }

  // 手机端适配
  @media (max-width: 768px) {
    padding: 16px;

    .product-title {
      font-size: 20px;
    }

    .product-meta {
      .price-section {
        .price-value {
          font-size: 28px;
        }
      }
    }

    .product-descriptions {
      :deep(.el-descriptions__label) {
        width: 80px;
      }
    }
  }
}
</style>

