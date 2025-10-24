// 商品相关类型

/** 商品信息 */
export interface Product {
  goods_id: number
  goods_title: string
  goods_type: number
  goods_price: number
  goods_desc?: string
  goods_images?: string[]
  goods_status: number
  condition_level?: string
  create_time: string
  update_time?: string
  publisher?: {
    user_id: number
    student_id: string
    real_name?: string
    credit_score: number
    avatar_url?: string
  }
}

/** 商品筛选参数 */
export interface ProductFilters {
  keyword?: string
  goods_type?: number
  min_price?: number
  max_price?: number
  condition?: string
  sort_by?: string
  sort_order?: 'ASC' | 'DESC'
  page?: number
  page_size?: number
}

/** 发布商品表单 */
export interface PublishProductForm {
  goods_title: string
  goods_type: number
  goods_price: number
  goods_desc?: string
  goods_images?: string[]
  condition_level?: string
}

/** 商品分类 */
export interface ProductCategory {
  id: number
  name: string
  label: string
  icon: string
}

