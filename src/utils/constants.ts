// 常量定义

// 商品分类
export const PRODUCT_CATEGORIES = [
  { id: 1, name: 'Electronics', label: '电子产品', icon: 'Laptop' },
  { id: 2, name: 'Books', label: '图书文具', icon: 'Reading' },
  { id: 3, name: 'Fashion', label: '服饰鞋包', icon: 'Shirt' },
  { id: 4, name: 'Furniture', label: '家具家居', icon: 'Toilet' },
  { id: 5, name: 'Music', label: '音乐器材', icon: 'Headset' },
  { id: 6, name: 'Sports', label: '运动户外', icon: 'Basketball' },
  { id: 7, name: 'Art', label: '艺术收藏', icon: 'Picture' },
  { id: 8, name: 'Kitchen', label: '厨房用品', icon: 'Coffee' }
]

// 商品成色
export const PRODUCT_CONDITION = {
  EXCELLENT: { value: 'excellent', label: '极好', color: '#67c23a' },
  VERY_GOOD: { value: 'very_good', label: '很好', color: '#409eff' },
  GOOD: { value: 'good', label: '良好', color: '#e6a23c' },
  FAIR: { value: 'fair', label: '一般', color: '#f56c6c' },
  POOR: { value: 'poor', label: '较差', color: '#909399' }
}

// 商品状态
export const GOODS_STATUS = {
  PENDING: 0,    // 待审核
  ACTIVE: 1,     // 已上架
  SOLD: 2,       // 已卖出
  OFFLINE: 3     // 已下架
}

// 订单状态
export const ORDER_STATUS = {
  PENDING: 0,    // 待付款
  PAID: 1,       // 已付款
  COMPLETED: 2,  // 已完成
  CANCELLED: 3   // 已取消
}

// 认证状态
export const AUTH_STATUS = {
  PENDING: 0,    // 待审核
  APPROVED: 1,   // 已通过
  REJECTED: 2    // 已拒绝
}

// Token存储key
export const TOKEN_KEY = 'swordfish_token'
export const USER_KEY = 'swordfish_user'
export const REFRESH_TOKEN_KEY = 'swordfish_refresh_token'

// 分页配置
export const PAGE_SIZE = 20
export const DEFAULT_PAGE = 1

