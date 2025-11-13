// Mock 聊天数据
import type { ChatMessage, Conversation } from '@/types/chat'
import { MessageType, MessageStatus } from '@/types/chat'

/**
 * Mock 会话列表数据
 */
export const mockConversations: Conversation[] = [
  {
    conversation_id: 1,
    other_user: {
      user_id: 1001,
      student_id: '2024001',
      real_name: '张三',
      avatar_url: 'https://i.pravatar.cc/150?img=1'
    },
    last_message: {
      content: '好的,那我们明天下午3点在图书馆门口见面吧',
      create_time: '2025-11-12T15:30:00Z',
      message_type: MessageType.TEXT
    },
    unread_count: 2,
    create_time: '2025-11-10T10:20:00Z',
    update_time: '2025-11-12T15:30:00Z'
  },
  {
    conversation_id: 2,
    other_user: {
      user_id: 1002,
      student_id: '2023105',
      real_name: '李四',
      avatar_url: 'https://i.pravatar.cc/150?img=2'
    },
    last_message: {
      content: '这个显示器还在吗？',
      create_time: '2025-11-12T14:15:00Z',
      message_type: MessageType.TEXT
    },
    unread_count: 1,
    create_time: '2025-11-11T09:00:00Z',
    update_time: '2025-11-12T14:15:00Z'
  },
  {
    conversation_id: 3,
    other_user: {
      user_id: 1003,
      student_id: '2024089',
      real_name: '王五',
      avatar_url: 'https://i.pravatar.cc/150?img=3'
    },
    last_message: {
      content: '谢谢!',
      create_time: '2025-11-11T16:45:00Z',
      message_type: MessageType.TEXT
    },
    unread_count: 0,
    create_time: '2025-11-09T14:30:00Z',
    update_time: '2025-11-11T16:45:00Z'
  },
  {
    conversation_id: 4,
    other_user: {
      user_id: 1004,
      student_id: '2023045',
      real_name: '赵六',
      avatar_url: 'https://i.pravatar.cc/150?img=4'
    },
    last_message: {
      content: '已经卖了,抱歉',
      create_time: '2025-11-10T11:20:00Z',
      message_type: MessageType.TEXT
    },
    unread_count: 0,
    create_time: '2025-11-10T10:00:00Z',
    update_time: '2025-11-10T11:20:00Z'
  }
]

/**
 * Mock 聊天消息数据（按会话ID分组）
 */
