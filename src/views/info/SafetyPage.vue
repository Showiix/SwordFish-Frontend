<template>
  <div class="safety-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">安全提示</h1>
        <p class="page-subtitle">保护你的账号和财产安全</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 安全警示 -->
        <div class="warning-card">
          <el-icon class="warning-icon"><Warning /></el-icon>
          <h3 class="warning-title">重要提示</h3>
          <p class="warning-text">
            请务必遵守以下安全规则，保护你的账号和财产安全。
            如遇可疑情况，请立即停止交易并联系平台客服。
          </p>
        </div>

        <!-- 交易安全 -->
        <div class="safety-section">
          <h2 class="section-title">
            <el-icon><ShoppingBag /></el-icon>
            <span>交易安全</span>
          </h2>

          <div class="tips-grid">
            <div class="tip-card">
              <div class="tip-header">
                <el-icon class="tip-icon do"><CircleCheck /></el-icon>
                <h3 class="tip-title">建议做</h3>
              </div>
              <ul class="tip-list">
                <li>在校园内公共场所进行当面交易</li>
                <li>交易前仔细验货，确认商品状况</li>
                <li>当面验货无误后再付款</li>
                <li>保留聊天记录和交易凭证</li>
                <li>完成交易后及时给予评价</li>
                <li>选择信用分数高的交易对象</li>
              </ul>
            </div>

            <div class="tip-card">
              <div class="tip-header">
                <el-icon class="tip-icon dont"><CircleClose /></el-icon>
                <h3 class="tip-title">不要做</h3>
              </div>
              <ul class="tip-list">
                <li>不要在偏僻地点交易</li>
                <li>不要在未见面前提前转账</li>
                <li>不要相信"先付款后发货"</li>
                <li>不要泄露个人敏感信息</li>
                <li>不要接受可疑的付款方式</li>
                <li>不要购买明显低于市场价的商品</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 账号安全 -->
        <div class="safety-section">
          <h2 class="section-title">
            <el-icon><Lock /></el-icon>
            <span>账号安全</span>
          </h2>

          <div class="safety-items">
            <div class="safety-item">
              <div class="item-icon">
                <el-icon><Key /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">设置强密码</h3>
                <p class="item-desc">
                  使用至少8位的复杂密码，包含大小写字母、数字和特殊字符。
                  不要使用生日、手机号等容易被猜到的密码。
                </p>
              </div>
            </div>

            <div class="safety-item">
              <div class="item-icon">
                <el-icon><Refresh /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">定期更换密码</h3>
                <p class="item-desc">
                  建议每3-6个月更换一次密码，增强账号安全性。
                  不要在多个平台使用相同的密码。
                </p>
              </div>
            </div>

            <div class="safety-item">
              <div class="item-icon">
                <el-icon><Hide /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">保护个人信息</h3>
                <p class="item-desc">
                  不要将账号密码告诉他人，不要在公共电脑上保存登录信息。
                  退出账号时使用"退出登录"功能。
                </p>
              </div>
            </div>

            <div class="safety-item">
              <div class="item-icon">
                <el-icon><View /></el-icon>
              </div>
              <div class="item-content">
                <h3 class="item-title">注意登录提醒</h3>
                <p class="item-desc">
                  关注账号登录提醒，如发现异常登录记录，请立即修改密码并联系客服。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 防骗指南 -->
        <div class="safety-section">
          <h2 class="section-title">
            <el-icon><WarnTriangleFilled /></el-icon>
            <span>防骗指南</span>
          </h2>

          <div class="scam-cards">
            <div class="scam-card">
              <h3 class="scam-title">常见骗术</h3>
              <ul class="scam-list">
                <li>
                  <strong>先款后货诈骗</strong>
                  <p>要求买家先转账，之后失联或发送假货。</p>
                </li>
                <li>
                  <strong>虚假商品诈骗</strong>
                  <p>发布价格远低于市场价的虚假商品信息。</p>
                </li>
                <li>
                  <strong>钓鱼链接诈骗</strong>
                  <p>发送虚假链接，窃取账号密码或个人信息。</p>
                </li>
                <li>
                  <strong>身份冒充诈骗</strong>
                  <p>冒充平台客服或工作人员，要求提供账号信息。</p>
                </li>
              </ul>
            </div>

            <div class="scam-card">
              <h3 class="scam-title">如何防范</h3>
              <ul class="scam-list prevention">
                <li>
                  <el-icon><Select /></el-icon>
                  <span>坚持当面交易，拒绝任何形式的提前付款要求</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>对价格异常便宜的商品保持警惕</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>不点击来历不明的链接</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>平台客服不会主动索要密码和验证码</span>
                </li>
                <li>
                  <el-icon><Select /></el-icon>
                  <span>遇到可疑情况立即举报并联系客服</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 紧急联系 -->
        <div class="emergency-section">
          <h3 class="emergency-title">
            <el-icon><Phone /></el-icon>
            <span>遇到问题怎么办？</span>
          </h3>
          <p class="emergency-desc">
            如果你遇到欺诈、威胁或其他安全问题，请立即采取以下措施：
          </p>
          <div class="emergency-steps">
            <div class="step">
              <div class="step-num">1</div>
              <p>停止交易，保留证据</p>
            </div>
            <div class="step">
              <div class="step-num">2</div>
              <p>使用平台举报功能</p>
            </div>
            <div class="step">
              <div class="step-num">3</div>
              <p>联系平台客服</p>
            </div>
            <div class="step">
              <div class="step-num">4</div>
              <p>必要时报警处理</p>
            </div>
          </div>
          <el-button type="primary" size="large" @click="goToContact">
            联系客服
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  Warning,
  ShoppingBag,
  CircleCheck,
  CircleClose,
  Lock,
  Key,
  Refresh,
  Hide,
  View,
  WarnTriangleFilled,
  Select,
  Phone
} from '@element-plus/icons-vue'

