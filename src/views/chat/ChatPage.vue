<template>
  <div class="chat-page">
    <div class="container chat-container">
      <!-- 左侧：会话列表 -->
      <div class="conversation-list-wrapper">
        <div class="conversation-header">
          <h2 class="header-title">{{ $t('chat.conversationList.title') }}</h2>
        </div>

        <!-- 会话列表加载状态 -->
        <div v-if="chatStore.loading" class="loading-container">
          <el-skeleton :rows="5" animated />
        </div>

        <!-- 会话列表 -->
        <div v-else-if="chatStore.hasConversations" class="conversations-list">
          <div
            v-for="conversation in chatStore.conversations"
            :key="conversation.conversation_id"
            class="conversation-item"
            :class="{ active: currentConversationId === conversation.conversation_id }"
            @click="selectConversation(conversation)"
          >
            <!-- 用户头像 -->
            <el-avatar
              :src="conversation.other_user.avatar_url"
              :size="50"
              class="user-avatar"
            >
              {{ conversation.other_user.real_name?.charAt(0) || 'U' }}
            </el-avatar>

            <!-- 会话信息 -->
            <div class="conversation-info">
              <div class="info-header">
                <span class="user-name">{{ conversation.other_user.real_name }}</span>
                <span class="last-time">{{ formatTime(conversation.update_time) }}</span>
              </div>
              <div class="info-footer">
                <span class="last-message">{{ getLastMessageText(conversation) }}</span>
                <el-badge
                  v-if="conversation.unread_count > 0"
                  :value="conversation.unread_count"
                  :max="99"
                  class="unread-badge"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <el-empty
          v-else
          :description="$t('chat.conversationList.empty')"
          class="empty-conversations"
        >
          <template #image>
            <el-icon :size="80" color="#b6ccd8">
              <ChatDotRound />
            </el-icon>
          </template>
          <p class="empty-hint">{{ $t('chat.conversationList.emptyHint') }}</p>
        </el-empty>
      </div>

      <!-- 右侧：消息区域 -->
      <div class="message-area-wrapper">
        <!-- 未选择会话 -->
        <div v-if="!currentConversation" class="empty-message-area">
          <el-icon :size="100" color="#b6ccd8">
            <ChatLineRound />
          </el-icon>
          <p class="empty-title">{{ $t('chat.empty.title') }}</p>
          <p class="empty-subtitle">{{ $t('chat.empty.subtitle') }}</p>
          <el-button type="primary" @click="goToProducts">
            {{ $t('chat.empty.browseBtn') }}
          </el-button>
        </div>

        <!-- 已选择会话 -->
        <div v-else class="message-area">
          <!-- 消息区域头部 -->
          <div class="message-header">
            <div class="header-user-info">
              <el-avatar
                :src="currentConversation.other_user.avatar_url"
                :size="40"
              >
                {{ currentConversation.other_user.real_name?.charAt(0) || 'U' }}
              </el-avatar>
              <div class="user-details">
                <span class="user-name">{{ currentConversation.other_user.real_name }}</span>
                <span class="user-id">{{ $t('profilePage.hero.studentId') }}: {{ currentConversation.other_user.student_id }}</span>
              </div>
            </div>
          </div>

          <!-- 消息列表 -->
          <div class="message-list" ref="messageListRef">
            <!-- 消息加载状态 -->
            <div v-if="chatStore.messagesLoading" class="loading-messages">
              <el-icon class="is-loading">
                <Loading />
              </el-icon>
              <span>{{ $t('common.loading') }}</span>
            </div>

            <!-- 消息内容 -->
            <div v-else class="messages-content">
              <div
                v-for="message in chatStore.messages"
                :key="message.message_id"
                class="message-item"
                :class="{ 'is-mine': message.is_mine }"
              >
                <!-- 对方消息：头像在左 -->
                <el-avatar
                  v-if="!message.is_mine"
                  :src="currentConversation.other_user.avatar_url"
                  :size="36"
                  class="message-avatar"
                >
                  {{ currentConversation.other_user.real_name?.charAt(0) || 'U' }}
                </el-avatar>

                <!-- 消息气泡 -->
                <div class="message-bubble">
                  <!-- 文本消息 -->
                  <div v-if="message.message_type === MessageType.TEXT" class="message-text">
                    {{ message.content }}
                  </div>

                  <!-- 商品卡片消息 -->
                  <div
                    v-else-if="message.message_type === MessageType.PRODUCT"
                    class="message-product-card"
                    @click="viewProduct(message.extra_data?.product_id)"
                  >
                    <el-image
                      :src="message.extra_data?.product_image"
                      class="product-image"
                      fit="cover"
                    >
                      <template #error>
                        <div class="image-error">
                          <el-icon><Picture /></el-icon>
                        </div>
                      </template>
                    </el-image>
                    <div class="product-info">
                      <p class="product-title">{{ message.extra_data?.product_title }}</p>
                      <p class="product-price">¥{{ message.extra_data?.product_price }}</p>
                    </div>
                  </div>

                  <!-- 消息时间 -->
                  <div class="message-time">{{ formatMessageTime(message.create_time) }}</div>
                </div>

                <!-- 我的消息：头像在右 -->
                <el-avatar
                  v-if="message.is_mine"
                  :src="userInfo?.avatar_url"
                  :size="36"
                  class="message-avatar"
                >
                  {{ userInfo?.real_name?.charAt(0) || 'U' }}
                </el-avatar>
              </div>
            </div>
          </div>

          <!-- 消息输入框 -->
          <div class="message-input-area">
            <el-input
              v-model="messageInput"
              type="textarea"
              :placeholder="$t('chat.messageArea.placeholder')"
              :rows="3"
              resize="none"
              class="message-textarea"
              @keyup.ctrl.enter="handleSendMessage"
            />
            <div class="input-actions">
              <div class="action-buttons">
                <!-- 可以添加更多操作按钮，如发送图片、表情等 -->
              </div>
              <el-button
                type="primary"
                :disabled="!messageInput.trim()"
                :loading="sending"
                @click="handleSendMessage"
              >
                {{ $t('chat.messageArea.sendBtn') }}
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import {
  ChatDotRound,
  ChatLineRound,
  Loading,
  Picture
} from '@element-plus/icons-vue'
import { useChatStore } from '@/store/modules/chat'
import { useAuthStore } from '@/store/modules/auth'
import type { Conversation } from '@/types/chat'
import { MessageType } from '@/types/chat'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)

