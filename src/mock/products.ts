// Mock 商品数据
import type { Product } from '@/types/products'

/**
 * Mock 商品列表数据
 */
export const mockProducts: Product[] = [
  {
    goods_id: 1,
    goods_title: 'iPhone 15 Pro Max 256GB 深空黑',
    goods_type: 1,
    goods_price: 6999,
    goods_desc: `全新未拆封的iPhone 15 Pro Max，256GB存储空间，深空黑色。

购买原因：公司年会中奖，但自己已有手机，现在出售。

商品详情：
- 型号：iPhone 15 Pro Max
- 容量：256GB
- 颜色：深空黑
- 配件：原装充电线、说明书、卡针（不含充电头）
- 保修：全国联保一年

承诺：
1. 全新未拆封，支持验机
2. 支持当面交易，校内交易优先
3. 价格可小刀，诚心要的联系
4. 非诚勿扰，谢谢！

交易方式：
- 校内当面交易（推荐）
- 快递交易（顺丰到付）

联系方式：
可通过平台聊天联系，工作日下午和周末有空。`,
    goods_images: [
      'https://picsum.photos/800/800?random=1',
      'https://picsum.photos/800/800?random=2',
      'https://picsum.photos/800/800?random=3',
      'https://picsum.photos/800/800?random=4'
    ],
    goods_status: 0,
    condition_level: 'brand_new',
    create_time: '2025-11-01T10:30:00Z',
    update_time: '2025-11-05T14:20:00Z',
    views: 156,
    publisher: {
      user_id: 1001,
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 3,
      sold_count: 12
    }
  },
  {
    goods_id: 2,
    goods_title: 'MacBook Pro 14寸 M3 芯片 16GB+512GB',
    goods_type: 1,
    goods_price: 12800,
    goods_desc: `自用 MacBook Pro 14寸，M3 芯片，因升级新款出售。

配置信息：
- 处理器：Apple M3 芯片
- 内存：16GB 统一内存
- 存储：512GB SSD
- 屏幕：14.2英寸 Liquid Retina XDR 显示屏
- 颜色：深空灰色

使用情况：
- 购买时间：2024年3月
- 使用场景：主要用于编程和视频剪辑
- 外观：9.5成新，屏幕完美无划痕
- 电池健康度：96%
- 原装充电器和数据线齐全

出售原因：
导师给配了新的工作站，这台用不上了

价格说明：
官网售价15999，现在12800出，价格坚挺不刀

附赠：
- 原装包装盒
- 所有配件
- 键盘贴膜
- 电脑包

交易方式：
校内当面交易，可以见面验机`,
    goods_images: [
      'https://picsum.photos/800/800?random=5',
      'https://picsum.photos/800/800?random=6',
      'https://picsum.photos/800/800?random=7'
    ],
    goods_status: 0,
    condition_level: 'like_new',
    create_time: '2025-10-28T15:45:00Z',
    views: 234,
    publisher: {
      user_id: 1002,
      student_id: '2023105',
      real_name: '李四',
      credit_score: 95,
      avatar_url: 'https://i.pravatar.cc/150?img=2',
      active_products_count: 2,
      sold_count: 8
    }
  },
  {
    goods_id: 3,
    goods_title: '高等数学教材（上下册）+ 习题集',
    goods_type: 2,
    goods_price: 35,
    goods_desc: `大一上学期用的高数教材，现在用不到了便宜出。

包含：
- 高等数学（上册）- 第七版
- 高等数学（下册）- 第七版  
- 高等数学习题全解指南（上册）
- 高等数学习题全解指南（下册）

书本情况：
- 上册有少量笔记和重点标注
- 下册几乎全新，很少翻动
- 习题集有答案标注
- 无缺页、无破损

适合人群：
- 大一新生
- 准备考研的同学
- 需要补习高数的同学

原价信息：
- 教材上册：35元
- 教材下册：32元
- 习题集上册：28元
- 习题集下册：28元
- 总计：123元

现价：35元打包带走！

交易方式：
校内自取，教学楼或宿舍都可以`,
    goods_images: [
      'https://picsum.photos/800/800?random=8',
      'https://picsum.photos/800/800?random=9'
    ],
    goods_status: 0,
    condition_level: 'lightly_used',
    create_time: '2025-11-03T09:15:00Z',
    views: 89,
    publisher: {
      user_id: 1003,
      student_id: '2024089',
      real_name: '王五',
      credit_score: 92,
      avatar_url: 'https://i.pravatar.cc/150?img=3',
      active_products_count: 5,
      sold_count: 3
    }
  },
  {
    goods_id: 4,
    goods_title: 'AirPods Pro 2代 主动降噪无线耳机',
    goods_type: 1,
    goods_price: 1299,
    goods_desc: `自用 AirPods Pro 第二代，音质完美，降噪效果一流。

商品信息：
- 型号：AirPods Pro（第二代）
- 颜色：白色
- 功能：主动降噪、通透模式、空间音频
- 连接：支持查找功能

使用情况：
- 购买时间：2024年6月
- 使用时长：5个月
- 成色：8.5成新
- 耳机功能正常，降噪完美
- 电池续航良好，充满电可用4-5小时

配件齐全：
- AirPods Pro 耳机
- 充电盒（支持无线充电）
- 三对耳塞（S/M/L）
- 原装数据线
- 原装包装盒

出售原因：
换了索尼降噪耳机，这个闲置了

价格说明：
原价1899，现在1299，已经很便宜了
不议价，诚心要的直接联系

注意事项：
- 可当面验货
- 支持苹果官网验机
- 校内交易优先`,
    goods_images: [
      'https://picsum.photos/800/800?random=10',
      'https://picsum.photos/800/800?random=11',
      'https://picsum.photos/800/800?random=12'
    ],
    goods_status: 0,
    condition_level: 'well_used',
    create_time: '2025-11-04T16:20:00Z',
    views: 178,
    publisher: {
      user_id: 1004,
      student_id: '2023045',
      real_name: '赵六',
      credit_score: 100,
      avatar_url: 'https://i.pravatar.cc/150?img=4',
      active_products_count: 1,
      sold_count: 15
    }
  },
  {
    goods_id: 5,
    goods_title: 'Nike Air Max 270 运动鞋 男款 43码',
    goods_type: 5,
    goods_price: 380,
    goods_desc: `Nike Air Max 270 运动鞋，买大了穿不了，8成新便宜转让。

商品详情：
- 品牌：Nike（耐克）
- 型号：Air Max 270
- 颜色：黑白配色
- 尺码：US 9.5 / EU 43 / CN 270mm
- 性别：男款

鞋子情况：
- 购买渠道：Nike 官方旗舰店
- 购买时间：2024年8月
- 穿着次数：10次左右
- 外观：8成新，鞋面干净
- 鞋底：磨损轻微
- 气垫：完好无损

适合人群：
- 脚长 270mm 的朋友
- 喜欢运动休闲风格
- 追求舒适缓震

包装附件：
- 原装鞋盒
- 备用鞋带
- 防尘袋

出售原因：
买的时候没试穿，收到发现大了半码，穿着不跟脚

原价599，现在380包邮（仅限校内）

交易方式：
- 校内见面交易
- 可先看鞋再决定
- 不满意不勉强`,
    goods_images: [
      'https://picsum.photos/800/800?random=13',
      'https://picsum.photos/800/800?random=14',
      'https://picsum.photos/800/800?random=15'
    ],
    goods_status: 0,
    condition_level: 'well_used',
    create_time: '2025-11-02T11:30:00Z',
    views: 67,
    publisher: {
      user_id: 1005,
      student_id: '2024112',
      real_name: '孙七',
      credit_score: 88,
      avatar_url: 'https://i.pravatar.cc/150?img=5',
      active_products_count: 2,
      sold_count: 5
    }
  }
]

