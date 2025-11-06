<template>
  <div class="publish-product-page">
    <div class="container">
      <!-- 页面头部 -->
      <div class="page-header">
        <h1 class="page-title">发布商品</h1>
        <p class="page-subtitle">填写商品信息，快速发布你的闲置物品</p>
      </div>

      <!-- 发布表单 -->
      <el-card class="publish-card" shadow="never">
        <el-form
          ref="formRef"
          :model="form"
          :rules="rules"
          label-position="top"
          size="large"
          @submit.prevent="handleSubmit"
        >
          <!-- 商品标题 -->
          <el-form-item label="商品标题" prop="goods_title">
            <el-input
              v-model="form.goods_title"
              placeholder="请输入商品标题，简洁明了更容易被搜索到"
              maxlength="50"
              show-word-limit
              clearable
            >
              <template #prefix>
                <el-icon><Edit /></el-icon>
              </template>
            </el-input>
          </el-form-item>

          <!-- 商品分类和价格 -->
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12">
              <el-form-item label="商品分类" prop="goods_type">
                <el-select
                  v-model="form.goods_type"
                  placeholder="请选择商品分类"
                  clearable
                  style="width: 100%"
                >
                  <el-option
                    v-for="(label, id) in CATEGORY_MAP"
                    :key="id"
                    :label="label"
                    :value="Number(id)"
                  >
                    <span>{{ getCategoryIcon(Number(id)) }} {{ label }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="商品价格" prop="goods_price">
                <el-input
                  v-model.number="form.goods_price"
                  type="number"
                  placeholder="请输入商品价格"
                  clearable
                >
                  <template #prefix>
                    <span style="color: #f56c6c; font-weight: bold">¥</span>
                  </template>
                  <template #append>元</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 商品成色 -->
          <el-form-item label="商品成色" prop="condition_level">
            <el-radio-group v-model="form.condition_level" class="condition-group">
              <el-radio
                v-for="(label, value) in CONDITION_MAP"
                :key="value"
                :label="value"
                border
              >
                <span class="condition-label">{{ label }}</span>
              </el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- 商品图片 -->
          <el-form-item label="" prop="goods_images">
            <ImageUploader v-model="form.goods_images" :max-count="9" :max-size="5" />
          </el-form-item>

          <!-- 商品描述 -->
          <el-form-item label="商品描述" prop="goods_desc">
            <el-input
              v-model="form.goods_desc"
              type="textarea"
              :rows="6"
              placeholder="请详细描述商品的使用情况、购买时间、新旧程度、存在的问题等信息，方便买家了解"
              maxlength="1000"
              show-word-limit
            />
          </el-form-item>

          <!-- 温馨提示 -->
          <el-alert
            type="info"
            :closable="false"
            show-icon
            class="publish-tips"
          >
            <template #title>
              <div class="tips-content">
                <p><strong>温馨提示：</strong></p>
                <ul>
                  <li>请确保商品信息真实有效，虚假信息将影响信用分</li>
                  <li>商品图片需清晰展示商品全貌，第一张图片将作为封面</li>
                  <li>合理定价，参考同类商品价格，更容易成交</li>
                  <li>详细描述商品状况，减少买卖纠纷</li>
                </ul>
              </div>
            </template>
          </el-alert>

          <!-- 提交按钮 -->
          <el-form-item class="submit-section">
            <div class="button-group">
              <el-button
                type="primary"
                size="large"
                :loading="loading"
                native-type="submit"
                class="submit-button"
              >
                <template #icon>
                  <el-icon><Upload /></el-icon>
                </template>
                {{ loading ? '发布中...' : '立即发布' }}
              </el-button>
              
              <el-button
                size="large"
                :disabled="loading"
                @click="handleSaveDraft"
                class="draft-button"
              >
                <template #icon>
                  <el-icon><Document /></el-icon>
                </template>
                保存草稿
              </el-button>

              <el-button
                size="large"
                :disabled="loading"
                @click="handleReset"
              >
                重置
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, type FormInstance, type FormRules } from 'element-plus'
import { Edit, Upload, Document } from '@element-plus/icons-vue'
import type { PublishProductForm } from '@/types/products'
import { CATEGORY_MAP, CONDITION_MAP, ProductCondition } from '@/types/products'
import ImageUploader from '@/components/business/ImageUploader.vue'
import { useProductsStore } from '@/store/modules/products'
import { storage } from '@/utils/storage'

const router = useRouter()
const productsStore = useProductsStore()

// 表单引用
const formRef = ref<FormInstance>()

// 加载状态
const loading = ref(false)

// 表单数据
const form = reactive<PublishProductForm & { goods_images: string[] }>({
  goods_title: '',
  goods_type: undefined as any,
  goods_price: undefined as any,
  condition_level: ProductCondition.BRAND_NEW,
  goods_images: [],
  goods_desc: ''
})

// 草稿存储键
const DRAFT_KEY = 'publish_product_draft'

/**
 * 表单验证规则
 */
