# Programmer Homepage

一个现代化的程序员个人主页，集成了 GitHub 活动、项目展示和 JetBrains 插件统计等功能。

🔗 [在线预览](https://home-page-six-rho.vercel.app/)

## 特性

### 项目展示

- 支持标签筛选项目
- 实时获取 GitHub 仓库 stars 数据
- 集成 JetBrains 插件统计（下载量、评分、评论）
- 项目详情展示（描述、亮点、技术栈）
- 支持展开/收起详细信息

### GitHub 活动

- 实时展示最近的 GitHub 活动
- 支持多种活动类型展示
- 美观的时间线布局

### 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS + Shadcn/UI
- **类型检查**: TypeScript
- **数据获取**:
  - GitHub API
  - JetBrains Plugin Repository API
- **部署**: Vercel

## 快速开始

1. 克隆仓库

```bash
git clone https://github.com/yourusername/programmer-homepage.git
cd programmer-homepage
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件，添加必要的环境变量：

- `GITHUB_TOKEN`: GitHub 个人访问令牌

  1. 访问 https://github.com/settings/tokens
  2. 点击 "Generate new token (classic)"
  3. 选择以下权限：
     - `public_repo`
     - `read:user`
     - `user:email`
  4. 生成 token 并复制到 `.env.local`

- `NEXT_PUBLIC_GITHUB_USERNAME`: 你的 GitHub 用户名

4. 修改个人信息
   编辑 `config/user.ts` 文件，更新个人信息、项目列表等。

5. 启动开发服务器

```bash
npm run dev
```

## 配置说明

### 项目配置 (`config/user.ts`)

```typescript
interface Project {
  title: string; // 项目标题
  description: string; // 简短描述
  longDescription?: string[]; // 详细描述（可选）
  status?: string; // 项目状态（可选）
  tags: string[]; // 技术标签
  icon: any; // 项目图标
  iconColor: string; // 图标颜色
  links: {
    // 相关链接
    github?: string; // GitHub 仓库
    demo?: string; // 演示链接
    docs?: string; // 文档链接
    jetbrains?: {
      // JetBrains 插件信息
      pluginId: string;
    };
  };
  highlights?: string[]; // 项目亮点（可选）
}
```

## 部署

项目可以轻松部署到 Vercel：

1. Fork 本仓库
2. 在 Vercel 中导入项目
3. 配置环境变量（与 `.env.local` 相同）
4. 完成部署

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可

MIT License