/**
 * 根据 ID 获取 Mock 商品数据
 */
export function getMockProductById(id: number): Product | undefined {
  return mockProducts.find(p => p.goods_id === id)
}

/**
 * 获取 Mock 商品列表（支持筛选和排序）
 */
export function getMockProductList(
  page = 1,
  pageSize = 10,
  filters?: {
    keyword?: string
    goods_type?: number
    min_price?: number
    max_price?: number
    condition?: string
    sort_by?: string
    sort_order?: 'ASC' | 'DESC'
  }
) {
  // 1. 筛选数据
  let filteredProducts = [...mockProducts]

  // 关键词搜索（标题和描述）
  if (filters?.keyword) {
    const keyword = filters.keyword.toLowerCase()
    filteredProducts = filteredProducts.filter(
      p =>
        p.goods_title.toLowerCase().includes(keyword) ||
        p.goods_desc?.toLowerCase().includes(keyword)
    )
  }

  // 商品分类筛选
  if (filters?.goods_type !== undefined) {
    filteredProducts = filteredProducts.filter(p => p.goods_type === filters.goods_type)
  }

  // 价格范围筛选
  if (filters?.min_price !== undefined) {
    filteredProducts = filteredProducts.filter(p => p.goods_price >= filters.min_price!)
  }
  if (filters?.max_price !== undefined) {
    filteredProducts = filteredProducts.filter(p => p.goods_price <= filters.max_price!)
  }

  // 商品成色筛选
  if (filters?.condition) {
    filteredProducts = filteredProducts.filter(p => p.condition_level === filters.condition)
  }

  // 2. 排序数据
  if (filters?.sort_by && filters?.sort_order) {
    const sortBy = filters.sort_by
    const sortOrder = filters.sort_order

    filteredProducts.sort((a, b) => {
      let aValue: any
      let bValue: any

      switch (sortBy) {
        case 'goods_price':
          aValue = a.goods_price
          bValue = b.goods_price
          break
        case 'create_time':
          aValue = new Date(a.create_time || 0).getTime()
          bValue = new Date(b.create_time || 0).getTime()
          break
        case 'views':
          aValue = a.views || 0
          bValue = b.views || 0
          break
        default:
          return 0
      }

      if (sortOrder === 'ASC') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0
      }
    })
  }

  // 3. 分页
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const items = filteredProducts.slice(start, end)

  return {
    items,
    pagination: {
      current_page: page,
      page_size: pageSize,
      total: filteredProducts.length,
      total_pages: Math.ceil(filteredProducts.length / pageSize)
    }
  }
}

