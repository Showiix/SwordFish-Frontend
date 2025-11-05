<template>
  <div class="product-actions">
    <!-- ============================================ -->
    <!-- 收藏按钮 -->
    <!-- ============================================ -->
    <el-button
      :icon="isFavorited ? StarFilled : Star"
      :type="isFavorited ? 'danger' : 'default'"
      @click="handleFavorite"
      :loading="favoriteLoading"
      size="large"
    >
      {{ isFavorited ? '已收藏' : '收藏' }}
    </el-button>

    <!-- ============================================ -->
    <!-- 联系卖家按钮 -->
    <!-- ============================================ -->
    <el-button
      type="primary"
      :icon="ChatDotRound"
      @click="handleContact"
      size="large"
    >
      联系卖家
    </el-button>

    <!-- ============================================ -->
    <!-- 立即购买按钮 -->
    <!-- ============================================ -->
    <el-button
      type="success"
      :icon="ShoppingCart"
      @click="handleBuy"
      :disabled="!isAvailable"
      size="large"
    >
      {{ isAvailable ? '立即购买' : '已售出' }}
    </el-button>

    <!-- ============================================ -->
    <!-- 更多操作下拉菜单 -->
    <!-- ============================================ -->
    <el-dropdown @command="handleMoreAction" trigger="click">
      <el-button :icon="MoreFilled" circle size="large" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="share">
            <el-icon><Share /></el-icon>
            <span>分享商品</span>
          </el-dropdown-item>
          <el-dropdown-item command="report" divided>
            <el-icon><Warning /></el-icon>
            <span>举报商品</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
/**
 * ============================================
 * 商品操作按钮组件
 * ============================================
 * 功能：
 * 1. 收藏/取消收藏商品
 * 2. 联系卖家
 * 3. 立即购买
 * 4. 分享商品
 * 5. 举报商品
 */

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  Star,
  StarFilled,
  ChatDotRound,
  ShoppingCart,
  MoreFilled,
  Share,
  Warning
} from '@element-plus/icons-vue'
import type { Product } from '@/types/products'
import { ProductStatus } from '@/types/products'

// ============================================
// Props 定义
// ============================================

interface Props {
  product: Product
}

const props = defineProps<Props>()

// ============================================
// 路由和状态管理
// ============================================

const router = useRouter()
const authStore = useAuthStore()

// ============================================
// 响应式数据
// ============================================

// 收藏状态（实际项目中应该从后端获取）
const isFavorited = ref(false)
const favoriteLoading = ref(false)

// ============================================
// 计算属性
// ============================================

/**
 * 商品是否可购买
 */
const isAvailable = computed(() => {
  return props.product.goods_status === ProductStatus.AVAILABLE
})

// ============================================
// 方法定义
// ============================================

/**
 * 处理收藏/取消收藏
 */
const handleFavorite = async () => {
  // 检查登录状态
  if (!authStore.isAuthenticated) {
    ElMessage.warning('请先登录')
    router.push({
      path: '/login',
      query: { redirect: `/products/${props.product.goods_id}` }
    })
    return
  }

  try {
    favoriteLoading.value = true

    // TODO: 调用收藏/取消收藏 API
    // if (isFavorited.value) {
    //   await unfavoriteProduct(props.product.goods_id)
    // } else {
    //   await favoriteProduct(props.product.goods_id)
    // }

    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 500))

    // 切换状态
    isFavorited.value = !isFavorited.value

    // 显示提示
    ElMessage.success(isFavorited.value ? '收藏成功' : '已取消收藏')

  } catch (error: any) {
    ElMessage.error('操作失败：' + (error.message || '未知错误'))
  } finally {
    favoriteLoading.value = false
  }
}

/**
 * 联系卖家
 */
const handleContact = () => {
  // 检查登录状态
  if (!authStore.isAuthenticated) {
    ElMessage.warning('请先登录')
    router.push({
      path: '/login',
      query: { redirect: `/products/${props.product.goods_id}` }
    })
    return
  }

  // 检查是否是自己的商品
  if (props.product.publisher?.user_id === authStore.user?.user_id) {
    ElMessage.info('这是您自己发布的商品')
    return
  }

  // 方案1：跳转到聊天页面
  // router.push({
  //   path: '/chat',
  //   query: { userId: props.product.publisher?.user_id }
  // })

  // 方案2：显示联系方式（临时方案）
  ElMessageBox.alert(
    '聊天功能正在开发中，敬请期待！',
    '联系卖家',
    {
      confirmButtonText: '我知道了',
      type: 'info'
    }
  )
}

