// 商品API服务
import { request } from '@/utils/request'
import type { Product, ProductFilters } from '@/types/products'

// API响应类型
interface ApiResponse<T> {
  code: number
  msg: string
  data: T
}

interface ProductListResponse {
  items: Product[]
  pagination: {
    current_page: number
    page_size: number
    total: number
    total_pages: number
  }
}

/**
 * 获取商品列表
 */
export function getProductList(params: ProductFilters) {
  return request.get<ApiResponse<ProductListResponse>>('/api/goods/list', { params })
}

/**
 * 获取商品详情
 */
export function getProductDetail(id: number) {
  return request.get<ApiResponse<Product>>(`/api/goods/${id}`)
}

/**
 * 发布商品
 */
export function publishProduct(data: any) {
  return request.post<ApiResponse<Product>>('/api/goods/publish', data)
}

/**
 * 更新商品
 */
export function updateProduct(id: number, data: any) {
  return request.put<ApiResponse<Product>>(`/api/goods/${id}`, data)
}

/**
 * 删除商品
 */
export function deleteProduct(id: number) {
  return request.delete<ApiResponse<any>>(`/api/goods/${id}`)
}

/**
 * 搜索商品
 */
export function searchProducts(keyword: string, params?: ProductFilters) {
  return request.get<ApiResponse<ProductListResponse>>('/api/goods/search', {
    params: {
      keyword,
      ...params
    }
  })
}
