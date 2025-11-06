<template>
  <div class="help-center-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">帮助中心</h1>
        <p class="page-subtitle">我们随时为你提供帮助和支持</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 快速导航 -->
        <div class="quick-nav">
          <div class="nav-card" @click="scrollTo('getting-started')">
            <el-icon class="nav-icon"><Guide /></el-icon>
            <h3 class="nav-title">新手入门</h3>
            <p class="nav-desc">快速了解平台功能</p>
          </div>
          <div class="nav-card" @click="scrollTo('account')">
            <el-icon class="nav-icon"><User /></el-icon>
            <h3 class="nav-title">账号管理</h3>
            <p class="nav-desc">账号相关问题</p>
          </div>
          <div class="nav-card" @click="scrollTo('trading')">
            <el-icon class="nav-icon"><ShoppingBag /></el-icon>
            <h3 class="nav-title">交易指南</h3>
            <p class="nav-desc">买卖流程说明</p>
          </div>
          <div class="nav-card" @click="scrollTo('safety')">
            <el-icon class="nav-icon"><Lock /></el-icon>
            <h3 class="nav-title">安全保障</h3>
            <p class="nav-desc">保护账号安全</p>
          </div>
        </div>

        <!-- 新手入门 -->
        <div id="getting-started" class="help-section">
          <h2 class="help-title">
            <el-icon><Guide /></el-icon>
            <span>新手入门</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">什么是 Swordfish？</h3>
              <p class="item-text">
                Swordfish 是一个专为大学生设计的校园二手交易平台。我们致力于为学生提供安全、便捷的二手物品交易服务，
                让闲置物品找到新主人，让每一次交易都简单可靠。
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">如何开始使用？</h3>
              <p class="item-text">
                1. <strong>注册账号</strong>：使用学校邮箱注册账号<br>
                2. <strong>完善信息</strong>：填写个人资料，上传头像<br>
                3. <strong>浏览商品</strong>：通过搜索或分类查找心仪商品<br>
                4. <strong>发布商品</strong>：拍照上传，填写详细信息<br>
                5. <strong>开始交易</strong>：与买家/卖家沟通，约定交易方式
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">平台有哪些功能？</h3>
              <p class="item-text">
                • 商品浏览与搜索<br>
                • 商品发布与管理<br>
                • 实时聊天沟通<br>
                • 信用评分系统<br>
                • 订单管理<br>
                • 收藏与关注
              </p>
            </div>
          </div>
        </div>

        <!-- 账号管理 -->
        <div id="account" class="help-section">
          <h2 class="help-title">
            <el-icon><User /></el-icon>
            <span>账号管理</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">如何修改个人信息？</h3>
              <p class="item-text">
                登录后点击右上角头像，选择"个人中心"，即可编辑你的个人信息、头像、联系方式等。
                修改后记得点击保存按钮。
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">如何修改密码？</h3>
              <p class="item-text">
                在个人中心-账号设置中，点击"修改密码"，输入当前密码和新密码即可。
                为了账号安全，建议定期更换密码。
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">如何提升信用分数？</h3>
              <p class="item-text">
                信用分数基于以下因素：<br>
                • 完成交易次数<br>
                • 买卖双方评价<br>
                • 账号活跃度<br>
                • 违规记录<br>
                保持良好的交易记录和行为规范可以提升信用分数。
              </p>
            </div>
          </div>
        </div>

        <!-- 交易指南 -->
        <div id="trading" class="help-section">
          <h2 class="help-title">
            <el-icon><ShoppingBag /></el-icon>
            <span>交易指南</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">如何购买商品？</h3>
              <p class="item-text">
                1. 浏览商品，查看详细信息<br>
                2. 点击"联系卖家"与卖家沟通<br>
                3. 确认商品细节和价格<br>
                4. 约定见面时间和地点<br>
                5. 当面验货付款<br>
                6. 交易完成后给予评价
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">如何发布商品？</h3>
              <p class="item-text">
                1. 点击"发布商品"按钮<br>
                2. 上传清晰的商品照片（至少3张）<br>
                3. 填写商品标题、描述、价格<br>
                4. 选择商品分类和成色<br>
                5. 提交审核<br>
                6. 审核通过后商品自动上架
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">商品审核需要多久？</h3>
              <p class="item-text">
                通常在24小时内完成审核。我们会检查商品信息是否完整、图片是否清晰、描述是否准确。
                如果审核未通过，会通过站内消息告知原因。
              </p>
            </div>
          </div>
        </div>

        <!-- 安全保障 -->
        <div id="safety" class="help-section">
          <h2 class="help-title">
            <el-icon><Lock /></el-icon>
            <span>安全保障</span>
          </h2>
          <div class="help-content">
            <div class="help-item">
              <h3 class="item-title">如何保障交易安全？</h3>
              <p class="item-text">
                • 建议在校园内公共场所交易<br>
                • 当面验货后再付款<br>
                • 不要提前转账<br>
                • 保留聊天记录和交易凭证<br>
                • 注意保护个人隐私信息<br>
                • 遇到可疑情况及时举报
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">如何举报违规行为？</h3>
              <p class="item-text">
                如果发现违规商品或用户，请点击商品或用户页面的"举报"按钮，
                选择举报原因并提交。我们会在24小时内处理并给予反馈。
              </p>
            </div>
            <div class="help-item">
              <h3 class="item-title">遇到纠纷怎么办？</h3>
              <p class="item-text">
                如果交易过程中产生纠纷，请先尝试与对方沟通解决。
                如果无法解决，可以联系平台客服介入处理，我们会根据实际情况协助解决。
              </p>
            </div>
          </div>
        </div>

        <!-- 联系我们 -->
        <div class="contact-section">
          <h3 class="contact-title">还有其他问题？</h3>
          <p class="contact-desc">
            如果以上内容无法解决你的问题，欢迎联系我们的客服团队
          </p>
          <div class="contact-buttons">
            <el-button type="primary" size="large" @click="goToFAQ">
              查看常见问题
            </el-button>
            <el-button size="large" @click="goToContact">
              联系客服
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
  Guide,
  User,
  ShoppingBag,
  Lock
} from '@element-plus/icons-vue'

const router = useRouter()

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const goToFAQ = () => {
  router.push('/faq')
}

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.help-center-page {
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

// 快速导航
.quick-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: $spacing-lg;
  margin-bottom: 80px;
}

.nav-card {
  background: white;
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 102, 140, 0.15);

    .nav-icon {
      transform: scale(1.1);
    }
  }
}

.nav-icon {
  font-size: 48px;
  color: $primary-color;
  margin-bottom: $spacing-md;
  transition: transform 0.3s ease;
}

.nav-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-xs 0;
}

.nav-desc {
  font-size: 14px;
  color: $text-secondary;
  margin: 0;
}

// 帮助部分
.help-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  margin-bottom: $spacing-xl;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.help-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: 28px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-xl 0;
  padding-bottom: $spacing-lg;
  border-bottom: 2px solid $border-color-light;

  .el-icon {
    font-size: 32px;
  }
}

.help-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.help-item {
  .item-title {
    font-size: 18px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-md 0;
  }

  .item-text {
    font-size: 15px;
    line-height: 1.8;
    color: $text-secondary;
    margin: 0;

    strong {
      color: $primary-color;
      font-weight: 600;
    }
  }
}

// 联系区域
.contact-section {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 102, 140, 0.08);
}

.contact-title {
  font-size: 24px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-md 0;
}

.contact-desc {
  font-size: 16px;
  color: $text-secondary;
  margin: 0 0 $spacing-xl 0;
}

.contact-buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}
</style>