/**
 * 立即购买
 */
const handleBuy = async () => {
  // 检查登录状态
  if (!authStore.isAuthenticated) {
    ElMessage.warning('请先登录')
    router.push({
      path: '/login',
      query: { redirect: `/products/${props.product.goods_id}` }
    })
    return
  }

  // 检查商品状态
  if (!isAvailable.value) {
    ElMessage.warning('商品已售出')
    return
  }

  // 检查是否是自己的商品
  if (props.product.publisher?.user_id === authStore.user?.user_id) {
    ElMessage.info('不能购买自己的商品')
    return
  }

  try {
    // 确认购买
    await ElMessageBox.confirm(
      `确认购买商品「${props.product.goods_title}」？\n价格：¥${props.product.goods_price.toFixed(2)}`,
      '确认购买',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }
    )

    // TODO: 调用购买API创建订单
    // const order = await createOrder({
    //   goods_id: props.product.goods_id,
    //   amount: props.product.goods_price
    // })

    ElMessage.success('购买成功！')

    // 跳转到订单页面（如果有）
    // router.push(`/orders/${order.order_id}`)

  } catch (error) {
    // 用户取消购买或发生错误
    if (error !== 'cancel') {
      ElMessage.error('购买失败，请重试')
    }
  }
}

/**
 * 处理更多操作
 */
const handleMoreAction = (command: string) => {
  switch (command) {
    case 'share':
      handleShare()
      break
    case 'report':
      handleReport()
      break
  }
}

/**
 * 分享商品
 */
const handleShare = () => {
  // 方案1：复制链接到剪贴板
  const url = window.location.href

  // 使用 Clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url)
      .then(() => {
        ElMessage.success('链接已复制到剪贴板')
      })
      .catch(() => {
        ElMessage.error('复制失败，请手动复制')
      })
  } else {
    // 降级方案：使用传统方法
    const textArea = document.createElement('textarea')
    textArea.value = url
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      ElMessage.success('链接已复制到剪贴板')
    } catch (err) {
      ElMessage.error('复制失败，请手动复制')
    }
    document.body.removeChild(textArea)
  }

  // 方案2：使用原生分享API（移动端）
  // if (navigator.share) {
  //   navigator.share({
  //     title: props.product.goods_title,
  //     text: props.product.goods_desc,
  //     url: window.location.href
  //   })
  // }
}

/**
 * 举报商品
 */
const handleReport = () => {
  // 检查登录状态
  if (!authStore.isAuthenticated) {
    ElMessage.warning('请先登录')
    return
  }

  ElMessageBox.prompt('请输入举报原因', '举报商品', {
    confirmButtonText: '提交',
    cancelButtonText: '取消',
    inputPattern: /.{5,}/,
    inputErrorMessage: '请输入至少5个字符的举报原因',
    inputType: 'textarea',
    inputPlaceholder: '请详细描述举报原因，帮助我们更好地处理...'
  })
    .then(({ value }) => {
      // TODO: 调用举报API
      // await reportProduct({
      //   goods_id: props.product.goods_id,
      //   reason: value
      // })

      ElMessage.success('举报已提交，我们会尽快处理')
    })
    .catch(() => {
      // 用户取消
    })
}
</script>

<style scoped lang="scss">
.product-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  // 按钮样式
  :deep(.el-button) {
    flex: 1;
    height: 48px;
    font-size: 16px;
    font-weight: 500;

    // 更多操作按钮（圆形）不参与flex
    &.is-circle {
      flex: 0;
      width: 48px;
    }

    // 禁用状态
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  // 手机端适配
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 16px;

    :deep(.el-button) {
      // 每行两个按钮
      flex: 1 1 calc(50% - 6px);
      height: 44px;
      font-size: 15px;

      // 圆形按钮单独一行
      &.is-circle {
        flex: 1 1 100%;
        width: 100%;
        border-radius: 22px;
      }
    }
  }
}
</style>

