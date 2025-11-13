// 聊天相关类型定义

/** 消息类型 */
export enum MessageType {
  TEXT = 'text',        // 文本消息
  IMAGE = 'image',      // 图片消息
  PRODUCT = 'product',  // 商品卡片
  SYSTEM = 'system'     // 系统消息
}

/** 消息状态 */
export enum MessageStatus {
  SENDING = 0,   // 发送中
  SENT = 1,      // 已发送
  FAILED = 2,    // 发送失败
  READ = 3       // 已读
}

/** 聊天消息 */
export interface ChatMessage {
  message_id: number
  conversation_id: number
  sender_id: number
  receiver_id: number
  message_type: MessageType
  content: string
  extra_data?: {
    image_url?: string
    product_id?: number
    product_title?: string
    product_price?: number
    product_image?: string
  }
  status: MessageStatus
  create_time: string
  is_mine: boolean  // 是否是当前用户发送的
}

/** 会话信息 */
export interface Conversation {
  conversation_id: number
  other_user: {
    user_id: number
    student_id: string
    real_name?: string
    avatar_url?: string
  }
  last_message?: {
    content: string
    create_time: string
    message_type: MessageType
  }
  unread_count: number
  create_time: string
  update_time: string
}

/** 发送消息表单 */
export interface SendMessageForm {
  conversation_id: number
  receiver_id: number
  message_type: MessageType
  content: string
  extra_data?: {
    image_url?: string
    product_id?: number
  }
}
