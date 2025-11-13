// Mock 订单数据
import type { Order } from '@/types/orders'

/**
 * Mock 订单列表数据
 */
export const mockOrders: Order[] = [
  {
    order_id: 1001,
    goods_info: {
      goods_id: 1,
      goods_title: 'iPhone 15 Pro Max 256GB 深空黑',
      goods_price: 6999,
      goods_images: [
        'https://picsum.photos/800/800?random=1',
        'https://picsum.photos/800/800?random=2'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1001,
      student_id: '2023001',
      real_name: '李四',
      phone: '139****1234'
    },
    order_price: 6999,
    order_status: 1, // 已完成
    buyer_note: '希望今天能当面交易，下午3点图书馆见',
    create_time: '2025-11-08T10:30:00Z',
    pay_time: '2025-11-08T10:35:00Z',
    complete_time: '2025-11-08T15:30:00Z'
  },
  {
    order_id: 1002,
    goods_info: {
      goods_id: 2,
      goods_title: 'MacBook Pro 14寸 M3 芯片 16GB+512GB',
      goods_price: 12800,
      goods_images: [
        'https://picsum.photos/800/800?random=5',
        'https://picsum.photos/800/800?random=6'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1002,
      student_id: '2023002',
      real_name: '王五',
      phone: '137****9876'
    },
    order_price: 12800,
    order_status: 0, // 待支付
    buyer_note: '明天下午方便交易吗？',
    create_time: '2025-11-12T09:20:00Z'
  },
  {
    order_id: 1003,
    goods_info: {
      goods_id: 5,
      goods_title: '机械键盘 Cherry MX 青轴 RGB背光',
      goods_price: 380,
      goods_images: [
        'https://picsum.photos/800/800?random=15',
        'https://picsum.photos/800/800?random=16'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1003,
      student_id: '2023003',
      real_name: '赵六',
      phone: '136****5432'
    },
    order_price: 380,
    order_status: 1, // 已完成
    buyer_note: '键盘手感怎么样？有使用痕迹吗？',
    create_time: '2025-11-05T14:15:00Z',
    pay_time: '2025-11-05T14:20:00Z',
    complete_time: '2025-11-06T10:00:00Z'
  },
  {
    order_id: 1004,
    goods_info: {
      goods_id: 8,
      goods_title: 'Nike Air Max 270 运动鞋 US9码',
      goods_price: 450,
      goods_images: [
        'https://picsum.photos/800/800?random=25',
        'https://picsum.photos/800/800?random=26'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1004,
      student_id: '2023004',
      real_name: '孙七',
      phone: '135****7890'
    },
    order_price: 450,
    order_status: 2, // 已取消
    buyer_note: '尺码不合适，申请取消',
    create_time: '2025-11-03T16:40:00Z'
  },
  {
    order_id: 1005,
    goods_info: {
      goods_id: 12,
      goods_title: '索尼 WH-1000XM5 降噪耳机',
      goods_price: 1680,
      goods_images: [
        'https://picsum.photos/800/800?random=35',
        'https://picsum.photos/800/800?random=36'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1005,
      student_id: '2023005',
      real_name: '周八',
      phone: '134****2468'
    },
    order_price: 1680,
    order_status: 1, // 已完成
    buyer_note: '降噪效果如何？电池续航怎么样？',
    create_time: '2025-10-30T11:25:00Z',
    pay_time: '2025-10-30T11:30:00Z',
    complete_time: '2025-10-31T14:20:00Z'
  },
  {
    order_id: 1006,
    goods_info: {
      goods_id: 15,
      goods_title: 'iPad Air 5 256GB WiFi版 紫色',
      goods_price: 3899,
      goods_images: [
        'https://picsum.photos/800/800?random=45',
        'https://picsum.photos/800/800?random=46'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1006,
      student_id: '2023006',
      real_name: '吴九',
      phone: '133****1357'
    },
    order_price: 3899,
    order_status: 0, // 待支付
    buyer_note: '配件齐全吗？有Apple Pencil吗？',
    create_time: '2025-11-11T13:50:00Z'
  },
  {
    order_id: 1007,
    goods_info: {
      goods_id: 18,
      goods_title: '《算法导论》第三版 中文版',
      goods_price: 65,
      goods_images: [
        'https://picsum.photos/800/800?random=55',
        'https://picsum.photos/800/800?random=56'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1007,
      student_id: '2023007',
      real_name: '郑十',
      phone: '132****2580'
    },
    order_price: 65,
    order_status: 1, // 已完成
    buyer_note: '书的成色如何？有笔记或划痕吗？',
    create_time: '2025-10-25T09:15:00Z',
    pay_time: '2025-10-25T09:18:00Z',
    complete_time: '2025-10-25T16:30:00Z'
  },
  {
    order_id: 1008,
    goods_info: {
      goods_id: 20,
      goods_title: '小米空气净化器 Pro H 白色',
      goods_price: 880,
      goods_images: [
        'https://picsum.photos/800/800?random=65',
        'https://picsum.photos/800/800?random=66'
      ]
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '张三',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1008,
      student_id: '2023008',
      real_name: '钱十一',
      phone: '131****3691'
    },
    order_price: 880,
    order_status: 1, // 已完成
    buyer_note: '滤芯还能用多久？',
    create_time: '2025-10-20T10:40:00Z',
    pay_time: '2025-10-20T10:45:00Z',
    complete_time: '2025-10-21T15:00:00Z'
  }
]

/**
 * 订单状态枚举
 */
export enum OrderStatus {
  PENDING = 0,    // 待支付
  COMPLETED = 1,  // 已完成
  CANCELLED = 2   // 已取消
}

/**
 * 订单状态映射
 */
export const ORDER_STATUS_MAP: Record<number, string> = {
  [OrderStatus.PENDING]: '待支付',
  [OrderStatus.COMPLETED]: '已完成',
  [OrderStatus.CANCELLED]: '已取消'
}

/**
 * 订单状态标签类型映射
 */
export const ORDER_STATUS_TAG_TYPE: Record<number, 'warning' | 'success' | 'info'> = {
  [OrderStatus.PENDING]: 'warning',
  [OrderStatus.COMPLETED]: 'success',
  [OrderStatus.CANCELLED]: 'info'
}

/**
 * 获取 Mock 订单列表
 */
export const getMockOrderList = (
  page = 1,
  pageSize = 10,
  statusFilter?: number
): {
  items: Order[]
  pagination: {
    current_page: number
    page_size: number
    total: number
    total_pages: number
  }
} => {
  // 根据状态筛选
  let filteredOrders = mockOrders
  if (statusFilter !== undefined && statusFilter !== -1) {
    filteredOrders = mockOrders.filter(order => order.order_status === statusFilter)
  }

  // 分页
  const total = filteredOrders.length
  const totalPages = Math.ceil(total / pageSize)
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const items = filteredOrders.slice(start, end)

  return {
    items,
    pagination: {
      current_page: page,
      page_size: pageSize,
      total,
      total_pages: totalPages
    }
  }
}

/**
 * 根据 ID 获取 Mock 订单详情
 */
export const getMockOrderById = (orderId: number): Order | undefined => {
  return mockOrders.find(order => order.order_id === orderId)
}

/**
 * Mock 创建订单
 */
export const mockCreateOrder = async (goodsId: number, buyerNote?: string) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800))

  const newOrder: Order = {
    order_id: Date.now(),
    goods_info: {
      goods_id: goodsId,
      goods_title: 'Mock 商品标题',
      goods_price: 999,
      goods_images: ['https://picsum.photos/800/800?random=99']
    },
    buyer_info: {
      user_id: 2001,
      student_id: '2024001',
      real_name: '当前用户',
      phone: '138****5678'
    },
    seller_info: {
      user_id: 1001,
      student_id: '2023001',
      real_name: '卖家',
      phone: '139****1234'
    },
    order_price: 999,
    order_status: OrderStatus.PENDING,
    buyer_note: buyerNote,
    create_time: new Date().toISOString()
  }

  return {
    success: true,
    message: '订单创建成功',
    data: newOrder
  }
}

/**
 * Mock 取消订单
 */
export const mockCancelOrder = async (orderId: number) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  const order = mockOrders.find(o => o.order_id === orderId)
  if (order) {
    order.order_status = OrderStatus.CANCELLED
    return {
      success: true,
      message: '订单取消成功'
    }
  }

  return {
    success: false,
    message: '订单不存在'
  }
}