const rules: FormRules<PublishProductForm> = {
  goods_title: [
    { required: true, message: '请输入商品标题', trigger: 'blur' },
    { min: 2, max: 50, message: '标题长度为 2-50 个字符', trigger: 'blur' }
  ],
  goods_type: [
    { required: true, message: '请选择商品分类', trigger: 'change' }
  ],
  goods_price: [
    { required: true, message: '请输入商品价格', trigger: 'blur' },
    {
      validator: (_rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入商品价格'))
        } else if (value <= 0) {
          callback(new Error('价格必须大于0'))
        } else if (!/^\d+(\.\d{1,2})?$/.test(value.toString())) {
          callback(new Error('价格最多保留2位小数'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  condition_level: [
    { required: true, message: '请选择商品成色', trigger: 'change' }
  ],
  goods_images: [
    {
      validator: (_rule, value, callback) => {
        if (!value || value.length === 0) {
          callback(new Error('请至少上传1张商品图片'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ],
  goods_desc: [
    { max: 1000, message: '描述最多1000个字符', trigger: 'blur' }
  ]
}

/**
 * 获取分类图标
 */
const getCategoryIcon = (categoryId: number): string => {
  const iconMap: Record<number, string> = {
    1: '📱',
    2: '📚',
    3: '🏠',
    4: '👕',
    5: '⚽',
    6: '💄',
    7: '📦'
  }
  return iconMap[categoryId] || '📦'
}

/**
 * 提交表单
 */
const handleSubmit = async () => {
  if (!formRef.value) return

  try {
    // 表单验证
    await formRef.value.validate()

    // 确认发布
    await ElMessageBox.confirm(
      '确认发布该商品吗？发布后将进入审核流程',
      '确认发布',
      {
        confirmButtonText: '确认发布',
        cancelButtonText: '再想想',
        type: 'info'
      }
    )

    loading.value = true

    // 调用发布接口（Store 会根据 USE_MOCK 决定使用 Mock 还是真实 API）
    const result = await productsStore.publishNewProduct(form)

    if (result.code === 200) {
      ElMessage.success('发布成功！')
      
      // 清除草稿
      storage.remove(DRAFT_KEY)
      
      // 跳转到商品详情页
      const productId = result.data.goods_id
      router.push(`/products/${productId}`)
    } else {
      ElMessage.error(result.msg || '发布失败，请重试')
    }
  } catch (error: any) {
    if (error !== 'cancel') {
      console.error('发布商品失败:', error)
      ElMessage.error(error.message || '发布失败，请重试')
    }
  } finally {
    loading.value = false
  }
}

/**
 * 保存草稿
 */
const handleSaveDraft = () => {
  try {
    storage.set(DRAFT_KEY, form)
    ElMessage.success('草稿已保存')
  } catch (error) {
    ElMessage.error('保存草稿失败')
  }
}

/**
 * 重置表单
 */
const handleReset = async () => {
  try {
    await ElMessageBox.confirm(
      '确认重置表单吗？所有填写的内容将被清空',
      '确认重置',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )

    formRef.value?.resetFields()
    form.goods_images = []
    ElMessage.success('表单已重置')
  } catch (error) {
    // 用户取消
  }
}

/**
 * 加载草稿
 */
const loadDraft = () => {
  try {
    const draft = storage.get(DRAFT_KEY)
    if (draft) {
      Object.assign(form, draft)
      ElMessage.info('已恢复上次编辑的草稿')
    }
  } catch (error) {
    console.error('加载草稿失败:', error)
  }
}

/**
 * 页面加载时尝试恢复草稿
 */
onMounted(() => {
  loadDraft()
})
</script>

<style scoped lang="scss">
.publish-product-page {
  min-height: calc(100vh - $header-height);
  padding: $spacing-xl 0;
  background: $bg-color-page;

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 $spacing-lg;
  }

  .page-header {
    margin-bottom: $spacing-xl;
    text-align: center;

    .page-title {
      font-size: 32px;
      font-weight: 600;
      color: $text-primary;
      margin-bottom: $spacing-sm;
    }

    .page-subtitle {
      font-size: $font-size-base;
      color: $text-secondary;
    }
  }

  .publish-card {
    border-radius: $border-radius-lg;
    
    :deep(.el-card__body) {
      padding: $spacing-xl;
    }
  }

  .condition-group {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-md;
    width: 100%;

    .el-radio {
      margin-right: 0;
      flex: 1;
      min-width: 100px;

      .condition-label {
        font-weight: 500;
      }
    }
  }

  .publish-tips {
    margin-bottom: $spacing-xl;

    .tips-content {
      p {
        margin-bottom: $spacing-sm;
      }

      ul {
        margin: 0;
        padding-left: 20px;

        li {
          margin-bottom: 4px;
          color: $text-secondary;
          font-size: $font-size-sm;
        }
      }
    }
  }

  .submit-section {
    margin-top: $spacing-xl;
    margin-bottom: 0;

    .button-group {
      display: flex;
      gap: $spacing-md;
      justify-content: center;

      .submit-button {
        min-width: 140px;
      }

      .draft-button {
        min-width: 120px;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .publish-product-page {
    .page-header {
      .page-title {
        font-size: 24px;
      }
    }

    .publish-card {
      :deep(.el-card__body) {
        padding: $spacing-lg;
      }
    }

    .condition-group {
      .el-radio {
        flex: 1 1 calc(50% - #{$spacing-md / 2});
        min-width: auto;
      }
    }

    .submit-section {
      .button-group {
        flex-direction: column;

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
