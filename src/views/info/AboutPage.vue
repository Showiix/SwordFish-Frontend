<template>
  <div class="about-page">
    <!-- Hero 区域 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-subtitle">了解 Swordfish 的故事与使命</p>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="page-content">
      <div class="container">
        <!-- 使命愿景 -->
        <div class="content-section">
          <div class="section-icon">
            <el-icon><Aim /></el-icon>
          </div>
          <h2 class="section-title">我们的使命</h2>
          <p class="section-text">
            Swordfish 致力于为大学生打造一个安全、便捷的二手交易平台。
            我们相信，每一件闲置物品都值得被珍惜，每一次交易都应该简单可靠。
            通过技术创新和社区建设，我们让校园内的资源得到更好的流通和利用。
          </p>
        </div>

        <!-- 核心价值观 -->
        <div class="content-section">
          <div class="section-icon">
            <el-icon><Medal /></el-icon>
          </div>
          <h2 class="section-title">核心价值观</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
                <el-icon><CircleCheck /></el-icon>
              </div>
              <h3 class="value-title">诚信为本</h3>
              <p class="value-desc">建立基于信用的交易体系，让每一笔交易都值得信赖</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <el-icon><User /></el-icon>
              </div>
              <h3 class="value-title">用户至上</h3>
              <p class="value-desc">以用户需求为导向，持续优化产品体验</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <el-icon><Sunny /></el-icon>
              </div>
              <h3 class="value-title">绿色环保</h3>
              <p class="value-desc">倡导可持续消费，让物品发挥更大价值</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <el-icon><Connection /></el-icon>
              </div>
              <h3 class="value-title">社区共建</h3>
              <p class="value-desc">打造活跃友好的校园社区，促进交流与分享</p>
            </div>
          </div>
        </div>

        <!-- 发展历程 -->
        <div class="content-section">
          <div class="section-icon">
            <el-icon><Calendar /></el-icon>
          </div>
          <h2 class="section-title">发展历程</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">2024年 - 项目启动</h3>
                <p class="timeline-desc">基于校园二手交易需求，Swordfish 项目正式立项</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">2024年底 - 平台上线</h3>
                <p class="timeline-desc">完成核心功能开发，平台正式上线测试</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">2025年 - 持续优化</h3>
                <p class="timeline-desc">不断完善功能，提升用户体验，拓展服务范围</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 团队介绍 -->
        <div class="content-section">
          <div class="section-icon">
            <el-icon><UserFilled /></el-icon>
          </div>
          <h2 class="section-title">我们的团队</h2>
          <p class="section-text">
            我们是一群热爱技术、关注环保的大学生。
            团队成员来自计算机、设计、运营等不同专业，
            我们用自己的专业知识和热情，为校园社区创造价值。
          </p>

          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">
                <img src="@/assets/images/top.png" alt="Showiix" class="avatar-img" />
              </div>
              <h3 class="member-name">Showiix</h3>
              <p class="member-role">创始人 & 开发者</p>
              <p class="member-motto">"有一些瞬间就足够了"</p>
            </div>
          </div>
        </div>

        <!-- 联系信息 -->
        <div class="content-section cta-section">
          <h2 class="section-title">加入我们</h2>
          <p class="section-text">
            如果你也认同我们的理念，欢迎加入 Swordfish 社区。
            无论是使用我们的平台，还是加入我们的团队，我们都期待与你相遇。
          </p>
          <div class="cta-buttons">
            <el-button type="primary" size="large" @click="goToRegister">
              立即注册
            </el-button>
            <el-button size="large" @click="goToContact">
              联系我们
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
  Aim,
  Medal,
  CircleCheck,
  User,
  Sunny,
  Connection,
  Calendar,
  UserFilled
} from '@element-plus/icons-vue'

const router = useRouter()

const goToRegister = () => {
  router.push('/register')
}

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped lang="scss">
.about-page {
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

.section-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  border-radius: $border-radius-full;
  color: white;
  font-size: 28px;
  margin-bottom: $spacing-lg;
  box-shadow: 0 8px 24px rgba(113, 196, 239, 0.3);
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: $primary-color;
  margin: 0 0 $spacing-lg 0;
}

.section-text {
  font-size: 18px;
  line-height: 1.8;
  color: $text-secondary;
  max-width: 800px;
  margin: 0 auto;
}

// 价值观网格
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
  margin-top: $spacing-xl;
}

.value-card {
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

.value-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
  border-radius: $border-radius-full;
  color: white;
  font-size: 24px;
  margin-bottom: $spacing-md;
}

.value-title {
  font-size: 20px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 $spacing-sm 0;
}

.value-desc {
  font-size: 15px;
  line-height: 1.6;
  color: $text-secondary;
  margin: 0;
}

// 时间线
.timeline {
  position: relative;
  padding-left: 40px;
  margin-top: $spacing-xl;

  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background: linear-gradient(to bottom, #71c4ef, #b6e4fa);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: $spacing-xl;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-dot {
  position: absolute;
  left: -35px;
  top: 5px;
  width: 20px;
  height: 20px;
  background: white;
  border: 3px solid #71c4ef;
  border-radius: $border-radius-full;
  box-shadow: 0 0 0 4px rgba(113, 196, 239, 0.2);
}

.timeline-content {
  background: white;
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
}

.timeline-title {
  font-size: 18px;
  font-weight: 600;
  color: $primary-color;
  margin: 0 0 $spacing-sm 0;
}

.timeline-desc {
  font-size: 15px;
  line-height: 1.6;
  color: $text-secondary;
  margin: 0;
}

// 团队成员
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
  margin-top: $spacing-xl;
}

.team-member {
  background: white;
  padding: $spacing-2xl;
  border-radius: $border-radius-lg;
  box-shadow: 0 2px 8px rgba(0, 102, 140, 0.06);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 102, 140, 0.15);

    .member-avatar .avatar-img {
      transform: scale(1.1);
    }
  }
}

.member-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: $spacing-lg;

  .avatar-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;
    box-shadow: 0 8px 24px rgba(113, 196, 239, 0.3);
  }

  .avatar {
    background: linear-gradient(135deg, #71c4ef 0%, #b6e4fa 100%);
    color: white;
    font-size: 32px;
    font-weight: 700;
    transition: transform 0.3s ease;
    box-shadow: 0 8px 24px rgba(113, 196, 239, 0.3);
  }
}

.member-name {
  font-size: 22px;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $spacing-xs 0;
}

.member-role {
  font-size: 15px;
  color: $primary-color;
  font-weight: 500;
  margin: 0 0 $spacing-md 0;
}

.member-motto {
  font-size: 14px;
  color: $text-secondary;
  font-style: italic;
  line-height: 1.6;
  margin: 0;
  padding-top: $spacing-md;
  border-top: 1px solid $border-color-light;

  &::before {
    content: '"';
    color: $primary-color;
    font-size: 20px;
    font-weight: 700;
  }

  &::after {
    content: '"';
    color: $primary-color;
    font-size: 20px;
    font-weight: 700;
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

.cta-buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  margin-top: $spacing-xl;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}
</style>

