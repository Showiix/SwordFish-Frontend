<template>
  <div class="profile-page">
    <!-- Hero 区域 -->
    <section class="profile-hero">
      <div class="container">
        <div class="profile-header">
          <el-avatar :size="120" :src="userInfo.avatar" class="user-avatar">
            <el-icon><User /></el-icon>
          </el-avatar>
          <div class="user-info">
            <h1 class="user-name">{{ userInfo.name || $t('profilePage.hero.defaultName') }}</h1>
            <p class="user-id">{{ $t('profilePage.hero.studentId') }}: {{ userInfo.studentId }}</p>
            <div class="user-credit">
              <el-icon class="credit-icon"><Trophy /></el-icon>
              <span class="credit-score">{{ $t('profilePage.hero.creditScore') }}: {{ userInfo.creditScore }}</span>
            </div>
          </div>
          <div class="header-actions">
            <el-button type="primary" @click="showEditDialog">
              <el-icon><Edit /></el-icon>
              {{ $t('profilePage.hero.editBtn') }}
            </el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="profile-content">
      <div class="container">
        <el-tabs v-model="activeTab" class="profile-tabs">
          <!-- 个人信息 -->
          <el-tab-pane :label="$t('profilePage.tabs.info')" name="info">
            <div class="info-section">
              <el-card class="info-card">
                <template #header>
                  <div class="card-header">
                    <el-icon><InfoFilled /></el-icon>
                    <span>{{ $t('profilePage.info.title') }}</span>
                  </div>
                </template>
                <div class="info-grid">
                  <div class="info-item">
                    <span class="info-label">{{ $t('profilePage.info.username') }}</span>
                    <span class="info-value">{{ userInfo.username }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">{{ $t('profilePage.info.name') }}</span>
                    <span class="info-value">{{ userInfo.name }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">{{ $t('profilePage.info.gender') }}</span>
                    <span class="info-value">{{ getGenderText(userInfo.gender) }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">{{ $t('profilePage.info.studentId') }}</span>
                    <span class="info-value">{{ userInfo.studentId }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">{{ $t('profilePage.info.college') }}</span>
                    <span class="info-value">{{ userInfo.college }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">{{ $t('profilePage.info.phone') }}</span>
                    <span class="info-value">{{ userInfo.phone }}</span>
                  </div>
                  <div class="info-item full-width">
                    <span class="info-label">{{ $t('profilePage.info.email') }}</span>
                    <span class="info-value">{{ userInfo.email }}</span>
                  </div>
                </div>
              </el-card>

              <el-card class="info-card">
                <template #header>
                  <div class="card-header">
                    <el-icon><Lock /></el-icon>
                    <span>{{ $t('profilePage.security.title') }}</span>
                  </div>
                </template>
                <div class="security-actions">
                  <el-button @click="showPasswordDialog">
                    {{ $t('profilePage.security.changePasswordBtn') }}
                  </el-button>
                </div>
              </el-card>
            </div>
          </el-tab-pane>

          <!-- 我的商品 -->
          <el-tab-pane :label="$t('profilePage.tabs.products')" name="products">
            <div class="products-section">
              <div v-loading="productsLoading" class="products-grid">
                <div v-if="myProducts.length === 0" class="empty-state">
                  <el-icon class="empty-icon"><Box /></el-icon>
                  <p class="empty-text">{{ $t('profilePage.products.empty') }}</p>
                  <el-button type="primary" @click="goToPublish">
                    {{ $t('profilePage.products.publishBtn') }}
                  </el-button>
                </div>
                <el-card
                  v-for="product in myProducts"
                  :key="product.id"
                  class="product-card"
                  @click="goToProductDetail(product.id)"
                >
                  <img :src="product.images[0]" :alt="product.name" class="product-image" />
                  <div class="product-info">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-price">¥{{ product.price }}</p>
                    <div class="product-status">
                      <el-tag :type="getStatusType(product.status)">
                        {{ getStatusText(product.status) }}
                      </el-tag>
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
          </el-tab-pane>

          <!-- 我的订单 -->
          <el-tab-pane :label="$t('profilePage.tabs.orders')" name="orders">
            <div class="orders-section">
              <div v-loading="ordersLoading">
                <div v-if="myOrders.length === 0" class="empty-state">
                  <el-icon class="empty-icon"><DocumentCopy /></el-icon>
                  <p class="empty-text">{{ $t('profilePage.orders.empty') }}</p>
                </div>
                <el-card
                  v-for="order in myOrders"
                  :key="order.id"
                  class="order-card"
                >
                  <div class="order-header">
                    <span class="order-no">{{ $t('profilePage.orders.orderNo') }}: {{ order.id }}</span>
                    <el-tag :type="getOrderStatusType(order.status)">
                      {{ getOrderStatusText(order.status) }}
                    </el-tag>
                  </div>
                  <div class="order-content">
                    <img :src="order.goodsImage" :alt="order.goodsName" class="order-image" />
                    <div class="order-info">
                      <h3 class="order-goods-name">{{ order.goodsName }}</h3>
                      <p class="order-price">¥{{ order.price }}</p>
                      <p class="order-time">{{ formatTime(order.createdAt) }}</p>
                    </div>
                  </div>
                  <div class="order-actions">
                    <el-button size="small" @click="viewOrderDetail(order.id)">
                      {{ $t('profilePage.orders.viewDetailBtn') }}
                    </el-button>
                  </div>
                </el-card>
              </div>
            </div>
          </el-tab-pane>

          <!-- 信用记录 -->
          <el-tab-pane :label="$t('profilePage.tabs.credit')" name="credit">
            <div class="credit-section">
              <el-card class="credit-summary">
                <div class="credit-display">
                  <div class="credit-score-big">{{ userInfo.creditScore }}</div>
                  <p class="credit-label">{{ $t('profilePage.credit.currentScore') }}</p>
                </div>
              </el-card>

              <div v-loading="creditLoading" class="credit-records">
                <div v-if="creditRecords.length === 0" class="empty-state">
                  <el-icon class="empty-icon"><DocumentCopy /></el-icon>
                  <p class="empty-text">{{ $t('profilePage.credit.empty') }}</p>
                </div>
                <el-card
                  v-for="record in creditRecords"
                  :key="record.id"
                  class="credit-record-card"
                >
                  <div class="record-header">
                    <span class="record-reason">{{ record.reason }}</span>
                    <span :class="['record-score', record.scoreChange > 0 ? 'positive' : 'negative']">
                      {{ record.scoreChange > 0 ? '+' : '' }}{{ record.scoreChange }}
                    </span>
                  </div>
                  <div class="record-time">{{ formatTime(record.createdAt) }}</div>
                </el-card>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>

    <!-- 编辑信息对话框 -->
    <el-dialog
      v-model="editDialogVisible"
      :title="$t('profilePage.editDialog.title')"
      width="600px"
    >
      <el-form :model="editForm" :rules="editRules" ref="editFormRef" label-width="100px">
        <el-form-item :label="$t('profilePage.editDialog.name')" prop="name">
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item :label="$t('profilePage.editDialog.gender')" prop="gender">
          <el-radio-group v-model="editForm.gender">
            <el-radio :label="1">{{ $t('profilePage.editDialog.male') }}</el-radio>
            <el-radio :label="2">{{ $t('profilePage.editDialog.female') }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('profilePage.editDialog.college')" prop="college">
          <el-input v-model="editForm.college" />
        </el-form-item>
        <el-form-item :label="$t('profilePage.editDialog.phone')" prop="phone">
          <el-input v-model="editForm.phone" />
        </el-form-item>
        <el-form-item :label="$t('profilePage.editDialog.email')" prop="email">
          <el-input v-model="editForm.email" />
        </el-form-item>
        <el-form-item :label="$t('profilePage.editDialog.avatar')" prop="avatar">
          <el-input v-model="editForm.avatar" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="editDialogVisible = false">{{ $t('profilePage.editDialog.cancelBtn') }}</el-button>
        <el-button type="primary" :loading="editLoading" @click="handleEditSubmit">
          {{ $t('profilePage.editDialog.confirmBtn') }}
        </el-button>
      </template>
    </el-dialog>

    <!-- 修改密码对话框 -->
    <el-dialog
      v-model="passwordDialogVisible"
      :title="$t('profilePage.passwordDialog.title')"
      width="500px"
    >
      <el-form :model="passwordForm" :rules="passwordRules" ref="passwordFormRef" label-width="120px">
        <el-form-item :label="$t('profilePage.passwordDialog.oldPassword')" prop="oldPassword">
          <el-input v-model="passwordForm.oldPassword" type="password" show-password />
        </el-form-item>
        <el-form-item :label="$t('profilePage.passwordDialog.newPassword')" prop="newPassword">
          <el-input v-model="passwordForm.newPassword" type="password" show-password />
        </el-form-item>
        <el-form-item :label="$t('profilePage.passwordDialog.confirmPassword')" prop="confirmPassword">
          <el-input v-model="passwordForm.confirmPassword" type="password" show-password />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="passwordDialogVisible = false">{{ $t('profilePage.passwordDialog.cancelBtn') }}</el-button>
        <el-button type="primary" :loading="passwordLoading" @click="handlePasswordSubmit">
          {{ $t('profilePage.passwordDialog.confirmBtn') }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import {
  User,
  Trophy,
  Edit,
  InfoFilled,
  Lock,
  Box,
  DocumentCopy
} from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { UserInfo, Product, Order, CreditRecord } from '@/types/profile'
import {
  getUserInfo as fetchUserInfoApi,
  updateUserInfo as updateUserInfoApi,
  changePassword as changePasswordApi,
  getCreditRecords as getCreditRecordsApi,
  getMyProducts as getMyProductsApi,
  getOrderList as getOrderListApi
} from '@/services/user'

const router = useRouter()
const { t } = useI18n()

// 用户信息 - Mock数据
const userInfo = ref<UserInfo>({
  username: 'student001',
  name: '张三',
  gender: 1,
  studentId: '2021001234',
  college: '计算机学院',
  phone: '13800138000',
  email: 'zhangsan@example.com',
  avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  creditScore: 95
})

// 当前标签页
const activeTab = ref('info')

// 我的商品 - Mock数据
const myProducts = ref<Product[]>([
  {
    id: 1,
    name: '二手自行车 - 95新',
    price: 299,
    images: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
    status: 1,
    description: '9成新山地自行车，骑行流畅'
  },
  {
    id: 2,
    name: '大学物理教材',
    price: 35,
    images: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'],
    status: 1,
    description: '全新教材，仅翻阅过几次'
  },
  {
    id: 3,
    name: 'iPhone 12 手机壳',
    price: 15,
    images: ['https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'],
    status: 3,
    description: '全新未使用'
  }
])
const productsLoading = ref(false)

// 我的订单 - Mock数据
const myOrders = ref<Order[]>([
  {
    id: 1001,
    goodsId: 101,
    goodsName: '高等数学教材（上册）',
    goodsImage: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    price: 45,
    status: 1,
    createdAt: '2024-11-08T10:30:00'
  },
  {
    id: 1002,
    goodsId: 102,
    goodsName: '笔记本电脑支架',
    goodsImage: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    price: 58,
    status: 1,
    createdAt: '2024-11-05T14:20:00'
  },
  {
    id: 1003,
    goodsId: 103,
    goodsName: '蓝牙耳机',
    goodsImage: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    price: 120,
    status: 0,
    createdAt: '2024-11-10T09:15:00'
  }
])
const ordersLoading = ref(false)

// 信用记录 - Mock数据
const creditRecords = ref<CreditRecord[]>([
  {
    id: 1,
    userId: 1,
    reason: '完成交易，买家好评',
    scoreChange: 5,
    createdAt: '2024-11-09T16:45:00'
  },
  {
    id: 2,
    userId: 1,
    reason: '成功出售商品',
    scoreChange: 3,
    createdAt: '2024-11-08T11:20:00'
  },
  {
    id: 3,
    userId: 1,
    reason: '完成交易，买家好评',
    scoreChange: 5,
    createdAt: '2024-11-06T14:30:00'
  },
  {
    id: 4,
    userId: 1,
    reason: '订单超时未处理',
    scoreChange: -2,
    createdAt: '2024-11-03T09:10:00'
  },
  {
    id: 5,
    userId: 1,
    reason: '账号实名认证',
    scoreChange: 10,
    createdAt: '2024-10-28T10:00:00'
  }
])
const creditLoading = ref(false)

// 编辑对话框
const editDialogVisible = ref(false)
const editLoading = ref(false)
const editFormRef = ref<FormInstance>()
const editForm = reactive({
  name: '',
  gender: 1,
  college: '',
  phone: '',
  email: '',
  avatar: ''
})

const editRules = reactive<FormRules>({
  name: [
    { required: true, message: () => t('profilePage.editDialog.nameRequired'), trigger: 'blur' }
  ],
  phone: [
    { required: true, message: () => t('profilePage.editDialog.phoneRequired'), trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: () => t('profilePage.editDialog.phoneInvalid'), trigger: 'blur' }
  ],
  email: [
    { required: true, message: () => t('profilePage.editDialog.emailRequired'), trigger: 'blur' },
    { type: 'email', message: () => t('profilePage.editDialog.emailInvalid'), trigger: 'blur' }
  ]
})

// 修改密码对话框
const passwordDialogVisible = ref(false)
const passwordLoading = ref(false)
const passwordFormRef = ref<FormInstance>()
const passwordForm = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const passwordRules = reactive<FormRules>({
  oldPassword: [
    { required: true, message: () => t('profilePage.passwordDialog.oldPasswordRequired'), trigger: 'blur' }
  ],
  newPassword: [
    { required: true, message: () => t('profilePage.passwordDialog.newPasswordRequired'), trigger: 'blur' },
    { min: 6, message: () => t('profilePage.passwordDialog.passwordMinLength'), trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: () => t('profilePage.passwordDialog.confirmPasswordRequired'), trigger: 'blur' },
    {
      validator: (_rule, value, callback) => {
        if (value !== passwordForm.newPassword) {
          callback(new Error(t('profilePage.passwordDialog.passwordNotMatch')))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
})

// 获取用户信息
const fetchUserInfo = async () => {
  // 使用Mock数据，暂时注释API调用
  // try {
  //   const res = await fetchUserInfoApi()
  //   userInfo.value = res.data
  // } catch (error) {
  //   ElMessage.error(t('profilePage.errors.fetchUserInfoFailed'))
  // }
}

// 获取我的商品
const fetchMyProducts = async () => {
  // 使用Mock数据，暂时注释API调用
  // productsLoading.value = true
  // try {
  //   const res = await getMyProductsApi()
  //   myProducts.value = res.data
  // } catch (error) {
  //   ElMessage.error(t('profilePage.errors.fetchProductsFailed'))
  // } finally {
  //   productsLoading.value = false
  // }
}

// 获取我的订单
const fetchMyOrders = async () => {
  // 使用Mock数据，暂时注释API调用
  // ordersLoading.value = true
  // try {
  //   const res = await getOrderListApi()
  //   myOrders.value = res.data
  // } catch (error) {
  //   ElMessage.error(t('profilePage.errors.fetchOrdersFailed'))
  // } finally {
  //   ordersLoading.value = false
  // }
}

// 获取信用记录
const fetchCreditRecords = async () => {
  // 使用Mock数据，暂时注释API调用
  // creditLoading.value = true
  // try {
  //   const res = await getCreditRecordsApi()
  //   creditRecords.value = res.data
  // } catch (error) {
  //   ElMessage.error(t('profilePage.errors.fetchCreditFailed'))
  // } finally {
  //   creditLoading.value = false
  // }
}

// 显示编辑对话框
const showEditDialog = () => {
  editForm.name = userInfo.value.name
  editForm.gender = userInfo.value.gender
  editForm.college = userInfo.value.college
  editForm.phone = userInfo.value.phone
  editForm.email = userInfo.value.email
  editForm.avatar = userInfo.value.avatar
  editDialogVisible.value = true
}

// 提交编辑
const handleEditSubmit = async () => {
  if (!editFormRef.value) return

  await editFormRef.value.validate(async (valid) => {
    if (valid) {
      editLoading.value = true
      try {
        await updateUserInfoApi(editForm)
        Object.assign(userInfo.value, editForm)
        ElMessage.success(t('profilePage.messages.updateSuccess'))
        editDialogVisible.value = false
      } catch (error) {
        ElMessage.error(t('profilePage.errors.updateFailed'))
      } finally {
        editLoading.value = false
      }
    }
  })
}

// 显示修改密码对话框
const showPasswordDialog = () => {
  passwordForm.oldPassword = ''
  passwordForm.newPassword = ''
  passwordForm.confirmPassword = ''
  passwordDialogVisible.value = true
}

// 提交密码修改
const handlePasswordSubmit = async () => {
  if (!passwordFormRef.value) return

  await passwordFormRef.value.validate(async (valid) => {
    if (valid) {
      passwordLoading.value = true
      try {
        await changePasswordApi(passwordForm)
        ElMessage.success(t('profilePage.messages.passwordChangeSuccess'))
        passwordDialogVisible.value = false
      } catch (error) {
        ElMessage.error(t('profilePage.errors.passwordChangeFailed'))
      } finally {
        passwordLoading.value = false
      }
    }
  })
}

// 工具函数
const getGenderText = (gender: number) => {
  return gender === 1 ? t('profilePage.info.male') : t('profilePage.info.female')
}

const getStatusType = (status: number) => {
  const types: Record<number, any> = {
    0: 'warning',
    1: 'success',
    2: 'info',
    3: 'danger'
  }
  return types[status] || 'info'
}

const getStatusText = (status: number) => {
  return t(`profilePage.products.status.${status}`)
}

const getOrderStatusType = (status: number) => {
  const types: Record<number, any> = {
    0: 'warning',
    1: 'success',
    2: 'info'
  }
  return types[status] || 'info'
}

const getOrderStatusText = (status: number) => {
  return t(`profilePage.orders.status.${status}`)
}

const formatTime = (time: string) => {
  return new Date(time).toLocaleString()
}

const goToPublish = () => {
  router.push('/products/publish')
}

const goToProductDetail = (id: number) => {
  router.push(`/products/${id}`)
}

const viewOrderDetail = (id: number) => {
  router.push(`/orders/${id}`)
}

onMounted(() => {
  fetchUserInfo()
  fetchMyProducts()
  fetchMyOrders()
  fetchCreditRecords()
})
</script>

<style scoped lang="scss">
.profile-page {
  min-height: 100vh;
  background: $bg-secondary;
}

.profile-hero {
  background: linear-gradient(135deg, #005571 0%, #00668c 50%, #4fa8c5 100%);
  color: white;
  padding: 60px 0 40px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: $spacing-xl;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    text-align: center;
  }
}

.user-avatar {
  flex-shrink: 0;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 $spacing-sm 0;
  color: white;
}

.user-id {
  font-size: 16px;
  margin: 0 0 $spacing-sm 0;
  opacity: 0.9;
}

.user-credit {
  display: inline-flex;
  align-items: center;
  gap: $spacing-sm;
  background: rgba(255, 255, 255, 0.2);
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius-lg;
  backdrop-filter: blur(10px);

  .credit-icon {
    font-size: 20px;
    color: #fbbf24;
  }

  .credit-score {
    font-size: 16px;
    font-weight: 600;
  }
}

.header-actions {
  @media (max-width: $breakpoint-md) {
    width: 100%;

    .el-button {
      width: 100%;
    }
  }
}

.profile-content {
  padding: 60px 0;
}

.profile-tabs {
  :deep(.el-tabs__header) {
    background: white;
    padding: 0 $spacing-xl;
    border-radius: $border-radius-lg;
    margin-bottom: $spacing-xl;
  }

  :deep(.el-tabs__item) {
    font-size: 16px;
    font-weight: 600;
    color: $text-secondary;

    &.is-active {
      color: $primary-color;
    }
  }
}

// 个人信息
.info-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.info-card {
  .card-header {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-size: 20px;
    font-weight: 600;
    color: $primary-color;

    .el-icon {
      font-size: 24px;
    }
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-lg;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  &.full-width {
    grid-column: 1 / -1;
  }

  .info-label {
    font-size: 14px;
    color: $text-tertiary;
  }

  .info-value {
    font-size: 16px;
    color: $text-primary;
    font-weight: 500;
  }
}

.security-actions {
  padding: $spacing-md 0;
}

// 我的商品
.products-section {
  min-height: 400px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: $spacing-lg;

  // 当只有空状态时,使其占满整个网格并居中
  &:has(.empty-state:only-child) {
    grid-template-columns: 1fr;
  }
}

.product-card {
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 102, 140, 0.12);
  }

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: $border-radius-md;
    margin-bottom: $spacing-md;
  }

  .product-name {
    font-size: 16px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-sm 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .product-price {
    font-size: 20px;
    font-weight: 700;
    color: $primary-color;
    margin: 0 0 $spacing-sm 0;
  }

  .product-status {
    display: flex;
    justify-content: flex-end;
  }
}

// 我的订单
.orders-section {
  min-height: 400px;

  // 确保空状态在section中居中
  > div:has(.empty-state:only-child) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
}

.order-card {
  margin-bottom: $spacing-lg;

  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-md;
    padding-bottom: $spacing-md;
    border-bottom: 1px solid $border-color-light;
  }

  .order-no {
    font-size: 14px;
    color: $text-tertiary;
  }

  .order-content {
    display: flex;
    gap: $spacing-lg;
    margin-bottom: $spacing-md;
  }

  .order-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: $border-radius-md;
    flex-shrink: 0;
  }

  .order-info {
    flex: 1;

    .order-goods-name {
      font-size: 16px;
      font-weight: 600;
      color: $text-primary;
      margin: 0 0 $spacing-sm 0;
    }

    .order-price {
      font-size: 18px;
      font-weight: 700;
      color: $primary-color;
      margin: 0 0 $spacing-xs 0;
    }

    .order-time {
      font-size: 14px;
      color: $text-tertiary;
      margin: 0;
    }
  }

  .order-actions {
    display: flex;
    justify-content: flex-end;
  }
}

// 信用记录
.credit-section {
  min-height: 400px;
}

.credit-records {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  // 确保空状态在记录区域中居中
  &:has(.empty-state:only-child) {
    justify-content: center;
    align-items: center;
    min-height: 300px;
  }
}

.credit-summary {
  margin-bottom: $spacing-xl;

  .credit-display {
    text-align: center;
    padding: $spacing-xl 0;

    .credit-score-big {
      font-size: 72px;
      font-weight: 800;
      color: $primary-color;
      line-height: 1;
      margin-bottom: $spacing-md;
    }

    .credit-label {
      font-size: 18px;
      color: $text-secondary;
      margin: 0;
    }
  }
}

.credit-record-card {
  .record-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-sm;
  }

  .record-reason {
    font-size: 16px;
    color: $text-primary;
    font-weight: 500;
  }

  .record-score {
    font-size: 20px;
    font-weight: 700;

    &.positive {
      color: #10b981;
    }

    &.negative {
      color: #ef4444;
    }
  }

  .record-time {
    font-size: 14px;
    color: $text-tertiary;
  }
}

// 空状态
.empty-state {
  text-align: center;
  padding: 80px 0;

  .empty-icon {
    font-size: 64px;
    color: $text-tertiary;
    margin-bottom: $spacing-lg;
  }

  .empty-text {
    font-size: 16px;
    color: $text-secondary;
    margin: 0 0 $spacing-xl 0;
  }
}
</style>