const router = useRouter()
const chatStore = useChatStore()
const authStore = useAuthStore()
const { t, locale } = useI18n()

// 设置 dayjs 语言
watch(
  () => locale.value,
  (newLocale) => {
    dayjs.locale(newLocale === 'zh-CN' ? 'zh-cn' : 'en')
  },
  { immediate: true }
)

const messageInput = ref('')
const sending = ref(false)
const messageListRef = ref<HTMLElement>()
const currentConversationId = ref<number | null>(null)

const currentConversation = computed(() => chatStore.currentConversation)
const userInfo = computed(() => authStore.user)

/**
 * 格式化时间（相对时间）
 */
const formatTime = (time: string): string => {
  return dayjs(time).fromNow()
}

/**
 * 格式化消息时间（绝对时间）
 */
const formatMessageTime = (time: string): string => {
  return dayjs(time).format('HH:mm')
}

/**
 * 获取最后一条消息的文本
 */
const getLastMessageText = (conversation: Conversation): string => {
  const lastMsg = conversation.last_message
  if (!lastMsg) return ''

  if (lastMsg.message_type === MessageType.TEXT) {
    return lastMsg.content
  } else if (lastMsg.message_type === MessageType.PRODUCT) {
    return '[商品卡片]'
  } else if (lastMsg.message_type === MessageType.IMAGE) {
    return '[图片]'
  }
  return ''
}

/**
 * 选择会话
 */
