// 聊天状态管理
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Conversation, ChatMessage, SendMessageForm } from '@/types/chat'
import { MessageType } from '@/types/chat'
import {
  getMockConversations,
  getMockMessages,
  mockSendMessage,
  mockMarkAsRead
} from '@/mock/chat'

// 开发模式标志：true = 使用 Mock 数据，false = 使用真实 API
const USE_MOCK = true

export const useChatStore = defineStore('chat', () => {
  // 状态
  const conversations = ref<Conversation[]>([])
  const currentConversation = ref<Conversation | null>(null)
  const messages = ref<ChatMessage[]>([])
  const loading = ref(false)
  const messagesLoading = ref(false)

  // 计算属性
  const hasConversations = computed(() => conversations.value.length > 0)
  const totalUnreadCount = computed(() =>
    conversations.value.reduce((sum, conv) => sum + conv.unread_count, 0)
  )

  /**
   * 获取会话列表
   */
  const fetchConversations = async () => {
    try {
      loading.value = true

      if (USE_MOCK) {
        await new Promise(resolve => setTimeout(resolve, 600))
        conversations.value = getMockConversations()
        return { code: 200, msg: 'success', data: conversations.value }
      }

      // TODO: 使用真实 API
      // const response = await getConversations()
      // if (response.code === 200) {
      //   conversations.value = response.data
      // }
      // return response
    } catch (error) {
      console.error('获取会话列表失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  /**
   * 获取指定会话的消息列表
   */
  const fetchMessages = async (conversationId: number) => {
    try {
      messagesLoading.value = true

      if (USE_MOCK) {
        await new Promise(resolve => setTimeout(resolve, 400))
        messages.value = getMockMessages(conversationId)

        // 标记为已读
        await markAsRead(conversationId)

        return { code: 200, msg: 'success', data: messages.value }
      }

      // TODO: 使用真实 API
      // const response = await getMessages(conversationId)
      // if (response.code === 200) {
      //   messages.value = response.data
      //   await markAsRead(conversationId)
      // }
      // return response
    } catch (error) {
      console.error('获取消息列表失败:', error)
      throw error
    } finally {
      messagesLoading.value = false
    }
  }

  /**
   * 发送消息
   */
  const sendMessage = async (
    conversationId: number,
    content: string,
    messageType: MessageType = MessageType.TEXT,
    extraData?: any
  ) => {
    try {
      if (!content.trim() && messageType === MessageType.TEXT) {
        throw new Error('消息内容不能为空')
      }

      if (USE_MOCK) {
        const result = await mockSendMessage(conversationId, content, messageType, extraData)
        if (result.success && result.data) {
          // 添加到当前消息列表
          messages.value.push(result.data)

          // 更新会话列表中的最后一条消息
          const conversation = conversations.value.find(c => c.conversation_id === conversationId)
          if (conversation) {
            conversation.last_message = {
              content: content,
              create_time: result.data.create_time,
              message_type: messageType
            }
            conversation.update_time = result.data.create_time

            // 重新排序会话列表
            conversations.value.sort((a, b) => {
              const timeA = new Date(a.update_time).getTime()
              const timeB = new Date(b.update_time).getTime()
              return timeB - timeA
            })
          }

          return { code: 200, msg: result.message, data: result.data }
        }
        throw new Error(result.message || '发送失败')
      }

      // TODO: 使用真实 API
      // const response = await sendMessageApi(formData)
      // if (response.code === 200) {
      //   messages.value.push(response.data)
      //   // 更新会话列表
      // }
      // return response
    } catch (error: any) {
      console.error('发送消息失败:', error)
      throw error
    }
  }

  /**
   * 标记会话为已读
   */
  const markAsRead = async (conversationId: number) => {
    try {
      if (USE_MOCK) {
        await mockMarkAsRead(conversationId)

        // 更新本地状态
        const conversation = conversations.value.find(c => c.conversation_id === conversationId)
        if (conversation) {
          conversation.unread_count = 0
        }

        return { code: 200, msg: '已标记为已读' }
      }

      // TODO: 使用真实 API
      // const response = await markAsReadApi(conversationId)
      // if (response.code === 200) {
      //   const conversation = conversations.value.find(c => c.conversation_id === conversationId)
      //   if (conversation) {
      //     conversation.unread_count = 0
      //   }
      // }
      // return response
    } catch (error) {
      console.error('标记已读失败:', error)
      throw error
    }
  }

  /**
   * 设置当前会话
   */
  const setCurrentConversation = (conversation: Conversation | null) => {
    currentConversation.value = conversation
    if (conversation) {
      fetchMessages(conversation.conversation_id)
    } else {
      messages.value = []
    }
  }

  /**
   * 清空消息列表
   */
  const clearMessages = () => {
    messages.value = []
  }

  return {
    // 状态
    conversations: computed(() => conversations.value),
    currentConversation: computed(() => currentConversation.value),
    messages: computed(() => messages.value),
    loading: computed(() => loading.value),
    messagesLoading: computed(() => messagesLoading.value),

    // 计算属性
    hasConversations,
    totalUnreadCount,

    // 方法
    fetchConversations,
    fetchMessages,
    sendMessage,
    markAsRead,
    setCurrentConversation,
    clearMessages
  }
})