/**
 * Mock 发布商品
 */
export async function mockPublishProduct(formData: {
  goods_title: string
  goods_type: number
  goods_price: number
  condition_level?: string
  goods_images?: string[]
  goods_desc?: string
}) {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1200))

  // 模拟验证失败（10%概率，用于测试）
  if (Math.random() < 0.1) {
    return {
      success: false,
      message: '发布失败：商品标题包含敏感词汇，请修改后重试'
    }
  }

  // 生成新商品ID（取当前最大ID+1）
  const maxId = Math.max(...mockProducts.map(p => p.goods_id), 0)
  const newProductId = maxId + 1

  // 创建新商品（模拟当前登录用户发布）
  const newProduct: Product = {
    goods_id: newProductId,
    goods_title: formData.goods_title,
    goods_type: formData.goods_type,
    goods_price: formData.goods_price,
    goods_desc: formData.goods_desc,
    goods_images: formData.goods_images || [],
    goods_status: 0, // 在售
    condition_level: formData.condition_level,
    create_time: new Date().toISOString(),
    update_time: new Date().toISOString(),
    views: 0,
    publisher: {
      user_id: 101, // 当前登录用户（与 mockUsers.ts 中的用户对应）
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 4,
      sold_count: 10
    }
  }

  // 添加到 mock 数据列表（添加到开头，最新发布的在前面）
  mockProducts.unshift(newProduct)

  return {
    success: true,
    data: newProduct,
    message: '发布成功'
  }
}

/**
 * 当前登录用户的商品列表（用于"我的商品"页面）
 */
export const mockMyProducts: Product[] = [
  {
    goods_id: 101,
    goods_title: 'iPad Air 5 256GB WIFI版 星光色',
    goods_type: 1,
    goods_price: 3999,
    goods_desc: '自用iPad Air 第五代，256GB存储，星光色。买了一年，基本就用来看视频和轻度办公，9成新。配件齐全，贴了钢化膜，送原装保护套。',
    goods_images: [
      'https://picsum.photos/800/800?random=101',
      'https://picsum.photos/800/800?random=102'
    ],
    goods_status: 0, // 在售
    condition_level: 'like_new',
    create_time: '2025-11-10T14:20:00Z',
    update_time: '2025-11-10T14:20:00Z',
    views: 45,
    publisher: {
      user_id: 101,
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 4,
      sold_count: 10
    }
  },
  {
    goods_id: 102,
    goods_title: '戴尔显示器 27寸 2K IPS屏',
    goods_type: 1,
    goods_price: 899,
    goods_desc: '戴尔27寸显示器，2K分辨率，IPS屏幕，Type-C接口。毕业出国用不上了，8成新，有轻微划痕但不影响使用。',
    goods_images: [
      'https://picsum.photos/800/800?random=103',
      'https://picsum.photos/800/800?random=104',
      'https://picsum.photos/800/800?random=105'
    ],
    goods_status: 1, // 已售出
    condition_level: 'well_used',
    create_time: '2025-11-05T10:30:00Z',
    update_time: '2025-11-08T16:45:00Z',
    views: 89,
    publisher: {
      user_id: 101,
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 4,
      sold_count: 10
    }
  },
  {
    goods_id: 103,
    goods_title: '机械键盘 Cherry轴 RGB背光',
    goods_type: 1,
    goods_price: 299,
    goods_desc: 'Cherry MX红轴机械键盘，RGB背光可调，87键无数字键盘版本。手感很好，适合打字和游戏。',
    goods_images: [
      'https://picsum.photos/800/800?random=106'
    ],
    goods_status: 0, // 在售
    condition_level: 'lightly_used',
    create_time: '2025-11-08T09:15:00Z',
    update_time: '2025-11-08T09:15:00Z',
    views: 23,
    publisher: {
      user_id: 101,
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 4,
      sold_count: 10
    }
  },
  {
    goods_id: 104,
    goods_title: '计算机网络 第七版 谢希仁',
    goods_type: 2,
    goods_price: 28,
    goods_desc: '计算机网络教材，谢希仁版本，上学期用的，有少量笔记标注。',
    goods_images: [
      'https://picsum.photos/800/800?random=107',
      'https://picsum.photos/800/800?random=108'
    ],
    goods_status: 2, // 已下架
    condition_level: 'lightly_used',
    create_time: '2025-11-03T11:00:00Z',
    update_time: '2025-11-06T15:20:00Z',
    views: 67,
    publisher: {
      user_id: 101,
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 4,
      sold_count: 10
    }
  },
  {
    goods_id: 105,
    goods_title: '罗技无线鼠标 MX Master 3S',
    goods_type: 1,
    goods_price: 499,
    goods_desc: '罗技旗舰办公鼠标，多设备切换，人体工学设计，自用半年，功能完好。',
    goods_images: [
      'https://picsum.photos/800/800?random=109',
      'https://picsum.photos/800/800?random=110'
    ],
    goods_status: 1, // 已售出
    condition_level: 'like_new',
    create_time: '2025-10-28T16:40:00Z',
    update_time: '2025-10-30T10:15:00Z',
    views: 112,
    publisher: {
      user_id: 101,
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 4,
      sold_count: 10
    }
  },
  {
    goods_id: 106,
    goods_title: '小米手环8 NFC版 黑色',
    goods_type: 1,
    goods_price: 189,
    goods_desc: '小米手环8代NFC版，支持公交卡和门禁卡模拟。买了3个月，几乎全新。',
    goods_images: [
      'https://picsum.photos/800/800?random=111'
    ],
    goods_status: 0, // 在售
    condition_level: 'like_new',
    create_time: '2025-11-09T13:25:00Z',
    update_time: '2025-11-09T13:25:00Z',
    views: 34,
    publisher: {
      user_id: 101,
      student_id: '2024001',
      real_name: '张三',
      credit_score: 98,
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      active_products_count: 4,
      sold_count: 10
    }
  }
]

