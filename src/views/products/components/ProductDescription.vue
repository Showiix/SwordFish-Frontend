<template>
  <div class="product-description">
    <!-- ============================================ -->
    <!-- 描述标题 -->
    <!-- ============================================ -->
    <div class="description-header">
      <h3>商品描述</h3>
    </div>

    <!-- ============================================ -->
    <!-- 描述内容 -->
    <!-- ============================================ -->
    <div class="description-content">
      <div v-if="description && description.trim()" class="text-content">
        {{ description }}
      </div>
      <div v-else class="empty-content">
        <el-empty description="暂无商品描述" :image-size="80" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ============================================
 * 商品描述组件
 * ============================================
 * 功能：
 * 1. 显示商品详细描述
 * 2. 处理空描述的情况
 * 3. 保持文本格式（换行等）
 */

// ============================================
// Props 定义
// ============================================

interface Props {
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: ''
})
</script>

<style scoped lang="scss">
.product-description {
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  // 描述标题
  .description-header {
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebeef5;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #303133;
      margin: 0;
    }
  }

  // 描述内容
  .description-content {
    .text-content {
      font-size: 14px;
      line-height: 1.8;
      color: #606266;
      white-space: pre-wrap; // 保留换行符和空格
      word-break: break-word; // 长单词自动换行

      // 如果内容很长，限制高度并添加展开功能（可选）
      // max-height: 300px;
      // overflow: hidden;
    }

    .empty-content {
      padding: 40px 0;
      text-align: center;
    }
  }

  // 手机端适配
  @media (max-width: 768px) {
    padding: 16px;

    .description-header {
      h3 {
        font-size: 16px;
      }
    }

    .description-content {
      .text-content {
        font-size: 13px;
        line-height: 1.7;
      }
    }
  }
}
</style>

