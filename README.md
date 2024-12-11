# Programmer Homepage

> 一个优雅的程序员个人主页模板，展示你的项目作品和 GitHub 足迹

<p align="center">
  <a href="https://home-page-six-rho.vercel.app/">🚀 在线预览</a> •
  <a href="#核心功能">💡 功能</a> •
  <a href="#快速开始">🚀 快速开始</a> •
  <a href="#项目配置">⚙️ 配置</a>
</p>

## 📋 项目介绍

Programmer Homepage 是一个专为程序员设计的个人主页模板，它不仅仅是一个简单的作品集展示，更是你技术影响力的数字画像。项目集成了 GitHub 活动追踪、项目数据统计、JetBrains 插件分析等特性，让你的个人主页更加丰富和专业。

## 💡 核心功能

### 🎯 智能项目展示

- 多维度项目展示（描述、亮点、技术栈）
- 项目标签智能筛选系统
- GitHub 仓库数据实时同步
- JetBrains 插件数据统计（下载量、评分、评论）
- 优雅的展开/收起交互

### 📊 GitHub 活动墙

- 实时同步个人 GitHub 动态
- 支持多种活动类型可视化
- 精美的时间轴布局设计
- 活动数据自动更新

### 🎨 现代化设计

- 响应式布局，完美适配多端
- 简约而专业的视觉风格
- 流畅的页面过渡动画
- 优秀的用户交互体验

## 🛠 技术架构

- **核心框架**: Next.js 14 (App Router)
- **UI 框架**:
  - Tailwind CSS
  - Shadcn/UI 组件库
- **开发语言**: TypeScript
- **数据集成**:
  - GitHub REST API
  - JetBrains Marketplace API
- **部署方案**: Vercel

## 🚀 快速开始

### 1️⃣ 克隆项目

```bash
git clone https://github.com/HMYDK/HomePage.git
cd programmer-homepage
```

### 2️⃣ 安装依赖

```bash
npm install
```

### 3️⃣ 启动开发服务器

```bash
npm run dev
```

## ⚙️ 项目配置

### 个人信息配置

编辑 `config/user.ts` 文件，包含以下配置项：

```typescript
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

### Vercel 部署

1. Fork 本仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置环境变量
4. 自动部署完成

## 🤝 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目采用 MIT 协议开源，详见 [LICENSE](LICENSE) 文件。