const selectConversation = (conversation: Conversation) => {
  currentConversationId.value = conversation.conversation_id
  chatStore.setCurrentConversation(conversation)

  // 滚动到消息列表底部
  nextTick(() => {
    scrollToBottom()
  })
}

/**
 * 发送消息
 */
const handleSendMessage = async () => {
  if (!messageInput.value.trim()) {
    ElMessage.warning(t('chat.messages.cannotSendEmpty'))
    return
  }

  if (!currentConversation.value) {
    return
  }

  try {
    sending.value = true
    await chatStore.sendMessage(
      currentConversation.value.conversation_id,
      messageInput.value.trim(),
      MessageType.TEXT
    )

    // 清空输入框
    messageInput.value = ''

    // 滚动到底部
    nextTick(() => {
      scrollToBottom()
    })
  } catch (error) {
    ElMessage.error(t('chat.messages.sendFailed'))
  } finally {
    sending.value = false
  }
}

/**
 * 滚动到消息列表底部
 */
const scrollToBottom = () => {
  if (messageListRef.value) {
    const messagesContent = messageListRef.value.querySelector('.messages-content')
    if (messagesContent) {
      messagesContent.scrollTop = messagesContent.scrollHeight
    }
  }
}

/**
 * 查看商品详情
 */
const viewProduct = (productId?: number) => {
  if (productId) {
    router.push(`/products/${productId}`)
  }
}

/**
 * 前往商品列表
 */
const goToProducts = () => {
  router.push('/products')
}

/**
 * 页面加载时获取会话列表
 */
onMounted(async () => {
  try {
    await chatStore.fetchConversations()

    // 如果有会话，默认选择第一个
    if (chatStore.hasConversations && chatStore.conversations.length > 0) {
      selectConversation(chatStore.conversations[0])
    }
  } catch (error) {
    ElMessage.error(t('chat.messages.loadFailed'))
  }
})
</script>