export const mockMessages: Record<number, ChatMessage[]> = {
  1: [
    {
      message_id: 1,
      conversation_id: 1,
      sender_id: 101,
      receiver_id: 1001,
      message_type: MessageType.TEXT,
      content: '你好,请问这个iPad还在吗？',
      status: MessageStatus.READ,
      create_time: '2025-11-10T10:20:00Z',
      is_mine: true
    },
    {
      message_id: 2,
      conversation_id: 1,
      sender_id: 1001,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '在的,你想要吗？',
      status: MessageStatus.READ,
      create_time: '2025-11-10T10:22:00Z',
      is_mine: false
    },
    {
      message_id: 3,
      conversation_id: 1,
      sender_id: 101,
      receiver_id: 1001,
      message_type: MessageType.PRODUCT,
      content: '就是这个对吧？',
      extra_data: {
        product_id: 101,
        product_title: 'iPad Air 5 256GB WIFI版 星光色',
        product_price: 3999,
        product_image: 'https://picsum.photos/800/800?random=101'
      },
      status: MessageStatus.READ,
      create_time: '2025-11-10T10:25:00Z',
      is_mine: true
    },
    {
      message_id: 4,
      conversation_id: 1,
      sender_id: 1001,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '对对对,就是这个。什么时候方便看货？',
      status: MessageStatus.READ,
      create_time: '2025-11-10T10:26:00Z',
      is_mine: false
    },
    {
      message_id: 5,
      conversation_id: 1,
      sender_id: 101,
      receiver_id: 1001,
      message_type: MessageType.TEXT,
      content: '明天下午有空吗？我们可以约个时间地点',
      status: MessageStatus.READ,
      create_time: '2025-11-12T15:00:00Z',
      is_mine: true
    },
    {
      message_id: 6,
      conversation_id: 1,
      sender_id: 1001,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '好的,那我们明天下午3点在图书馆门口见面吧',
      status: MessageStatus.SENT,
      create_time: '2025-11-12T15:30:00Z',
      is_mine: false
    }
  ],
  2: [
    {
      message_id: 7,
      conversation_id: 2,
      sender_id: 1002,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '你好,看到你发的显示器了',
      status: MessageStatus.READ,
      create_time: '2025-11-11T09:00:00Z',
      is_mine: false
    },
    {
      message_id: 8,
      conversation_id: 2,
      sender_id: 101,
      receiver_id: 1002,
      message_type: MessageType.TEXT,
      content: '你好,有什么想了解的吗？',
      status: MessageStatus.READ,
      create_time: '2025-11-11T09:05:00Z',
      is_mine: true
    },
    {
      message_id: 9,
      conversation_id: 2,
      sender_id: 1002,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '这个显示器还在吗？',
      status: MessageStatus.SENT,
      create_time: '2025-11-12T14:15:00Z',
      is_mine: false
    }
  ],
  3: [
    {
      message_id: 10,
      conversation_id: 3,
      sender_id: 1003,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '你好,你的书还有吗？',
      status: MessageStatus.READ,
      create_time: '2025-11-09T14:30:00Z',
      is_mine: false
    },
    {
      message_id: 11,
      conversation_id: 3,
      sender_id: 101,
      receiver_id: 1003,
      message_type: MessageType.TEXT,
      content: '有的,你需要哪本？',
      status: MessageStatus.READ,
      create_time: '2025-11-09T14:35:00Z',
      is_mine: true
    },
    {
      message_id: 12,
      conversation_id: 3,
      sender_id: 1003,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '计算机网络那本',
      status: MessageStatus.READ,
      create_time: '2025-11-09T14:40:00Z',
      is_mine: false
    },
    {
      message_id: 13,
      conversation_id: 3,
      sender_id: 101,
      receiver_id: 1003,
      message_type: MessageType.TEXT,
      content: '可以的,28元包邮',
      status: MessageStatus.READ,
      create_time: '2025-11-09T14:42:00Z',
      is_mine: true
    },
    {
      message_id: 14,
      conversation_id: 3,
      sender_id: 1003,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: '谢谢!',
      status: MessageStatus.READ,
      create_time: '2025-11-11T16:45:00Z',
      is_mine: false
    }
  ],
  4: [
    {
      message_id: 15,
      conversation_id: 4,
      sender_id: 1004,
      receiver_id: 101,
      message_type: MessageType.TEXT,
      content: 'AirPods还在吗？',
      status: MessageStatus.READ,
      create_time: '2025-11-10T10:00:00Z',
      is_mine: false
    },
    {
      message_id: 16,
      conversation_id: 4,
      sender_id: 101,
      receiver_id: 1004,
      message_type: MessageType.TEXT,
      content: '已经卖了,抱歉',
      status: MessageStatus.READ,
      create_time: '2025-11-10T11:20:00Z',
      is_mine: true
    }
  ]
}

/**
 * 获取会话列表
 */
export function getMockConversations() {
  // 按更新时间降序排序
  return [...mockConversations].sort((a, b) => {
    const timeA = new Date(a.update_time).getTime()
    const timeB = new Date(b.update_time).getTime()
    return timeB - timeA
  })
}

/**
 * 获取指定会话的消息列表
 */
export function getMockMessages(conversationId: number): ChatMessage[] {
  return mockMessages[conversationId] || []
}

/**
 * Mock 发送消息
 */
export async function mockSendMessage(
  conversationId: number,
  content: string,
  messageType: MessageType = MessageType.TEXT,
  extraData?: any
): Promise<{ success: boolean; data?: ChatMessage; message: string }> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  // 生成新消息ID
  const allMessageIds = Object.values(mockMessages)
    .flat()
    .map(m => m.message_id)
  const newMessageId = Math.max(...allMessageIds, 0) + 1

  // 获取会话信息
  const conversation = mockConversations.find(c => c.conversation_id === conversationId)
  if (!conversation) {
    return {
      success: false,
      message: '会话不存在'
    }
  }

  // 创建新消息
  const newMessage: ChatMessage = {
    message_id: newMessageId,
    conversation_id: conversationId,
    sender_id: 101, // 当前用户ID
    receiver_id: conversation.other_user.user_id,
    message_type: messageType,
    content,
    extra_data: extraData,
    status: MessageStatus.SENT,
    create_time: new Date().toISOString(),
    is_mine: true
  }

  // 添加到消息列表
  if (!mockMessages[conversationId]) {
    mockMessages[conversationId] = []
  }
  mockMessages[conversationId].push(newMessage)

  // 更新会话的最后消息
  conversation.last_message = {
    content: content,
    create_time: newMessage.create_time,
    message_type: messageType
  }
  conversation.update_time = newMessage.create_time

  return {
    success: true,
    data: newMessage,
    message: '发送成功'
  }
}

/**
 * Mock 标记消息为已读
 */
export async function mockMarkAsRead(conversationId: number) {
  await new Promise(resolve => setTimeout(resolve, 300))

  const conversation = mockConversations.find(c => c.conversation_id === conversationId)
  if (conversation) {
    conversation.unread_count = 0
  }

  return {
    success: true,
    message: '已标记为已读'
  }
}
