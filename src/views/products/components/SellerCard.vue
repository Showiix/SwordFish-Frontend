<template>
  <div class="seller-card">
    <!-- ============================================ -->
    <!-- 卡片标题 -->
    <!-- ============================================ -->
    <div class="seller-header">
      <h3>卖家信息</h3>
    </div>

    <!-- ============================================ -->
    <!-- 卖家信息内容 -->
    <!-- ============================================ -->
    <div v-if="seller" class="seller-content">
      <!-- 卖家头像和基本信息 -->
      <div class="seller-info">
        <!-- 头像 -->
        <el-avatar
          :size="60"
          :src="seller.avatar_url"
          class="seller-avatar"
        >
          <!-- 如果没有头像，显示用户名首字母 -->
          {{ getInitial(seller.real_name || seller.student_id) }}
        </el-avatar>

        <!-- 卖家详细信息 -->
        <div class="seller-details">
          <!-- 姓名和认证 -->
          <div class="seller-name">
            <span>{{ seller.real_name || '用户' + seller.student_id }}</span>
            <!-- 认证标识（如果已认证） -->
            <el-tooltip content="已认证用户" placement="top">
              <el-icon color="#67c23a" :size="18">
                <SuccessFilled />
              </el-icon>
            </el-tooltip>
          </div>

          <!-- 学号 -->
          <div class="seller-meta">
            <span class="meta-item">
              <el-icon><User /></el-icon>
              学号：{{ seller.student_id }}
            </span>
          </div>

          <!-- 信用评分 -->
          <div class="seller-rating">
            <span class="label">信用评分：</span>
            <el-rate
              :model-value="sellerRating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value} 分"
            />
          </div>
        </div>
      </div>

      <!-- 卖家统计信息（可选） -->
      <div class="seller-stats">
        <div class="stat-item">
          <span class="stat-value">{{ seller.active_products_count || 0 }}</span>
          <span class="stat-label">在售商品</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ seller.sold_count || 0 }}</span>
          <span class="stat-label">已售商品</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ seller.credit_score || 100 }}</span>
          <span class="stat-label">信用分</span>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- 没有卖家信息时的占位 -->
    <!-- ============================================ -->
    <div v-else class="seller-empty">
      <el-empty description="卖家信息不可用" :image-size="60" />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ============================================
 * 卖家信息卡片组件
 * ============================================
 * 功能：
 * 1. 显示卖家头像
 * 2. 显示卖家基本信息（姓名、学号）
 * 3. 显示认证标识
 * 4. 显示信用评分
 * 5. 显示卖家统计数据
 */

import { computed } from 'vue'
import { SuccessFilled, User } from '@element-plus/icons-vue'

// ============================================
// Props 定义
// ============================================

interface Seller {
  user_id: number
  student_id: string
  real_name?: string
  credit_score: number
  avatar_url?: string
  active_products_count?: number  // 在售商品数
  sold_count?: number              // 已售商品数
}

interface Props {
  seller?: Seller
}

const props = defineProps<Props>()

// ============================================
// 计算属性
// ============================================

/**
 * 信用评分（转换为5分制）
 * 假设后端返回的是100分制，转换为5分制用于el-rate显示
 */
const sellerRating = computed(() => {
  if (!props.seller) return 5
  // 100分制转5分制：100分 -> 5星
  return (props.seller.credit_score / 100) * 5
})

// ============================================
// 方法定义
// ============================================

/**
 * 获取用户名首字母
 * 用于头像占位符
 */
const getInitial = (name: string): string => {
  if (!name) return '?'
  return name.charAt(0).toUpperCase()
}
</script>

<style scoped lang="scss">
.seller-card {
  margin-top: 16px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  // 卡片标题
  .seller-header {
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebeef5;

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #303133;
      margin: 0;
    }
  }

  // 卖家信息内容
  .seller-content {
    // 卖家基本信息
    .seller-info {
      display: flex;
      gap: 16px;
      margin-bottom: 20px;

      .seller-avatar {
        flex-shrink: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-size: 24px;
        font-weight: 600;
      }

      .seller-details {
        flex: 1;
        min-width: 0; // 防止flex子元素溢出

        .seller-name {
          font-size: 18px;
          font-weight: 600;
          color: #303133;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;

          span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .seller-meta {
          font-size: 14px;
          color: #909399;
          margin-bottom: 12px;

          .meta-item {
            display: inline-flex;
            align-items: center;
            gap: 4px;

            .el-icon {
              font-size: 14px;
            }
          }
        }

        .seller-rating {
          display: flex;
          align-items: center;
          gap: 12px;

          .label {
            font-size: 14px;
            color: #606266;
            white-space: nowrap;
          }

          :deep(.el-rate) {
            .el-rate__text {
              font-size: 14px;
              color: #606266;
            }
          }
        }
      }
    }

    // 卖家统计信息
    .seller-stats {
      display: flex;
      justify-content: space-around;
      padding-top: 16px;
      border-top: 1px solid #ebeef5;

      .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;

        .stat-value {
          font-size: 20px;
          font-weight: 600;
          color: #409eff;
        }

        .stat-label {
          font-size: 12px;
          color: #909399;
        }
      }
    }
  }

  // 空状态
  .seller-empty {
    padding: 20px 0;
  }

  // 手机端适配
  @media (max-width: 768px) {
    padding: 16px;

    .seller-content {
      .seller-info {
        .seller-avatar {
          width: 50px;
          height: 50px;
          font-size: 20px;
        }

        .seller-details {
          .seller-name {
            font-size: 16px;
          }
        }
      }

      .seller-stats {
        .stat-item {
          .stat-value {
            font-size: 18px;
          }

          .stat-label {
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>

