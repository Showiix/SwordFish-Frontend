<template>
  <div class="image-uploader">
    <div class="upload-header">
      <span class="label">{{ $t('imageUploader.label') }}</span>
      <span class="tips">
        <el-icon><InfoFilled /></el-icon>
        {{ $t('imageUploader.tips', { maxCount, maxSize: maxSizeMB }) }}
      </span>
    </div>

    <div class="upload-content">
      <!-- 已上传的图片列表 -->
      <draggable
        v-model="imageListLocal"
        class="image-list"
        item-key="id"
        :animation="200"
        @end="handleDragEnd"
      >
        <template #item="{ element, index }">
          <div class="image-item">
            <el-image
              :src="element"
              fit="cover"
              :preview-src-list="imageListLocal"
              :initial-index="index"
            >
              <template #error>
                <div class="image-error">
                  <el-icon><Picture /></el-icon>
                  <span>{{ $t('imageUploader.loadFailed') }}</span>
                </div>
              </template>
            </el-image>

            <!-- 删除按钮 -->
            <div class="image-actions">
              <el-button
                type="danger"
                size="small"
                circle
                @click="handleRemove(index)"
              >
                <el-icon><Delete /></el-icon>
              </el-button>
            </div>

            <!-- 主图标记 -->
            <div v-if="index === 0" class="primary-badge">
              {{ $t('imageUploader.primaryBadge') }}
            </div>
          </div>
        </template>
      </draggable>

      <!-- 上传区域 -->
      <div
        v-if="imageListLocal.length < maxCount"
        class="upload-area"
        @click="triggerFileInput"
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        :class="{ 'is-dragover': isDragOver }"
      >
        <div class="upload-placeholder">
          <el-icon class="upload-icon"><Plus /></el-icon>
          <div class="upload-hint">{{ $t('imageUploader.uploadHint', { current: imageListLocal.length, total: maxCount }) }}</div>
        </div>
        <input
          ref="fileInputRef"
          type="file"
          accept="image/jpeg,image/png,image/jpg,image/webp"
          multiple
          style="display: none"
          @change="handleFileChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { Plus, Delete, Picture, InfoFilled } from '@element-plus/icons-vue'
import draggable from 'vuedraggable'

interface Props {
  modelValue: string[]  // v-model 绑定的图片列表
  maxCount?: number     // 最大上传数量
  maxSize?: number      // 最大文件大小（MB）
}

const props = withDefaults(defineProps<Props>(), {
  maxCount: 9,
  maxSize: 5
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const { t } = useI18n()
// 本地图片列表（用于拖拽排序）
const imageListLocal = ref<string[]>([...props.modelValue])

// 文件输入引用
const fileInputRef = ref<HTMLInputElement>()

// 拖拽状态
const isDragOver = ref(false)

// 上传配置
const maxSizeMB = computed(() => props.maxSize)

// Mock 上传开关（因为后端还未开发，使用 Mock）
const USE_MOCK_UPLOAD = true

/**
 * 监听外部变化
 */
watch(
  () => props.modelValue,
  (newVal) => {
    imageListLocal.value = [...newVal]
  }
)

/**
 * 监听本地变化，同步到外部
 */
watch(
  imageListLocal,
  (newVal) => {
    emit('update:modelValue', newVal)
  },
  { deep: true }
)

/**
 * 触发文件选择
 */
const triggerFileInput = () => {
  fileInputRef.value?.click()
}

/**
 * 文件选择变化
 */
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files) {
    handleFiles(Array.from(files))
  }
  // 清空 input，允许选择同一文件
  target.value = ''
}

/**
 * 拖拽进入
 */
const handleDragOver = (e: DragEvent) => {
  isDragOver.value = true
}

/**
 * 拖拽离开
 */
const handleDragLeave = (e: DragEvent) => {
  isDragOver.value = false
}

/**
 * 放置文件
 */
const handleDrop = (e: DragEvent) => {
  isDragOver.value = false
  const files = e.dataTransfer?.files
  if (files) {
    handleFiles(Array.from(files))
  }
}

/**
 * 处理文件列表
 */
const handleFiles = async (files: File[]) => {
  // 验证数量
  const remainingCount = props.maxCount - imageListLocal.value.length
  if (files.length > remainingCount) {
    ElMessage.warning(t('imageUploader.exceedCount', { count: remainingCount }))
    files = files.slice(0, remainingCount)
  }

  // 逐个验证和上传
  for (const file of files) {
    if (await beforeUpload(file)) {
      await uploadFile(file)
    }
  }
}

/**
 * 上传前验证
 */
