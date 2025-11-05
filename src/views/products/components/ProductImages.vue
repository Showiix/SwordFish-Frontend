<template>
  <div class="product-images">
    <!-- ============================================ -->
    <!-- 主图展示区域 -->
    <!-- ============================================ -->
    <div class="main-image">
      <el-image
        :src="currentImage"
        fit="contain"
        :preview-src-list="images"
        :initial-index="currentIndex"
        class="main-product-image"
      >
        <!-- 图片加载中 -->
        <template #placeholder>
          <div class="image-placeholder">
            <el-icon class="is-loading">
              <Loading />
            </el-icon>
          </div>
        </template>

        <!-- 图片加载失败 -->
        <template #error>
          <div class="image-error">
            <el-icon><PictureFilled /></el-icon>
            <p>图片加载失败</p>
          </div>
        </template>
      </el-image>

      <!-- 左右切换按钮 -->
      <div v-if="images.length > 1" class="image-nav">
        <el-button
          :icon="ArrowLeft"
          circle
          size="large"
          @click="prevImage"
          :disabled="currentIndex === 0"
          class="nav-button"
        />
        <el-button
          :icon="ArrowRight"
          circle
          size="large"
          @click="nextImage"
          :disabled="currentIndex === images.length - 1"
          class="nav-button"
        />
      </div>

      <!-- 图片指示器 -->
      <div v-if="images.length > 1" class="image-indicator">
        <span class="indicator-text">
          {{ currentIndex + 1 }} / {{ images.length }}
        </span>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- 缩略图列表 -->
    <!-- ============================================ -->
    <div v-if="images.length > 1" class="thumbnail-list">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="thumbnail-item"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index"
      >
        <el-image
          :src="image"
          fit="cover"
          class="thumbnail-image"
        >
          <!-- 缩略图加载失败 -->
          <template #error>
            <div class="thumbnail-error">
              <el-icon><Picture /></el-icon>
            </div>
          </template>
        </el-image>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ============================================
 * 商品图片轮播组件
 * ============================================
 * 功能：
 * 1. 显示商品主图
 * 2. 提供左右切换按钮
 * 3. 显示缩略图列表
 * 4. 点击缩略图切换主图
 * 5. 支持图片预览（点击放大）
 */

import { ref, computed } from 'vue'
import { ArrowLeft, ArrowRight, Loading, PictureFilled, Picture } from '@element-plus/icons-vue'

// ============================================
// Props 定义
// ============================================

interface Props {
  images: string[]  // 图片URL数组
}

const props = withDefaults(defineProps<Props>(), {
  images: () => []
})

// ============================================
// 响应式数据
// ============================================

// 当前显示的图片索引
const currentIndex = ref(0)

// ============================================
// 计算属性
// ============================================

// 当前显示的图片URL
const currentImage = computed(() => {
  return props.images[currentIndex.value] || ''
})

// ============================================
// 方法定义
// ============================================

/**
 * 切换到上一张图片
 */
const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

/**
 * 切换到下一张图片
 */
const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

/**
 * 支持键盘左右箭头切换（可选功能）
 * 可以在后续添加
 */
</script>

<style scoped lang="scss">
.product-images {
  // 主图区域
  .main-image {
    position: relative;
    height: 400px;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    .main-product-image {
      width: 100%;
      height: 100%;

      // 图片占位符
      .image-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #f5f7fa;
        color: #909399;
        font-size: 32px;
      }

      // 图片加载失败
      .image-error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #f5f7fa;
        color: #c0c4cc;

        .el-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        p {
          font-size: 14px;
          color: #909399;
        }
      }
    }

    // 左右切换按钮
    .image-nav {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      pointer-events: none; // 允许点击穿透到按钮

      .nav-button {
        pointer-events: auto; // 恢复按钮的点击
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

        &:hover {
          background: #ffffff;
          transform: scale(1.1);
        }

        &:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      }
    }

    // 图片指示器
    .image-indicator {
      position: absolute;
      bottom: 16px;
      right: 16px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;

      .indicator-text {
        font-weight: 500;
      }
    }
  }

  // 缩略图列表
  .thumbnail-list {
    display: flex;
    gap: 8px;
    margin-top: 12px;
    overflow-x: auto; // 如果缩略图太多，允许横向滚动
    padding-bottom: 4px;

    // 自定义滚动条样式
    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #dcdfe6;
      border-radius: 2px;

      &:hover {
        background: #c0c4cc;
      }
    }

    .thumbnail-item {
      flex-shrink: 0; // 防止缩略图被压缩
      width: 60px;
      height: 60px;
      border: 2px solid transparent;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
      overflow: hidden;

      &:hover {
        border-color: #409eff;
        transform: scale(1.05);
      }

      &.active {
        border-color: #409eff;
        box-shadow: 0 2px 8px rgba(64, 158, 255, 0.3);
      }

      .thumbnail-image {
        width: 100%;
        height: 100%;
      }

      .thumbnail-error {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #f5f7fa;
        color: #c0c4cc;

        .el-icon {
          font-size: 24px;
        }
      }
    }
  }

  // 手机端适配
  @media (max-width: 768px) {
    .main-image {
      height: 300px;
    }

    .thumbnail-list {
      .thumbnail-item {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>