/**
 * 获取当前用户的商品列表（支持状态筛选）
 */
export function getMockMyProductsList(
  page = 1,
  pageSize = 10,
  statusFilter?: number
) {
  // 1. 筛选数据
  let filteredProducts = [...mockMyProducts]

  // 商品状态筛选（-1表示全部）
  if (statusFilter !== undefined && statusFilter !== -1) {
    filteredProducts = filteredProducts.filter(p => p.goods_status === statusFilter)
  }

  // 2. 按创建时间降序排序（最新的在前面）
  filteredProducts.sort((a, b) => {
    const timeA = new Date(a.create_time || 0).getTime()
    const timeB = new Date(b.create_time || 0).getTime()
    return timeB - timeA
  })

  // 3. 分页
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const items = filteredProducts.slice(start, end)

  return {
    items,
    pagination: {
      current_page: page,
      page_size: pageSize,
      total: filteredProducts.length,
      total_pages: Math.ceil(filteredProducts.length / pageSize)
    }
  }
}

/**
 * Mock 下架商品
 */
export async function mockOffShelfProduct(goodsId: number) {
  await new Promise(resolve => setTimeout(resolve, 800))

  const productIndex = mockMyProducts.findIndex(p => p.goods_id === goodsId)
  if (productIndex !== -1) {
    mockMyProducts[productIndex].goods_status = 2 // 已下架
    mockMyProducts[productIndex].update_time = new Date().toISOString()
    return {
      success: true,
      message: '商品已下架'
    }
  }

  return {
    success: false,
    message: '商品不存在'
  }
}

/**
 * Mock 重新上架商品
 */
export async function mockRelistProduct(goodsId: number) {
  await new Promise(resolve => setTimeout(resolve, 800))

  const productIndex = mockMyProducts.findIndex(p => p.goods_id === goodsId)
  if (productIndex !== -1) {
    mockMyProducts[productIndex].goods_status = 0 // 在售
    mockMyProducts[productIndex].update_time = new Date().toISOString()
    return {
      success: true,
      message: '商品已重新上架'
    }
  }

  return {
    success: false,
    message: '商品不存在'
  }
}

/**
 * Mock 删除商品
 */
export async function mockDeleteProduct(goodsId: number) {
  await new Promise(resolve => setTimeout(resolve, 800))

  const productIndex = mockMyProducts.findIndex(p => p.goods_id === goodsId)
  if (productIndex !== -1) {
    mockMyProducts[productIndex].goods_status = 3 // 已删除
    mockMyProducts[productIndex].update_time = new Date().toISOString()
    return {
      success: true,
      message: '商品已删除'
    }
  }

  return {
    success: false,
    message: '商品不存在'
  }
}
