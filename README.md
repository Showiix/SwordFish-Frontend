# Swordfish - 校园二手交易平台

> Your student marketplace for second-hand treasures

## 项目简介

Swordfish 是一个专为大学生打造的校园二手交易平台,提供安全、便捷、可持续的二手物品交易服务。

## 技术栈

- **前端框架**: Vue 3.4+ (Composition API)
- **构建工具**: Vite 5.0+
- **UI组件库**: Element Plus 2.5+
- **状态管理**: Pinia 2.1+
- **路由管理**: Vue Router 4.2+
- **HTTP客户端**: Axios 1.6+
- **实时通信**: Socket.io-client 4.7+
- **数据可视化**: ECharts 5.4+
- **样式预处理**: Sass/SCSS
- **类型检查**: TypeScript 5.3+

## 功能特性

- ✅ 用户认证与授权
- ✅ 商品浏览与搜索
- ✅ 商品发布与管理
- ✅ 实时聊天系统
- ✅ 订单管理
- ✅ 评价系统
- ✅ 信用积分体系
- ✅ 投诉处理机制
- ✅ 后台管理系统

## 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+ (推荐) 或 npm/yarn

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发环境

```bash
# 启动开发服务器
pnpm dev

# 或
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
# 构建生产版本
pnpm build

# 或
npm run build

# 预览生产版本
pnpm preview
```

### 代码规范

```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

## 项目结构

```
src/
├── assets/             # 静态资源
│   ├── images/         # 图片
│   ├── icons/          # 图标
│   └── fonts/          # 字体
├── components/         # 组件
│   ├── common/         # 通用组件
│   ├── layout/         # 布局组件
│   └── business/       # 业务组件
├── composables/        # 组合式函数
├── router/             # 路由配置
├── services/           # API服务
├── store/              # 状态管理
│   └── modules/        # 状态模块
├── styles/             # 样式文件
├── types/              # 类型定义
├── utils/              # 工具函数
├── views/              # 页面视图
│   ├── home/           # 首页
│   ├── auth/           # 认证
│   ├── products/       # 商品
│   ├── orders/         # 订单
│   ├── chat/           # 聊天
│   ├── profile/        # 个人中心
│   └── admin/          # 管理后台
├── App.vue             # 根组件
└── main.ts             # 入口文件
```

## 环境变量

创建 `.env.development` 和 `.env.production` 文件:

```env
# API基础URL
VITE_API_BASE_URL=http://localhost:3000/api

# WebSocket URL
VITE_SOCKET_URL=http://localhost:3001

# 上传URL
VITE_UPLOAD_URL=http://localhost:3000/uploads
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

MIT License

## 联系方式

- 项目地址: [GitHub](https://github.com/yourusername/swordfish-frontend)
- 问题反馈: [Issues](https://github.com/yourusername/swordfish-frontend/issues)

---

Made with ❤️ for students by SwordFish Team

