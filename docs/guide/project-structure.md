# 项目结构

## 顶层结构

```
vite-docs/
├── .github/workflows/    # GitHub Actions 工作流定义
├── .vitepress/           # VitePress 配置和主题
│   ├── config.ts         # 站点配置文件
│   └── theme/            # 主题入口（开发时为空壳）
├── docs/                 # 文档内容目录（核心！）
│   ├── index.md          # 首页
│   ├── guide/            # 指南文档
│   ├── api/              # API 参考文档
│   └── about/            # 关于页面
├── public/               # 静态资源（不经过 Vite 处理）
├── index.html            # HTML 入口模板
├── package.json          # 项目依赖配置
└── vite.config.js        # Vite 构建配置
```

## docs/ 目录详解

这是公开仓库中唯一需要频繁修改的目录。每个 `.md` 文件都会生成一个独立的页面。

```
docs/
├── index.md              # 首页（特殊，支持 YAML frontmatter 的 hero/features）
├── guide/
│   ├── introduction.md   # 介绍
│   ├── installation.md   # 安装配置
│   ├── project-structure.md  # 项目结构
│   ├── theme-customization.md  # 主题定制
│   ├── dual-repo-architecture.md  # 双仓架构
│   └── cicd-pipeline.md  # CI/CD 流水线
├── api/
│   ├── config.md         # 配置选项
│   ├── components.md     # 组件 API
│   └── plugins.md        # 插件系统
└── about/
    ├── introduction.md
    ├── contributing.md
    └── license.md
```

## .vitepress/theme/ 目录说明

> **重要**：在本地开发时，这个目录是空壳。实际的主题文件在私有仓库中，由 CI/CD 自动同步。

本地开发时如何预览主题？有两种方式：

### 方式一：手动复制（推荐用于本地调试）

```bash
# 从私有仓库下载主题文件
gh repo clone hpp-bot/vite-docs-theme /tmp/theme-backup
cp -r /tmp/theme-backup/.vitepress/theme/* .vitepress/theme/
```

### 方式二：使用 mock 样式

在 `.vitepress/theme/style.css` 中已经包含了一套基础样式，即使没有私有仓库也能正常预览。

## public/ 目录

存放不需要经过构建处理的静态资源，如图片、图标等。这些文件会直接复制到构建产物的根目录。

```
public/
├── vite.svg              # Vite logo
└── favicon.ico           # 网站图标
```

## .github/workflows/ 目录

包含两个 workflow 文件：

- `deploy.yml` — 主部署流程：当 docs/ 变化时触发构建和部署
- `sync-theme.yml` — 主题同步流程：从私有仓库拉取最新主题文件
