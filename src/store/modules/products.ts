// 商品状态管理
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getProductList, getProductDetail } from '@/services/products'
import type { Product, ProductFilters } from '@/types/products'
import { PAGE_SIZE, DEFAULT_PAGE } from '@/utils/constants'
// 临时导入 Mock 数据（后端开发完成后可删除）
import { getMockProductById, getMockProductList, mockPublishProduct } from '@/mock/products'
import { publishProduct } from '@/services/products'

// 开发模式标志：true = 使用 Mock 数据，false = 使用真实 API
const USE_MOCK = true

export const useProductsStore = defineStore('products', () => {
  // 状态
  const products = ref<Product[]>([])
  const currentProduct = ref<Product | null>(null)
  const loading = ref(false)
  const pagination = ref({
    current_page: DEFAULT_PAGE,
    page_size: PAGE_SIZE,
    total: 0,
    total_pages: 0
  })

  // 筛选条件
  const filters = ref<ProductFilters>({
    keyword: '',
    goods_type: undefined,
    min_price: undefined,
    max_price: undefined,
    condition: undefined,
    sort_by: 'create_time',
    sort_order: 'DESC',
    page: DEFAULT_PAGE,
    page_size: PAGE_SIZE
  })

  // 计算属性
  const hasProducts = computed(() => products.value.length > 0)
  const hasMore = computed(() => pagination.value.current_page < pagination.value.total_pages)

  /**
   * 获取商品列表
   */
  const fetchProducts = async (page = DEFAULT_PAGE, append = false) => {
    try {
      loading.value = true

      // 使用 Mock 数据
      if (USE_MOCK) {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const mockData = getMockProductList(page, pagination.value.page_size)
        
        if (append) {
          products.value.push(...mockData.items)
        } else {
          products.value = mockData.items
        }
        
        pagination.value = mockData.pagination
        
        return { code: 200, msg: 'success', data: mockData }
      }

      // 使用真实 API
      const params: ProductFilters = {
        ...filters.value,
        page,
        page_size: pagination.value.page_size
      }

      const response = await getProductList(params)

      if (response.code === 200) {
        const { items, pagination: paginationData } = response.data

        if (append) {
          // 加载更多,追加到现有列表
          products.value.push(...items)
        } else {
          // 重新加载,替换列表
          products.value = items
        }

        pagination.value = paginationData
      }

      return response
    } catch (error) {
      console.error('获取商品列表失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  /**
   * 获取商品详情
   */
  const fetchProductDetail = async (id: number) => {
    try {
      loading.value = true
      
      // 使用 Mock 数据
      if (USE_MOCK) {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 800))
        
        const mockProduct = getMockProductById(id)
        
        if (mockProduct) {
          currentProduct.value = mockProduct
          return { code: 200, msg: 'success', data: mockProduct }
        } else {
          throw new Error('商品不存在')
        }
      }

      // 使用真实 API
      const response = await getProductDetail(id)

      if (response.code === 200) {
        currentProduct.value = response.data
      }

      return response
    } catch (error) {
      console.error('获取商品详情失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  /**
   * 搜索商品
   */
  const searchProducts = async (keyword: string) => {
    filters.value.keyword = keyword
    filters.value.page = DEFAULT_PAGE
    await fetchProducts(DEFAULT_PAGE, false)
  }

  /**
   * 更新筛选条件
   */
  const updateFilters = async (newFilters: Partial<ProductFilters>) => {
    filters.value = {
      ...filters.value,
      ...newFilters,
      page: DEFAULT_PAGE
    }
    await fetchProducts(DEFAULT_PAGE, false)
  }

  /**
   * 重置筛选条件
   */
  const resetFilters = async () => {
    filters.value = {
      keyword: '',
      goods_type: undefined,
      min_price: undefined,
      max_price: undefined,
      condition: undefined,
      sort_by: 'create_time',
      sort_order: 'DESC',
      page: DEFAULT_PAGE,
      page_size: PAGE_SIZE
    }
    await fetchProducts(DEFAULT_PAGE, false)
  }

  /**
   * 加载更多商品
   */
  const loadMore = async () => {
    if (hasMore.value && !loading.value) {
      const nextPage = pagination.value.current_page + 1
      await fetchProducts(nextPage, true)
    }
  }

  /**
   * 清空当前商品详情
   */
  const clearCurrentProduct = () => {
    currentProduct.value = null
  }

  /**
   * 清空商品列表
   */
  const clearProducts = () => {
    products.value = []
    pagination.value = {
      current_page: DEFAULT_PAGE,
      page_size: PAGE_SIZE,
      total: 0,
      total_pages: 0
    }
  }

  /**
   * 发布商品
   */
  const publishNewProduct = async (formData: {
    goods_title: string
    goods_type: number
    goods_price: number
    condition_level?: string
    goods_images?: string[]
    goods_desc?: string
  }): Promise<{ code: number; msg: string; data: Product }> => {
    try {
      loading.value = true

      // 使用 Mock 数据
      if (USE_MOCK) {
        const result = await mockPublishProduct(formData)
        if (result.success && result.data) {
          // 发布成功后，可以选择更新本地商品列表
          // products.value.unshift(result.data)
          return { code: 200, msg: result.message || 'success', data: result.data }
        }
        throw new Error(result.message || '发布失败')
      }

      // 使用真实 API
      // publishProduct 返回 Promise<ApiResponse<Product>>
      const apiResponse = await publishProduct(formData)
      
      if (apiResponse.code === 200) {
        return apiResponse
      }
      throw new Error(apiResponse.msg || '发布失败')
    } catch (error: any) {
      console.error('发布商品失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    // 状态
    products: computed(() => products.value),
    currentProduct: computed(() => currentProduct.value),
    loading: computed(() => loading.value),
    pagination: computed(() => pagination.value),
    filters,

    // 计算属性
    hasProducts,
    hasMore,

    // 方法
    fetchProducts,
    fetchProductDetail,
    searchProducts,
    updateFilters,
    resetFilters,
    loadMore,
    clearCurrentProduct,
    clearProducts,
    publishNewProduct
  }
})
