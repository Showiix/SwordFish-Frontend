// 订单状态管理
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Order } from '@/types/orders'
import { PAGE_SIZE, DEFAULT_PAGE } from '@/utils/constants'
// 临时导入 Mock 数据（后端开发完成后可删除）
import { getMockOrderList, getMockOrderById, mockCreateOrder, mockCancelOrder } from '@/mock/orders'

// 开发模式标志：true = 使用 Mock 数据，false = 使用真实 API
const USE_MOCK = true

export const useOrdersStore = defineStore('orders', () => {
  // 状态
  const orders = ref<Order[]>([])
  const currentOrder = ref<Order | null>(null)
  const loading = ref(false)
  const pagination = ref({
    current_page: DEFAULT_PAGE,
    page_size: PAGE_SIZE,
    total: 0,
    total_pages: 0
  })

  // 订单状态筛选：-1 表示全部
  const statusFilter = ref<number>(-1)

  // 计算属性
  const hasOrders = computed(() => orders.value.length > 0)
  const hasMore = computed(() => pagination.value.current_page < pagination.value.total_pages)

  /**
   * 获取订单列表
   */
  const fetchOrders = async (page = DEFAULT_PAGE, status?: number) => {
    try {
      loading.value = true

      // 使用 Mock 数据
      if (USE_MOCK) {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 600))

        const filterStatus = status !== undefined ? status : statusFilter.value
        const mockData = getMockOrderList(page, pagination.value.page_size, filterStatus)

        orders.value = mockData.items
        pagination.value = mockData.pagination

        return { code: 200, msg: 'success', data: mockData }
      }

      // TODO: 使用真实 API
      // const response = await getOrderList({ page, page_size: pagination.value.page_size, status })
      // ...

      return { code: 200, msg: 'success', data: { items: [], pagination: pagination.value } }
    } catch (error) {
      console.error('获取订单列表失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  /**
   * 获取订单详情
   */
  const fetchOrderDetail = async (orderId: number) => {
    try {
      loading.value = true

      // 使用 Mock 数据
      if (USE_MOCK) {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 500))

        const mockOrder = getMockOrderById(orderId)

        if (mockOrder) {
          currentOrder.value = mockOrder
          return { code: 200, msg: 'success', data: mockOrder }
        } else {
          throw new Error('订单不存在')
        }
      }

      // TODO: 使用真实 API
      // const response = await getOrderDetail(orderId)
      // ...

      return { code: 404, msg: '订单不存在', data: null }
    } catch (error) {
      console.error('获取订单详情失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  /**
   * 更新状态筛选
   */
  const updateStatusFilter = async (status: number) => {
    statusFilter.value = status
    await fetchOrders(DEFAULT_PAGE, status)
  }

  /**
   * 创建订单
   */
  const createOrder = async (goodsId: number, buyerNote?: string) => {
    try {
      loading.value = true

      // 使用 Mock 数据
      if (USE_MOCK) {
        const result = await mockCreateOrder(goodsId, buyerNote)
        if (result.success && result.data) {
          // 创建成功后，可以选择更新本地订单列表
          orders.value.unshift(result.data)
          return { code: 200, msg: result.message || 'success', data: result.data }
        }
        throw new Error(result.message || '创建订单失败')
      }

      // TODO: 使用真实 API
      // const response = await createOrderApi({ goods_id: goodsId, buyer_note: buyerNote })
      // ...

      return { code: 500, msg: '创建订单失败', data: null }
    } catch (error: any) {
      console.error('创建订单失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  /**
   * 取消订单
   */
  const cancelOrder = async (orderId: number) => {
    try {
      loading.value = true

      // 使用 Mock 数据
      if (USE_MOCK) {
        const result = await mockCancelOrder(orderId)
        if (result.success) {
          // 更新本地订单状态
          const order = orders.value.find(o => o.order_id === orderId)
          if (order) {
            order.order_status = 2 // 已取消
          }
          if (currentOrder.value?.order_id === orderId) {
            currentOrder.value.order_status = 2
          }
          return { code: 200, msg: result.message || 'success' }
        }
        throw new Error(result.message || '取消订单失败')
      }

      // TODO: 使用真实 API
      // const response = await cancelOrderApi(orderId)
      // ...

      return { code: 500, msg: '取消订单失败' }
    } catch (error: any) {
      console.error('取消订单失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  /**
   * 清空当前订单详情
   */
  const clearCurrentOrder = () => {
    currentOrder.value = null
  }

  /**
   * 清空订单列表
   */
  const clearOrders = () => {
    orders.value = []
    pagination.value = {
      current_page: DEFAULT_PAGE,
      page_size: PAGE_SIZE,
      total: 0,
      total_pages: 0
    }
  }

  return {
    // 状态
    orders: computed(() => orders.value),
    currentOrder: computed(() => currentOrder.value),
    loading: computed(() => loading.value),
    pagination: computed(() => pagination.value),
    statusFilter: computed(() => statusFilter.value),

    // 计算属性
    hasOrders,
    hasMore,

    // 方法
    fetchOrders,
    fetchOrderDetail,
    updateStatusFilter,
    createOrder,
    cancelOrder,
    clearCurrentOrder,
    clearOrders
  }
})