const router = useRouter()

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.safety-page {
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

// 警示卡片
.warning-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  margin-bottom: 60px;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.2);
}

.warning-icon {
  font-size: 48px;
  color: #f59e0b;
  margin-bottom: $spacing-lg;
}

.warning-title {
  font-size: 24px;
  font-weight: 700;
  color: #92400e;
  margin: 0 0 $spacing-md 0;
}

.warning-text {
  font-size: 16px;
  color: #92400e;
  line-height: 1.8;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
}

// 安全部分
.safety-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  margin-bottom: $spacing-xl;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.section-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 28px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-xl 0;

  .el-icon {
    font-size: 32px;
  }
}

// 提示网格
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
}

.tip-card {
  border: 2px solid $border-color;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
}

.tip-header {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  margin-bottom: $spacing-lg;
}

.tip-icon {
  font-size: 32px;

  &.do {
    color: #10b981;
  }

  &.dont {
    color: #ef4444;
  }
}

.tip-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0;
}

.tip-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  li {
    font-size: 15px;
    color: $text-secondary;
    line-height: 1.6;
    padding-left: $spacing-md;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: $primary-color;
      font-weight: 700;
    }
  }
}

// 安全项目
.safety-items {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.safety-item {
  display: flex;
  gap: $spacing-lg;
  padding: $spacing-lg;
  background: $bg-secondary;
  border-radius: $border-radius-lg;

  .item-icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
    border-radius: $border-radius-full;
    color: white;
    font-size: 24px;
  }

  .item-content {
    flex: 1;
  }

  .item-title {
    font-size: 18px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-sm 0;
  }

  .item-desc {
    font-size: 15px;
    color: $text-secondary;
    line-height: 1.6;
    margin: 0;
  }
}

// 诈骗卡片
.scam-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
}

.scam-card {
  border: 2px solid $border-color;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
}

.scam-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-lg 0;
}

.scam-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;

  li {
    strong {
      display: block;
      font-size: 16px;
      color: $text-primary;
      margin-bottom: $spacing-xs;
    }

    p {
      font-size: 14px;
      color: $text-secondary;
      margin: 0;
    }
  }

  &.prevention li {
    display: flex;
    align-items: flex-start;
    gap: $spacing-sm;
    font-size: 15px;
    color: $text-secondary;

    .el-icon {
      flex-shrink: 0;
      color: #10b981;
      font-size: 20px;
    }
  }
}

// 紧急联系
.emergency-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.emergency-title {
  display: inline-flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 24px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-md 0;

  .el-icon {
    font-size: 28px;
    color: $primary-color;
  }
}

.emergency-desc {
  font-size: 16px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.emergency-steps {
  display: flex;
  justify-content: center;
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-sm;

  .step-num {
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
  }

  p {
    font-size: 14px;
    color: $text-secondary;
    margin: 0;
  }
}
</style>

