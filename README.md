# 🐟 Swordfish - 校园二手交易平台

<div align="center">

![Swordfish Logo](src/assets/images/logo2.png)

**专为大学生打造的校园二手交易平台**

[![Vue 3](https://img.shields.io/badge/Vue-3.4+-brightgreen.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Element Plus](https://img.shields.io/badge/Element%20Plus-2.5+-409EFF.svg)](https://element-plus.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[在线演示](https://swordfish-demo.com) · [问题反馈](https://github.com/yourusername/swordfish-frontend/issues) · [功能建议](https://github.com/yourusername/swordfish-frontend/discussions)

</div>

---

## 📖 目录

- [项目简介](#-项目简介)
- [核心特性](#-核心特性)
- [技术栈](#-技术栈)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [功能模块](#-功能模块)
- [开发指南](#-开发指南)
- [部署说明](#-部署说明)
- [环境变量](#-环境变量)
- [常见问题](#-常见问题)
- [更新日志](#-更新日志)
- [贡献指南](#-贡献指南)
- [开源协议](#-开源协议)
- [联系我们](#-联系我们)

---

## 🎯 项目简介

**Swordfish** 是一个专为大学生打造的校园二手交易平台，致力于提供安全、便捷、可持续的二手物品交易服务。

### 🌟 项目愿景

> 让每一件闲置物品都能找到新主人，让每一次交易都简单可靠。

### 💡 核心价值

- 🎓 **学生友好**：专为大学生设计，理解学生需求
- 🔒 **安全可靠**：实名认证，信用评分，交易更放心
- 💰 **节约成本**：二手交易，省钱又环保
- 🌱 **绿色环保**：延长物品生命周期，减少资源浪费
- 🤝 **校园社交**：结识志同道合的朋友

---

## ✨ 核心特性

### 用户功能

- ✅ **用户认证**
  - 学校邮箱注册/登录
  - 实名认证系统
  - 密码找回功能
  - 安全退出登录

- ✅ **商品管理**
  - 浏览商品列表
  - 多条件搜索与筛选
  - 商品详情查看
  - 发布/编辑/下架商品
  - 多图上传（最多9张）
  - 商品收藏功能

- ✅ **交易系统**
  - 在线聊天沟通
  - 订单创建与管理
  - 交易状态追踪
  - 评价与反馈系统
  - 投诉举报机制

- ✅ **个人中心**
  - 个人资料管理
  - 我的发布/收藏
  - 订单历史记录
  - 信用分数查看
  - 账号安全设置

- ✅ **帮助支持**
  - 帮助中心
  - 常见问题（FAQ）
  - 安全提示
  - 如何使用指南
  - 在线客服

### 管理功能

- ✅ **后台管理**
  - 用户管理
  - 商品审核
  - 订单监控
  - 投诉处理
  - 数据统计

### 其他特性

- ✅ **国际化支持**：中英文切换
- ✅ **响应式设计**：完美适配移动端
- ✅ **暗黑模式**：保护眼睛（计划中）
- ✅ **离线缓存**：提升访问速度
- ✅ **实时通知**：消息即时推送

---

## 🛠️ 技术栈

### 核心框架

- **[Vue 3.4+](https://vuejs.org/)** - 渐进式 JavaScript 框架
  - Composition API
  - `<script setup>` 语法
  - TypeScript 支持

- **[TypeScript 5.3+](https://www.typescriptlang.org/)** - 类型安全的 JavaScript
- **[Vite 5.0+](https://vitejs.dev/)** - 下一代前端构建工具

### UI 框架

- **[Element Plus 2.5+](https://element-plus.org/)** - Vue 3 组件库
- **[@element-plus/icons-vue](https://element-plus.org/zh-CN/component/icon.html)** - Element Plus 图标库
- **[Sass/SCSS](https://sass-lang.com/)** - CSS 预处理器

### 状态管理与路由

- **[Pinia 2.1+](https://pinia.vuejs.org/)** - Vue 的状态管理库
- **[Vue Router 4.2+](https://router.vuejs.org/)** - Vue 官方路由管理器

### 网络请求

- **[Axios 1.6+](https://axios-http.com/)** - HTTP 客户端
- **[Socket.io-client 4.7+](https://socket.io/)** - 实时通信库

### 工具库

- **[Vue I18n 9.14+](https://vue-i18n.intlify.dev/)** - 国际化方案
- **[Day.js 1.11+](https://day.js.org/)** - 轻量级日期处理
- **[Lodash-es 4.17+](https://lodash.com/)** - 实用工具库
- **[ECharts 5.4+](https://echarts.apache.org/)** - 数据可视化
- **[vuedraggable 4.1+](https://github.com/SortableJS/vue.draggable.next)** - 拖拽排序

### 开发工具

- **[ESLint](https://eslint.org/)** - 代码检查工具
- **[Prettier](https://prettier.io/)** - 代码格式化工具
- **[Vue TSC](https://github.com/johnsoncodehk/volar)** - TypeScript 类型检查
- **[Vitest](https://vitest.dev/)** - 单元测试框架
- **[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)** - API 自动导入
- **[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)** - 组件自动导入

---

## 🚀 快速开始

### 环境要求

在开始之前，请确保你的开发环境满足以下要求：

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0（推荐）或 npm >= 9.0.0
- **Git**: 最新版本

### 安装步骤

#### 1. 克隆项目

```bash
git clone https://github.com/yourusername/swordfish-frontend.git
cd swordfish-frontend
```

#### 2. 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

#### 3. 配置环境变量

复制环境变量示例文件并修改：

```bash
cp .env.example .env.development
```

编辑 `.env.development` 文件，配置相关参数（见[环境变量](#-环境变量)章节）。

#### 4. 启动开发服务器

```bash
# 启动开发服务器（默认端口 5173）
pnpm dev

# 或指定端口
pnpm dev -- --port 3000
```

浏览器访问：http://localhost:5173

#### 5. 构建生产版本

```bash
# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

---

## 📁 项目结构

```
swordfish-frontend/
├── .vscode/                    # VS Code 配置
├── public/                     # 公共静态资源
│   └── vite.svg
├── src/
│   ├── assets/                 # 资源文件
│   │   ├── fonts/              # 字体文件
│   │   ├── icons/              # SVG 图标
│   │   └── images/             # 图片资源
│   │       ├── logo.svg
│   │       ├── logo2.png
│   │       └── top.png
│   │
│   ├── components/             # 组件目录
│   │   ├── business/           # 业务组件
│   │   │   ├── ImageUploader.vue
│   │   │   └── ProductCard.vue
│   │   ├── common/             # 通用组件
│   │   │   └── LanguageSwitcher.vue
│   │   └── layout/             # 布局组件
│   │       ├── AppHeader.vue
│   │       └── AppFooter.vue
│   │
│   ├── composables/            # 组合式函数（hooks）
│   │
│   ├── locales/                # 国际化配置
│   │   ├── zh-CN.ts            # 中文
│   │   ├── en-US.ts            # 英文
│   │   └── index.ts
│   │
│   ├── mock/                   # Mock 数据
│   │   ├── products.ts
│   │   └── users.ts
│   │
│   ├── router/                 # 路由配置
│   │   ├── routes/             # 路由模块
│   │   └── index.ts
│   │
│   ├── services/               # API 服务
│   │   └── products.ts
│   │
│   ├── store/                  # Pinia 状态管理
│   │   ├── modules/            # 状态模块
│   │   │   ├── auth.ts         # 认证状态
│   │   │   └── products.ts     # 商品状态
│   │   └── index.ts
│   │
│   ├── styles/                 # 全局样式
│   │   ├── global.scss         # 全局样式
│   │   └── variables.scss      # SCSS 变量
│   │
│   ├── types/                  # TypeScript 类型定义
│   │   ├── auth.ts
│   │   ├── common.ts
│   │   ├── orders.ts
│   │   ├── products.ts
│   │   ├── auto-imports.d.ts   # 自动导入类型
│   │   └── components.d.ts     # 组件类型
│   │
│   ├── utils/                  # 工具函数
│   │   ├── constants.ts        # 常量定义
│   │   ├── format.ts           # 格式化函数
│   │   ├── request.ts          # Axios 封装
│   │   └── storage.ts          # 本地存储
│   │
│   ├── views/                  # 页面视图
│   │   ├── admin/              # 管理后台
│   │   ├── auth/               # 认证页面
│   │   │   ├── Login.vue
│   │   │   └── Register.vue
│   │   ├── chat/               # 聊天页面
│   │   │   └── ChatPage.vue
│   │   ├── home/               # 首页
│   │   │   └── HomePage.vue
│   │   ├── info/               # 信息页面
│   │   │   ├── AboutPage.vue          # 关于我们
│   │   │   ├── ContactPage.vue        # 联系我们
│   │   │   ├── FAQPage.vue            # 常见问题
│   │   │   ├── HelpCenterPage.vue     # 帮助中心
│   │   │   ├── HowItWorksPage.vue     # 如何使用
│   │   │   ├── PrivacyPage.vue        # 隐私政策
│   │   │   ├── SafetyPage.vue         # 安全提示
│   │   │   └── TermsPage.vue          # 服务条款
│   │   ├── orders/             # 订单页面
│   │   │   └── OrderList.vue
│   │   ├── products/           # 商品页面
│   │   │   ├── components/     # 商品相关组件
│   │   │   │   ├── ProductActions.vue
│   │   │   │   ├── ProductBasicInfo.vue
│   │   │   │   ├── ProductDescription.vue
│   │   │   │   ├── ProductImages.vue
│   │   │   │   └── SellerCard.vue
│   │   │   ├── ProductDetail.vue      # 商品详情
│   │   │   ├── ProductList.vue        # 商品列表
│   │   │   └── PublishProduct.vue     # 发布商品
│   │   ├── profile/            # 个人中心
│   │   │   └── ProfilePage.vue
│   │   └── NotFound.vue        # 404 页面
│   │
│   ├── App.vue                 # 根组件
│   └── main.ts                 # 应用入口
│
├── Documents/                  # 项目文档
│   ├── 第一阶段开发报告.md
│   ├── 第二阶段开发报告.md
│   ├── 第三阶段开发报告-中英文切换.md
│   ├── 第四阶段开发报告-Showiix.md
│   ├── 第五阶段开发报告-商品详情页.md
│   ├── 第六阶段开发完成报告.md
│   ├── 第七阶段开发完成报告-主页优化.md
│   ├── 第八阶段开发完成报告-页脚部分前端UI.md
│   ├── API接口文档.md
│   ├── 前端技术策划书.md
│   ├── 后端技术策划书.md
│   └── ...
│
├── .env.example                # 环境变量示例
├── .env.development            # 开发环境变量
├── .env.production             # 生产环境变量
├── .eslintrc.cjs               # ESLint 配置
├── .gitignore                  # Git 忽略文件
├── .prettierrc                 # Prettier 配置
├── docker-compose.yml          # Docker Compose 配置
├── Dockerfile                  # Docker 配置
├── index.html                  # HTML 入口
├── nginx.conf                  # Nginx 配置
├── openapi.yaml                # OpenAPI 规范
├── package.json                # 项目依赖配置
├── tsconfig.json               # TypeScript 配置
├── tsconfig.node.json          # Node TypeScript 配置
├── vite.config.ts              # Vite 配置
└── README.md                   # 项目说明文档
```

---

## 🎨 功能模块

### 1. 首页模块

**路径**: `/`

**功能**：
- Hero 区域展示
- 平台特色介绍
- CTA 行动号召
- 响应式设计

**技术亮点**：
- 渐变背景动画
- 浮动 Logo 效果
- 平滑滚动交互

---

### 2. 用户认证模块

**路径**: `/login`, `/register`

**功能**：
- 用户登录/注册
- 表单验证
- 密码加密传输
- Token 管理
- 记住登录状态

**技术实现**：
```typescript
// 使用 Pinia 管理认证状态
import { useAuthStore } from '@/store/modules/auth'

const authStore = useAuthStore()
await authStore.login(credentials)
```

---

### 3. 商品模块

#### 3.1 商品列表

**路径**: `/products`

**功能**：
- 商品网格展示
- 搜索功能
- 分类筛选
- 价格区间筛选
- 排序功能（价格、时间）
- 分页加载

#### 3.2 商品详情

**路径**: `/products/:id`

**功能**：
- 商品图片轮播
- 商品基本信息
- 商品详细描述
- 卖家信息卡片
- 相关商品推荐
- 收藏功能
- 联系卖家

**组件结构**：
```
ProductDetail.vue
├── ProductImages.vue      # 图片展示
├── ProductBasicInfo.vue   # 基本信息
├── ProductDescription.vue # 详细描述
├── ProductActions.vue     # 操作按钮
└── SellerCard.vue         # 卖家信息
```

#### 3.3 发布商品

**路径**: `/products/publish`

**功能**：
- 多图上传（最多9张）
- 拖拽排序
- 图片预览
- 商品信息填写
- 表单验证
- 草稿保存

**技术亮点**：
```vue
<ImageUploader
  v-model="images"
  :max-count="9"
  :max-size="5"
  accept="image/*"
/>
```

---

### 4. 聊天模块

**路径**: `/chat`

**功能**：
- 实时聊天
- 消息列表
- 未读消息提示
- 表情支持
- 图片发送
- 消息撤回

**技术实现**：
```typescript
// 使用 Socket.io 实现实时通信
import { io } from 'socket.io-client'

const socket = io(SOCKET_URL)
socket.on('message', handleMessage)
```

---

### 5. 订单模块

**路径**: `/orders`

**功能**：
- 订单列表
- 订单状态筛选
- 订单详情
- 订单评价
- 投诉举报

**订单状态**：
- 待确认
- 进行中
- 已完成
- 已取消

---

### 6. 个人中心模块

**路径**: `/profile`

**功能**：
- 个人资料编辑
- 头像上传
- 我的发布
- 我的收藏
- 交易记录
- 信用分数
- 账号设置

---

### 7. 信息页面模块

#### 7.1 关于我们

**路径**: `/about`

**内容**：
- 平台使命与愿景
- 核心价值观
- 发展历程
- 团队介绍
- 加入我们

#### 7.2 如何使用

**路径**: `/how-it-works`

**内容**：
- 买家指南（6步购买流程）
- 卖家指南（6步发布流程）
- 安全提示
- 最佳实践

#### 7.3 常见问题

**路径**: `/faq`

**功能**：
- 问题搜索
- 分类标签
- 折叠面板
- 16+ 常见问题

#### 7.4 联系我们

**路径**: `/contact`

**功能**：
- 联系方式展示
- 在线反馈表单
- 表单验证
- 提交成功提示

#### 7.5 帮助中心

**路径**: `/help`

**内容**：
- 快速导航卡片
- 新手入门
- 账号管理
- 交易指南
- 安全保障

#### 7.6 安全提示

**路径**: `/safety`

**内容**：
- 交易安全（建议做/不要做）
- 账号安全（4大措施）
- 防骗指南
- 应急流程

#### 7.7 服务条款

**路径**: `/terms`

**内容**：
- 完整的10条服务条款
- 用户权利与义务
- 平台免责声明
- 违规处理措施

#### 7.8 隐私政策

**路径**: `/privacy`

**内容**：
- 信息收集说明
- 信息使用方式
- 信息保护措施
- 用户权利说明
- Cookie 政策

---

### 8. 国际化模块

**功能**：
- 中英文切换
- 语言偏好记忆
- 动态路由标题

**使用方式**：
```vue
<template>
  <h1>{{ $t('home.title') }}</h1>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 切换语言
locale.value = 'en-US'
</script>
```

---

## 💻 开发指南

### 代码规范

#### 1. 命名规范

- **文件名**: 使用 PascalCase（组件）或 camelCase（工具函数）
  ```
  ✅ ProductCard.vue
  ✅ useAuth.ts
  ❌ product-card.vue
  ❌ use-auth.ts
  ```

- **组件名**: 使用 PascalCase
  ```vue
  <script setup lang="ts">
  import ProductCard from '@/components/business/ProductCard.vue'
  </script>
  ```

- **变量名**: 使用 camelCase
  ```typescript
  const userName = 'John'
  const productList = []
  ```

- **常量名**: 使用 UPPER_SNAKE_CASE
  ```typescript
  const API_BASE_URL = 'https://api.example.com'
  const MAX_FILE_SIZE = 5 * 1024 * 1024
  ```

#### 2. 代码风格

项目使用 **ESLint** + **Prettier** 自动格式化：

```bash
# 检查代码
pnpm lint

# 修复代码
pnpm lint --fix

# 格式化代码
pnpm format
```

#### 3. TypeScript 规范

- 所有函数都应标注类型
- 优先使用 interface 而不是 type
- 避免使用 any

```typescript
// ✅ 推荐
interface Product {
  id: number
  name: string
  price: number
}

const getProduct = (id: number): Promise<Product> => {
  return api.get(`/products/${id}`)
}

// ❌ 不推荐
const getProduct = (id: any): any => {
  return api.get(`/products/${id}`)
}
```

#### 4. 组件规范

使用 Composition API + `<script setup>`:

```vue
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Props
const props = defineProps<{
  title: string
  count?: number
}>()

// Emits
const emit = defineEmits<{
  change: [value: string]
}>()

// State
const loading = ref(false)

// Computed
const displayTitle = computed(() => {
  return `${props.title} (${props.count || 0})`
})

// Methods
const handleClick = () => {
  emit('change', 'new value')
}

// Lifecycle
onMounted(() => {
  // 初始化
})
</script>

<template>
  <div class="component">
    <h1>{{ displayTitle }}</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>

<style scoped lang="scss">
.component {
  padding: 20px;
}
</style>
```

### Git 提交规范

遵循 **Conventional Commits** 规范：

```bash
# 格式
<type>(<scope>): <subject>

<body>

<footer>
```

**类型 (type)**：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例**：
```bash
feat(products): 添加商品搜索功能

- 添加搜索输入框
- 实现关键词搜索
- 添加搜索历史记录

Closes #123
```

### 分支管理

```
main          # 主分支，用于生产环境
├── develop   # 开发分支
    ├── feature/xxx    # 功能分支
    ├── fix/xxx        # 修复分支
    └── refactor/xxx   # 重构分支
```

**工作流程**：
1. 从 `develop` 创建功能分支
2. 开发完成后提交 PR
3. Code Review 通过后合并到 `develop`
4. 测试通过后合并到 `main`

---

## 🚢 部署说明

### Docker 部署

#### 1. 构建镜像

```bash
docker build -t swordfish-frontend .
```

#### 2. 运行容器

```bash
docker run -d \
  -p 80:80 \
  --name swordfish-frontend \
  swordfish-frontend
```

#### 3. 使用 Docker Compose

```bash
docker-compose up -d
```

### Nginx 部署

#### 1. 构建项目

```bash
pnpm build
```

#### 2. 配置 Nginx

参考 `nginx.conf` 文件配置。

#### 3. 部署到服务器

```bash
# 上传 dist 目录到服务器
scp -r dist/* user@server:/var/www/swordfish/

# 重启 Nginx
sudo systemctl restart nginx
```

### Vercel 部署

1. 在 Vercel 导入项目
2. 配置构建命令：`pnpm build`
3. 配置输出目录：`dist`
4. 点击部署

### GitHub Pages 部署

```bash
# 安装 gh-pages
pnpm add -D gh-pages

# 在 package.json 添加脚本
"deploy": "pnpm build && gh-pages -d dist"

# 部署
pnpm deploy
```

---

## 🔧 环境变量

### 开发环境 (.env.development)

```env
# 应用标题
VITE_APP_TITLE=Swordfish 校园二手交易平台

# API 基础 URL
VITE_API_BASE_URL=http://localhost:3000/api

# WebSocket URL
VITE_SOCKET_URL=http://localhost:3001

# 上传 URL
VITE_UPLOAD_URL=http://localhost:3000/uploads

# 是否开启 Mock
VITE_USE_MOCK=true

# 是否开启代理
VITE_USE_PROXY=true
```

### 生产环境 (.env.production)

```env
# 应用标题
VITE_APP_TITLE=Swordfish 校园二手交易平台

# API 基础 URL
VITE_API_BASE_URL=https://api.swordfish.com/api

# WebSocket URL
VITE_SOCKET_URL=https://ws.swordfish.com

# 上传 URL
VITE_UPLOAD_URL=https://cdn.swordfish.com/uploads

# 是否开启 Mock
VITE_USE_MOCK=false

# 是否开启代理
VITE_USE_PROXY=false
```

### 在代码中使用

```typescript
// 获取环境变量
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

// 判断环境
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
```

---

## ❓ 常见问题

### 1. 安装依赖失败

**问题**: `pnpm install` 报错

**解决方案**:
```bash
# 清除缓存
pnpm store prune

# 删除 node_modules
rm -rf node_modules

# 重新安装
pnpm install
```

### 2. 开发服务器启动失败

**问题**: 端口被占用

**解决方案**:
```bash
# 指定其他端口
pnpm dev -- --port 3000

# 或修改 vite.config.ts
server: {
  port: 3000
}
```

### 3. TypeScript 类型错误

**问题**: 导入第三方库时类型报错

**解决方案**:
```bash
# 安装类型定义
pnpm add -D @types/xxx

# 或在 tsconfig.json 添加
"skipLibCheck": true
```

### 4. 图片无法显示

**问题**: 开发环境图片正常，生产环境无法显示

**解决方案**:
```vue
<!-- 使用 new URL 方式导入 -->
<img :src="getImageUrl('logo.png')" />

<script setup lang="ts">
const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}
</script>
```

### 5. 路由 404 错误

**问题**: 刷新页面后出现 404

**解决方案**:

Nginx 配置添加：
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 6. API 跨域问题

**问题**: 本地开发时 API 请求跨域

**解决方案**:

在 `vite.config.ts` 配置代理：
```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

---

## 📝 更新日志

### v1.0.0 (2024-11-06)

#### 新增功能
- ✨ 完整的用户认证系统
- ✨ 商品浏览、搜索、发布功能
- ✨ 商品详情页面
- ✨ 实时聊天系统
- ✨ 订单管理功能
- ✨ 个人中心
- ✨ 中英文国际化
- ✨ 8个信息页面（关于、帮助、FAQ等）
- ✨ 响应式设计

#### 技术优化
- 🎨 统一设计风格和品牌色
- 🚀 优化首页加载速度
- 🔧 完善类型定义
- 📱 移动端适配

#### 文档完善
- 📚 添加详细的开发文档
- 📚 完善 API 接口文档
- 📚 8个阶段开发报告

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. **Fork 项目**
   ```bash
   # Fork 到你的 GitHub 账号
   # 然后克隆到本地
   git clone https://github.com/your-username/swordfish-frontend.git
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **提交代码**
   ```bash
   git add .
   git commit -m "feat: 添加某个功能"
   ```

4. **推送分支**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **创建 Pull Request**
   - 在 GitHub 上创建 PR
   - 详细描述你的更改
   - 等待 Code Review

### 贡献类型

- 🐛 **Bug 修复**: 修复已知问题
- ✨ **新功能**: 添加新功能
- 📝 **文档**: 改进文档
- 🎨 **样式**: UI/UX 优化
- ♻️ **重构**: 代码重构
- ⚡️ **性能**: 性能优化
- ✅ **测试**: 添加测试

### Code Review 标准

- ✅ 代码符合项目规范
- ✅ 通过所有测试
- ✅ 有清晰的提交信息
- ✅ 有必要的文档说明
- ✅ 没有明显的性能问题

---

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。

```
MIT License

Copyright (c) 2024 SwordFish Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 联系我们

### 开发团队

- **项目负责人**: Showiix
- **邮箱**: 2138757206@qq.com
- **微信**: aa13717132345
- **地址**: 华南师范大学南海校区

### 相关链接

- 🌐 **官网**: [https://swordfish.com](https://swordfish.com)
- 💻 **GitHub**: [https://github.com/yourusername/swordfish-frontend](https://github.com/yourusername/swordfish-frontend)
- 📖 **文档**: [https://docs.swordfish.com](https://docs.swordfish.com)
- 🐛 **问题反馈**: [GitHub Issues](https://github.com/yourusername/swordfish-frontend/issues)
- 💬 **讨论区**: [GitHub Discussions](https://github.com/yourusername/swordfish-frontend/discussions)

### 社交媒体

- 微信公众号: SwordfishPlatform
- 微博: @Swordfish校园二手
- B站: Swordfish官方

---

## 🙏 致谢

感谢以下优秀的开源项目：

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Element Plus](https://element-plus.org/) - Vue 3 组件库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Pinia](https://pinia.vuejs.org/) - Vue 状态管理
- [Vue Router](https://router.vuejs.org/) - Vue 路由

感谢所有为本项目做出贡献的开发者！

---

## ⭐ Star History

如果这个项目对你有帮助，请给我们一个 ⭐️！

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/swordfish-frontend&type=Date)](https://star-history.com/#yourusername/swordfish-frontend&Date)

---

<div align="center">

**Made with ❤️ for students by SwordFish Team**

[⬆ 回到顶部](#-swordfish---校园二手交易平台)

</div>
