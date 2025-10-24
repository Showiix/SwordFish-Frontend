// 通用类型定义

/** API响应基础类型 */
export interface ApiResponse<T = any> {
  code: number
  msg: string
  data: T
}

/** 分页参数 */
export interface PaginationParams {
  page?: number
  page_size?: number
}

/** 分页响应数据 */
export interface PaginationData<T = any> {
  list: T[]
  total: number
  page: number
  page_size: number
}

/** 选项类型 */
export interface Option {
  label: string
  value: string | number
}