<style scoped lang="scss">
.chat-page {
  min-height: calc(100vh - $header-height);
  background: $bg-color-page;
  padding: $spacing-lg 0;

  .chat-container {
    max-width: 1400px;
    height: calc(100vh - $header-height - 2 * $spacing-lg);
    margin: 0 auto;
    padding: 0 $spacing-lg;
    display: flex;
    gap: $spacing-md;
  }

  // 左侧会话列表
  .conversation-list-wrapper {
    width: 360px;
    background: white;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-sm;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .conversation-header {
      padding: $spacing-lg;
      border-bottom: 1px solid $border-color-light;

      .header-title {
        font-size: $font-size-xlarge;
        font-weight: 600;
        color: $text-primary;
        margin: 0;
      }
    }

    .loading-container {
      padding: $spacing-lg;
    }

    .conversations-list {
      flex: 1;
      overflow-y: auto;

      .conversation-item {
        display: flex;
        align-items: center;
        gap: $spacing-md;
        padding: $spacing-md $spacing-lg;
        cursor: pointer;
        transition: $transition-base;
        border-bottom: 1px solid $border-color-light;

        &:hover {
          background: $bg-secondary;
        }

        &.active {
          background: $primary-light;
          border-left: 3px solid $primary-color;
        }

        .user-avatar {
          flex-shrink: 0;
        }

        .conversation-info {
          flex: 1;
          min-width: 0;

          .info-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: $spacing-xs;

            .user-name {
              font-size: $font-size-base;
              font-weight: 600;
              color: $text-primary;
            }

            .last-time {
              font-size: $font-size-sm;
              color: $text-tertiary;
              flex-shrink: 0;
            }
          }

          .info-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .last-message {
              flex: 1;
              font-size: $font-size-sm;
              color: $text-secondary;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .unread-badge {
              flex-shrink: 0;
              margin-left: $spacing-sm;
            }
          }
        }
      }
    }

    .empty-conversations {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .empty-hint {
        font-size: $font-size-sm;
        color: $text-secondary;
        margin-top: $spacing-sm;
      }
    }
  }

  // 右侧消息区域
  .message-area-wrapper {
    flex: 1;
    background: white;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-sm;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .empty-message-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: $spacing-md;

      .empty-title {
        font-size: $font-size-xlarge;
        font-weight: 600;
        color: $text-primary;
        margin: 0;
      }

      .empty-subtitle {
        font-size: $font-size-base;
        color: $text-secondary;
        margin: 0;
        text-align: center;
      }
    }

    .message-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      .message-header {
        padding: $spacing-lg;
        border-bottom: 1px solid $border-color-light;
        background: white;

        .header-user-info {
          display: flex;
          align-items: center;
          gap: $spacing-md;

          .user-details {
            display: flex;
            flex-direction: column;
            gap: $spacing-xs;

            .user-name {
              font-size: $font-size-large;
              font-weight: 600;
              color: $text-primary;
            }

            .user-id {
              font-size: $font-size-sm;
              color: $text-secondary;
            }
          }
        }
      }

      .message-list {
        flex: 1;
        overflow: hidden;
        background: $bg-color-page;

        .loading-messages {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: $spacing-sm;
          color: $text-secondary;
        }

        .messages-content {
          height: 100%;
          overflow-y: auto;
          padding: $spacing-lg;
          display: flex;
          flex-direction: column;
          gap: $spacing-md;

          .message-item {
            display: flex;
            gap: $spacing-sm;
            align-items: flex-start;

            &.is-mine {
              flex-direction: row-reverse;

              .message-bubble {
                background: $primary-color;
                color: white;

                .message-time {
                  text-align: right;
                  color: rgba(255, 255, 255, 0.8);
                }
              }
            }

            .message-avatar {
              flex-shrink: 0;
            }

            .message-bubble {
              max-width: 60%;
              padding: $spacing-sm $spacing-md;
              border-radius: $border-radius-lg;
              background: white;
              box-shadow: $shadow-sm;

              .message-text {
                font-size: $font-size-base;
                line-height: 1.6;
                word-wrap: break-word;
                white-space: pre-wrap;
              }

              .message-product-card {
                display: flex;
                gap: $spacing-sm;
                cursor: pointer;
                transition: $transition-base;
                padding: $spacing-sm;
                border-radius: $border-radius-md;

                &:hover {
                  background: rgba(0, 0, 0, 0.05);
                }

                .product-image {
                  width: 80px;
                  height: 80px;
                  border-radius: $border-radius-md;
                  flex-shrink: 0;

                  .image-error {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    background: $bg-secondary;
                    color: $text-tertiary;
                  }
                }

                .product-info {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;

                  .product-title {
                    font-size: $font-size-sm;
                    font-weight: 500;
                    color: $text-primary;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  }

                  .product-price {
                    font-size: $font-size-large;
                    font-weight: 700;
                    color: $primary-color;
                    margin: 0;
                  }
                }
              }

              .message-time {
                font-size: $font-size-small;
                color: $text-tertiary;
                margin-top: $spacing-xs;
              }
            }
          }
        }
      }

      .message-input-area {
        border-top: 1px solid $border-color-light;
        padding: $spacing-lg;
        background: white;

        .message-textarea {
          :deep(.el-textarea__inner) {
            border: 1px solid $border-color-base;
            border-radius: $border-radius-md;
            font-size: $font-size-base;

            &:focus {
              border-color: $primary-color;
            }
          }
        }

        .input-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: $spacing-md;

          .action-buttons {
            display: flex;
            gap: $spacing-sm;
          }
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: $breakpoint-lg) {
  .chat-page {
    .chat-container {
      flex-direction: column;
      height: auto;

      .conversation-list-wrapper {
        width: 100%;
        height: 300px;
      }

      .message-area-wrapper {
        height: 500px;
      }
    }
  }
}

@media (max-width: $breakpoint-md) {
  .chat-page {
    .chat-container {
      .conversation-list-wrapper {
        height: 250px;
      }

      .message-area-wrapper {
        height: 450px;

        .message-area {
          .message-list {
            .messages-content {
              .message-item {
                .message-bubble {
                  max-width: 75%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
