# Programmer Homepage

> 一个现代化的程序员个人主页模板，基于 Next.js 14 构建，展示你的项目作品和技术影响力

<p align="center">
  <a href="https://home-page-six-rho.vercel.app/">🚀 在线预览</a> •
  <a href="#核心功能">💡 功能</a> •
  <a href="#快速开始">🚀 快速开始</a> •
  <a href="#项目配置">⚙️ 配置</a>
</p>

## 📋 项目介绍

Programmer Homepage 是一个专为程序员设计的个人主页模板，采用最新的 Next.js 14 App Router 架构。它不仅提供了优雅的作品集展示功能，还集成了多个实用的技术特性，帮助你打造专业的个人品牌形象。

## 💡 核心功能

### 🎯 智能项目展示

- 多维度项目展示（描述、亮点、技术栈）
- 项目标签智能筛选系统
- GitHub 仓库数据实时同步
- JetBrains 插件数据统计（下载量、评分、评论）
- 优雅的展开/收起交互
- 响应式卡片布局

### 📊 数据可视化

- GitHub 活动实时同步
- JetBrains 插件统计图表
- 优雅的数据加载动画
- 自动数据更新机制

### 🎨 用户体验

- 深色/浮色主题切换
- 流畅的页面过渡动画
- 无限滚动加载
- 响应式设计，完美适配移动端
- 懒加载图片优化
- 返回顶部功能
- 错误边界处理

### 🛡️ 性能优化

- 基于 App Router 的服务端渲染
- 组件级别的错误处理
- 智能的数据缓存策略
- 图片自动优化
- 路由预加载

## 🛠 技术架构

- **框架**:

  - Next.js 14 (App Router)
  - React 18
  - TypeScript

- **样式方案**:

  - Tailwind CSS
  - CSS Modules
  - Shadcn/UI 组件库

- **状态管理**:

  - React Hooks
  - Context API

- **数据集成**:

  - GitHub REST API
  - JetBrains Marketplace API

- **开发工具**:

  - ESLint
  - Prettier
  - TypeScript
  - PostCSS

- **部署方案**:
  - Vercel (推荐)
  - Docker 支持

## 🚀 快速开始

### 1️⃣ 克隆项目

```bash
git clone https://github.com/HMYDK/HomePage.git
cd programmer-homepage
```

### 2️⃣ 安装依赖

```bash
npm install
# 或者使用 pnpm
pnpm install
```

### 3️⃣ 环境配置

创建 `.env.local` 文件并配置以下环境变量：

```env
GITHUB_TOKEN=your_github_token
JETBRAINS_TOKEN=your_jetbrains_token  # 可选
```

### 4️⃣ 启动开发服务器

```bash
npm run dev
# 或者使用 pnpm
pnpm dev
```

## ⚙️ 项目配置

### 个人信息配置

编辑 `config/user.ts` 文件：

```typescript
interface UserConfig {
  name: string; // 你的名字
  title: string; // 职位头衔
  description: string; // 个人简介
  avatar: string; // 头像URL
  social: {
    github: string; // GitHub 主页
    twitter?: string; // Twitter 主页
    linkedin?: string; // LinkedIn 主页
  };
  projects: Project[]; // 项目列表
}

interface Project {
  title: string; // 项目名称
  description: string; // 简介
  longDescription?: string[]; // 详细描述
  status?: string; // 项目状态
  tags: string[]; // 技术标签
  icon: any; // 项目图标
  iconColor: string; // 图标颜色
  links: {
    github?: string; // GitHub 仓库
    demo?: string; // 演示地址
    docs?: string; // 文档地址
    jetbrains?: {
      pluginId: string; // JetBrains 插件 ID
    };
  };
  highlights?: string[]; // 项目亮点
}
```

## 🚀 部署指南

### Vercel 部署（推荐）

1. Fork 本仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置环境变量
4. 自动部署完成

### Docker 部署

```bash
# 构建镜像
docker build -t programmer-homepage .

# 运行容器
docker run -p 3000:3000 programmer-homepage
```

## 🤝 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目采用 MIT 协议开源，详见 [LICENSE](LICENSE) 文件。

## 🙏 鸣谢

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Vercel](https://vercel.com)
