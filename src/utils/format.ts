// 格式化工具
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

/**
 * 格式化时间
 */
export function formatTime(date: string | Date, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(format)
}

/**
 * 相对时间
 */
export function timeAgo(date: string | Date): string {
  return dayjs(date).fromNow()
}

/**
 * 格式化价格
 */
export function formatPrice(price: number): string {
  return `¥${price.toFixed(2)}`
}

/**
 * 格式化数字(添加千位分隔符)
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 截取文本
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

