<template>
  <div class="product-card" @click="handleClick">
    <!-- 商品图片 -->
    <div class="product-image-wrapper">
      <el-image
        :src="productImage"
        fit="cover"
        class="product-image"
        lazy
      >
        <template #placeholder>
          <div class="image-placeholder">
            <el-icon><Picture /></el-icon>
          </div>
        </template>
        <template #error>
          <div class="image-error">
            <el-icon><PictureFilled /></el-icon>
          </div>
        </template>
      </el-image>

      <!-- 成色标签 -->
      <div v-if="product.condition_level" class="condition-badge" :style="conditionStyle">
        {{ conditionLabel }}
      </div>

      <!-- 收藏按钮 -->
      <div class="favorite-btn" @click.stop="handleFavorite">
        <el-icon :class="{ 'is-favorite': isFavorite }">
          <component :is="isFavorite ? StarFilled : Star" />
        </el-icon>
      </div>
    </div>

    <!-- 商品信息 -->
    <div class="product-info">
      <!-- 商品标题 -->
      <h3 class="product-title">{{ product.goods_title }}</h3>

      <!-- 商品描述 -->
      <p v-if="product.goods_desc" class="product-desc">
        {{ truncatedDesc }}
      </p>

      <!-- 商品价格和卖家信息 -->
      <div class="product-footer">
        <div class="price-info">
          <span class="current-price">{{ formatPrice(product.goods_price) }}</span>
        </div>

        <!-- 卖家信息 -->
        <div v-if="product.publisher" class="seller-info">
          <el-avatar :src="product.publisher.avatar_url" :size="24">
            {{ product.publisher.real_name?.charAt(0) || 'U' }}
          </el-avatar>
          <div class="seller-credit">
            <el-icon class="star-icon"><StarFilled /></el-icon>
            <span>{{ product.publisher.credit_score }}</span>
          </div>
        </div>
      </div>

      <!-- 时间信息 -->
      <div class="product-meta">
        <span class="meta-time">{{ timeAgo(product.create_time) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Picture, PictureFilled, Star, StarFilled } from '@element-plus/icons-vue'
import { formatPrice, timeAgo, truncateText } from '@/utils/format'
import { PRODUCT_CONDITION } from '@/utils/constants'
import type { Product } from '@/types/products'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: [id: number]
  favorite: [id: number]
}>()

const isFavorite = ref(false)

// 商品图片
const productImage = computed(() => {
  if (props.product.goods_images && props.product.goods_images.length > 0) {
    return props.product.goods_images[0]
  }
  return ''
})

// 截断描述
const truncatedDesc = computed(() => {
  if (!props.product.goods_desc) return ''
  return truncateText(props.product.goods_desc, 80)
})

// 成色标签和样式
const conditionLabel = computed(() => {
  const level = props.product.condition_level
  if (!level) return ''
  
  const condition = Object.values(PRODUCT_CONDITION).find(c => c.value === level)
  return condition?.label || ''
})

const conditionStyle = computed(() => {
  const level = props.product.condition_level
  if (!level) return {}
  
  const condition = Object.values(PRODUCT_CONDITION).find(c => c.value === level)
  return {
    background: condition?.color || '#909399',
    color: 'white'
  }
})

// 点击卡片
const handleClick = () => {
  emit('click', props.product.goods_id)
}

// 收藏/取消收藏
const handleFavorite = () => {
  isFavorite.value = !isFavorite.value
  emit('favorite', props.product.goods_id)
}
</script>

<style scoped lang="scss">
.product-card {
  background: white;
  border-radius: $border-radius-lg;
  overflow: hidden;
  cursor: pointer;
  transition: $transition-base;
  box-shadow: $shadow-sm;

  &:hover {
    box-shadow: $shadow-lg;
    transform: translateY(-4px);

    .product-image {
      transform: scale(1.05);
    }
  }
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%; // 4:3 比例
  overflow: hidden;
  background: $bg-tertiary;

  .product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;

    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-placeholder,
  .image-error {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 48px;
    color: $text-tertiary;
  }

  .condition-badge {
    position: absolute;
    top: $spacing-md;
    left: $spacing-md;
    padding: $spacing-xs $spacing-md;
    border-radius: $border-radius-full;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .favorite-btn {
    position: absolute;
    top: $spacing-md;
    right: $spacing-md;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    border-radius: $border-radius-full;
    backdrop-filter: blur(4px);
    transition: $transition-base;

    &:hover {
      background: white;
      transform: scale(1.1);
    }

    .el-icon {
      font-size: 20px;
      color: $text-tertiary;
      transition: $transition-base;

      &.is-favorite {
        color: $danger-color;
      }
    }
  }
}

.product-info {
  padding: $spacing-md;
}

.product-title {
  font-size: 16px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-desc {
  font-size: 14px;
  color: $text-secondary;
  margin: 0 0 $spacing-md 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-sm;
}

.price-info {
  .current-price {
    font-size: 20px;
    font-weight: 700;
    color: $primary-color;
  }
}

.seller-info {
  display: flex;
  align-items: center;
  gap: $spacing-sm;

  .seller-credit {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 12px;
    color: $text-secondary;

    .star-icon {
      color: $warning-color;
      font-size: 14px;
    }
  }
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: $text-tertiary;

  .meta-time {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
  }
}
</style>

