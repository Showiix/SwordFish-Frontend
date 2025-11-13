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
  views?: number  // 浏览次数
  publisher?: {
    user_id: number
    student_id: string
    real_name?: string
    credit_score: number
    avatar_url?: string
    active_products_count?: number  // 在售商品数
    sold_count?: number              // 已售商品数
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

 
/** 商品成色枚举 */
export enum ProductCondition {
  BRAND_NEW = 'brand_new',      // 全新
  LIKE_NEW = 'like_new',         // 99新
  LIGHTLY_USED = 'lightly_used', // 95新
  WELL_USED = 'well_used',       // 9成新
  HEAVILY_USED = 'heavily_used'  // 8成新
}

/** 成色映射 用于映射（已废弃，请使用 getConditionMap 函数） */
export const CONDITION_MAP: Record<string, string> = {
  [ProductCondition.BRAND_NEW]: '全新',
  [ProductCondition.LIKE_NEW]: '99新',
  [ProductCondition.LIGHTLY_USED]: '95新',
  [ProductCondition.WELL_USED]: '9成新',
  [ProductCondition.HEAVILY_USED]: '8成新'
}

/**
 * 获取国际化的商品成色映射
 * @param t - i18n 翻译函数
 */
export const getConditionMap = (t: (key: string) => string): Record<string, string> => ({
  [ProductCondition.BRAND_NEW]: t('productCondition.brandNew'),
  [ProductCondition.LIKE_NEW]: t('productCondition.likeNew'),
  [ProductCondition.LIGHTLY_USED]: t('productCondition.lightlyUsed'),
  [ProductCondition.WELL_USED]: t('productCondition.wellUsed'),
  [ProductCondition.HEAVILY_USED]: t('productCondition.heavilyUsed')
})

/** 商品成色标签类型映射（用于 el-tag 的 type 属性） */
export const CONDITION_TAG_TYPE: Record<string, 'success' | 'info' | 'warning' | 'danger'> = {
  [ProductCondition.BRAND_NEW]: 'success',
  [ProductCondition.LIKE_NEW]: 'success',
  [ProductCondition.LIGHTLY_USED]: 'info',
  [ProductCondition.WELL_USED]: 'warning',
  [ProductCondition.HEAVILY_USED]: 'danger'
}

/** 商品状态枚举 */
export enum ProductStatus {
  AVAILABLE = 0,    // 在售
  SOLD = 1,         // 已售出
  OFF_SHELF = 2,    // 已下架
  DELETED = 3       // 已删除
}


/** 商品状态映射 */
export const STATUS_MAP: Record<number, string> = {
  [ProductStatus.AVAILABLE]: '在售',
  [ProductStatus.SOLD]: '已售出',
  [ProductStatus.OFF_SHELF]: '已下架',
  [ProductStatus.DELETED]: '已删除'
}


/** 商品分类映射（已废弃，请使用 getCategoryMap 函数） */
export const CATEGORY_MAP: { [key: number]: string } = {
  1: '电子产品',
  2: '图书教材',
  3: '生活用品',
  4: '服装鞋包',
  5: '运动户外',
  6: '美妆护肤',
  7: '其他'
}

/**
 * 获取国际化的商品分类映射
 * @param t - i18n 翻译函数
 */
export const getCategoryMap = (t: (key: string) => string): { [key: number]: string } => ({
  1: t('productCategories.electronics'),
  2: t('productCategories.books'),
  3: t('productCategories.furniture'),
  4: t('productCategories.fashion'),
  5: t('productCategories.sports'),
  6: t('productCategories.beauty'),
  7: t('productCategories.other')
})

