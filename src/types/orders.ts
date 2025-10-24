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

