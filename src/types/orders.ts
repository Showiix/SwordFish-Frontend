// 订单相关类型

/** 订单信息 */
export interface Order {
  order_id: number
  goods_info: {
    goods_id: number
    goods_title: string
    goods_price: number
    goods_images?: string[]
  }
  buyer_info: {
    user_id: number
    student_id: string
    real_name?: string
    phone?: string
  }
  seller_info: {
    user_id: number
    student_id: string
    real_name?: string
    phone?: string
  }
  order_price: number
  order_status: number
  buyer_note?: string
  create_time: string
  pay_time?: string
  complete_time?: string
}

/** 创建订单表单 */
export interface CreateOrderForm {
  goods_id: number
  buyer_note?: string
}

/** 支付表单 */
export interface PayOrderForm {
  order_id: number
  pay_type: number
}

/** 订单状态枚举 */
export enum OrderStatus {
  PENDING = 0,    // 待支付
  COMPLETED = 1,  // 已完成
  CANCELLED = 2   // 已取消
}

/** 订单状态映射（已废弃，请使用 getOrderStatusMap 函数） */
export const ORDER_STATUS_MAP: Record<number, string> = {
  [OrderStatus.PENDING]: '待支付',
  [OrderStatus.COMPLETED]: '已完成',
  [OrderStatus.CANCELLED]: '已取消'
}

/**
 * 获取国际化的订单状态映射
 * @param t - i18n 翻译函数
 */
export const getOrderStatusMap = (t: (key: string) => string): Record<number, string> => ({
  [OrderStatus.PENDING]: t('orderList.status.pending'),
  [OrderStatus.COMPLETED]: t('orderList.status.completed'),
  [OrderStatus.CANCELLED]: t('orderList.status.cancelled')
})

/** 订单状态标签类型映射 */
export const ORDER_STATUS_TAG_TYPE: Record<number, 'warning' | 'success' | 'info'> = {
  [OrderStatus.PENDING]: 'warning',
  [OrderStatus.COMPLETED]: 'success',
  [OrderStatus.CANCELLED]: 'info'
}

