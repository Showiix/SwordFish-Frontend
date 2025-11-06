<template>
  <div class="how-it-works-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">如何使用</h1>
        <p class="page-subtitle">快速上手 Swordfish，开启你的二手交易之旅</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 买家指南 -->
        <div class="content-section">
          <div class="section-header">
            <div class="section-icon">
              <el-icon><ShoppingCart /></el-icon>
            </div>
            <h2 class="section-title">买家指南</h2>
          </div>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-icon">
                <el-icon><Search /></el-icon>
              </div>
              <h3 class="step-title">浏览商品</h3>
              <p class="step-desc">
                通过首页、分类或搜索功能，找到你感兴趣的商品。
                可以使用筛选功能缩小范围，快速定位心仪物品。
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-icon">
                <el-icon><View /></el-icon>
              </div>
              <h3 class="step-title">查看详情</h3>
              <p class="step-desc">
                点击商品查看详细信息，包括图片、描述、成色、价格等。
                查看卖家信用评分，了解卖家历史交易记录。
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-icon">
                <el-icon><ChatDotRound /></el-icon>
              </div>
              <h3 class="step-title">联系卖家</h3>
              <p class="step-desc">
                使用站内聊天功能与卖家沟通，咨询商品细节、
                确认交易方式和地点。建议当面交易，确保安全。
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-icon">
                <el-icon><CircleCheck /></el-icon>
              </div>
              <h3 class="step-title">完成交易</h3>
              <p class="step-desc">
                约定见面时间地点，当面验货付款。
                交易完成后，记得给卖家评价，帮助其他用户做出决策。
              </p>
            </div>
          </div>
        </div>

        <!-- 卖家指南 -->
        <div class="content-section">
          <div class="section-header">
            <div class="section-icon seller">
              <el-icon><Sell /></el-icon>
            </div>
            <h2 class="section-title">卖家指南</h2>
          </div>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-icon seller">
                <el-icon><Plus /></el-icon>
              </div>
              <h3 class="step-title">发布商品</h3>
              <p class="step-desc">
                点击"发布商品"按钮，填写商品信息。
                上传清晰的商品照片，详细描述商品状况和特点。
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-icon seller">
                <el-icon><PriceTag /></el-icon>
              </div>
              <h3 class="step-title">定价合理</h3>
              <p class="step-desc">
                根据商品成色、市场价格合理定价。
                可以参考平台上同类商品的价格，提高成交率。
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-icon seller">
                <el-icon><Message /></el-icon>
              </div>
              <h3 class="step-title">及时回复</h3>
              <p class="step-desc">
                收到买家咨询后及时回复，耐心解答疑问。
                保持良好的沟通态度，提升交易成功率。
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-icon seller">
                <el-icon><Checked /></el-icon>
              </div>
              <h3 class="step-title">顺利交接</h3>
              <p class="step-desc">
                约定安全的交易地点和时间，当面交易。
                确认收款后，将商品标记为已售出。
              </p>
            </div>
          </div>
        </div>

        <!-- 安全提示 -->
        <div class="content-section">
          <div class="safety-card">
            <div class="safety-icon">
              <el-icon><Warning /></el-icon>
            </div>
            <h2 class="safety-title">安全交易提示</h2>
            <div class="safety-tips">
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>建议在校园内公共场所当面交易</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>交易前仔细验货，确认商品状况</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>不要提前转账，避免财产损失</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>遇到可疑情况及时联系平台客服</span>
              </div>
              <div class="tip-item">
                <el-icon><Select /></el-icon>
                <span>保留聊天记录和交易凭证</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="content-section cta-section">
          <h2 class="cta-title">准备好开始了吗？</h2>
          <p class="cta-subtitle">
            加入 Swordfish，开始你的校园二手交易之旅
          </p>
          <div class="cta-buttons">
            <el-button type="primary" size="large" @click="goToProducts">
              浏览商品
            </el-button>
            <el-button size="large" @click="goToPublish">
              发布商品
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  ShoppingCart,
  Search,
  View,
  ChatDotRound,
  CircleCheck,
  Sell,
  Plus,
  PriceTag,
  Message,
  Checked,
  Warning,
  Select
} from '@element-plus/icons-vue'

const router = useRouter()

const goToProducts = () => {
  router.push('/products')
}

const goToPublish = () => {
  router.push('/products/publish')
}
</script>

<style scoped lang="scss">
.how-it-works-page {
  min-height: 100vh;
  background: $bg-secondary;
}

.page-hero {
  background: linear-gradient(135deg, #005571 0%, #00668c 50%, #4fa8c5 100%);
  color: white;
  padding: 80px 0 60px;
  text-align: center;
}

.page-title {
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 $spacing-md 0;
  letter-spacing: -0.02em;

  @media (max-width: $breakpoint-sm) {
    font-size: 36px;
  }
}

.page-subtitle {
  font-size: 20px;
  opacity: 0.9;
  margin: 0;
}

.page-content {
  padding: 80px 0;
}

.content-section {
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  border-radius: $border-radius-full;
  color: white;
  font-size: 28px;
  box-shadow: 0 8px 24px rgba(113, 196, 239, 0.3);

  &.seller {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
  }
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: $primary-color;
  margin: 0;
}

// 步骤网格
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
}

.step-card {
  position: relative;
  background: white;
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 102, 140, 0.15);
  }
}

.step-number {
  position: absolute;
  top: -15px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  color: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: $border-radius-full;
  box-shadow: 0 4px 12px rgba(113, 196, 239, 0.4);
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  border-radius: $border-radius-lg;
  color: white;
  font-size: 24px;
  margin-bottom: $spacing-md;

  &.seller {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  }
}

.step-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;
}

.step-desc {
  font-size: 15px;
  line-height: 1.6;
  color: $text-secondary;
  margin: 0;
}

// 安全提示卡片
.safety-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.2);
}

.safety-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #f59e0b;
  border-radius: $border-radius-full;
  color: white;
  font-size: 28px;
  margin-bottom: $spacing-lg;
}

.safety-title {
  font-size: 28px;
  font-weight: 700;
  color: #92400e;
  margin: 0 0 $spacing-xl 0;
}

.safety-tips {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 16px;
  color: #92400e;

  .el-icon {
    font-size: 20px;
    color: #10b981;
  }
}

// CTA 区域
.cta-section {
  text-align: center;
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.cta-title {
  font-size: 32px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-md 0;
}

.cta-subtitle {
  font-size: 18px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.cta-buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}
</style>