const beforeUpload = async (file: File): Promise<boolean> => {
  // 验证文件类型
  const isImage = file.type.startsWith('image/')
  if (!isImage) {
    ElMessage.error(t('imageUploader.notImage', { name: file.name }))
    return false
  }

  // 验证文件大小
  const isLtMaxSize = file.size / 1024 / 1024 < props.maxSize
  if (!isLtMaxSize) {
    ElMessage.error(t('imageUploader.exceedSize', { name: file.name, size: props.maxSize }))
    return false
  }

  // 验证数量
  if (imageListLocal.value.length >= props.maxCount) {
    ElMessage.error(t('imageUploader.exceedMaxCount', { count: props.maxCount }))
    return false
  }

  return true
}

/**
 * 上传文件
 */
const uploadFile = async (file: File) => {
  if (USE_MOCK_UPLOAD) {
    // Mock 上传
    try {
      const url = await mockUploadImage(file)
      imageListLocal.value.push(url)
      ElMessage.success(t('imageUploader.uploadSuccess', { name: file.name }))
    } catch (error) {
      ElMessage.error(t('imageUploader.uploadFailed', { name: file.name }))
    }
  } else {
    // 真实上传逻辑
    // TODO: 实现真实的文件上传
    ElMessage.info(t('imageUploader.realUploadTodo'))
  }
}

/**
 * Mock 图片上传
 */
const mockUploadImage = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    // 模拟上传延迟
    setTimeout(() => {
      // 使用占位图服务（推荐方案）
      const randomId = Date.now() + Math.random().toString(36).substring(7)
      const url = `https://picsum.photos/600/400?random=${randomId}`
      resolve(url)

      // 或者使用 Base64（适合真实预览）
      // const reader = new FileReader()
      // reader.onload = (e) => {
      //   resolve(e.target?.result as string)
      // }
      // reader.onerror = reject
      // reader.readAsDataURL(file)
    }, 800)
  })
}

/**
 * 删除图片
 */
const handleRemove = (index: number) => {
  imageListLocal.value.splice(index, 1)
  ElMessage.success(t('imageUploader.deleted'))
}

/**
 * 拖拽结束
 */
const handleDragEnd = () => {
  // 拖拽排序完成，数据已自动更新
  ElMessage.success(t('imageUploader.sortUpdated'))
}
</script>

<style scoped lang="scss">
.image-uploader {
  .upload-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-md;
    flex-wrap: wrap;
    gap: $spacing-sm;

    .label {
      font-size: $font-size-base;
      font-weight: 500;
      color: $text-primary;
    }

    .tips {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: $font-size-sm;
      color: $text-tertiary;

      .el-icon {
        font-size: 14px;
      }
    }
  }

  .upload-content {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-md;
  }

  .image-list {
    display: contents;
  }

  .image-item {
    position: relative;
    width: 148px;
    height: 148px;
    border-radius: $border-radius-base;
    border: 1px solid $border-color-base;
    overflow: hidden;
    cursor: move;
    transition: all 0.3s;

    &:hover {
      border-color: $primary-color;
      box-shadow: 0 2px 8px rgba($primary-color, 0.15);

      .image-actions {
        opacity: 1;
      }
    }

    .el-image {
      width: 100%;
      height: 100%;
    }

    .image-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: $bg-color-page;
      color: $text-tertiary;

      .el-icon {
        font-size: 32px;
        margin-bottom: 8px;
      }

      span {
        font-size: $font-size-sm;
      }
    }

    .image-actions {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s;

      .el-button {
        background: rgba(255, 255, 255, 0.9);

        &:hover {
          background: #fff;
        }
      }
    }

    .primary-badge {
      position: absolute;
      top: 0;
      left: 0;
      padding: 2px 8px;
      background: $primary-color;
      color: #fff;
      font-size: 12px;
      border-radius: 0 0 $border-radius-base 0;
    }
  }

  .upload-area {
    position: relative;
    width: 148px;
    height: 148px;
    border-radius: $border-radius-base;
    border: 1px dashed $border-color-base;
    background: $bg-color-page;
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: $primary-color;
      background: rgba($primary-color, 0.05);
    }

    &.is-dragover {
      border-color: $primary-color;
      background: rgba($primary-color, 0.1);
      transform: scale(1.02);
    }

    .upload-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      pointer-events: none;

      .upload-icon {
        font-size: 32px;
        color: $text-tertiary;
        margin-bottom: 8px;
      }

      .upload-text {
        font-size: $font-size-sm;
        color: $text-secondary;
        margin-bottom: 4px;
      }

      .upload-hint {
        font-size: 12px;
        color: $text-tertiary;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .image-uploader {
    .upload-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .image-item,
    .upload-area {
      width: calc(50% - #{$spacing-md / 2});
      height: calc(50vw - #{$spacing-md / 2} - #{$spacing-lg});
      max-height: 180px;
    }
  }
}
</style>



