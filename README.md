# ViteDocs - 扁平化二次元风格文档站

> 双仓架构 · 公开内容 · 私有主题 · GitHub Pages 自动部署

![GitHub Actions](https://github.com/hpp-bot/vite-docs/actions/workflows/deploy.yml/badge.svg)
![License](https://img.shields.io/github/license/hpp-bot/vite-docs)

## 在线预览

👉 [hpp-bot.github.io/vite-docs](https://hpp-bot.github.io/vite-docs)

## 架构设计

```
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│  公开仓库         │      │  私有仓库         │      │  GitHub Pages     │
│  vite-docs       │ ←─── │  vite-docs-theme │ →─── │  (构建部署)       │
│  (docs/ 内容)    │  CI  │  (.vitepress/    │      │                  │
│                  │      │   theme/ 样式)   │      │                  │
└──────────────────┘      └──────────────────┘      └──────────────────┘
```

- **公开仓库**：所有 Markdown 文档内容，任何人可 clone 和贡献
- **私有仓库**：主题样式（CSS/组件），仅维护者可修改
- **联动方式**：GitHub Actions 自动从私有仓拉取主题并构建部署

## 快速开始

```bash
# 克隆公开仓库
git clone https://github.com/hpp-bot/vite-docs.git
cd vite-docs

# 安装依赖
pnpm install

# 本地开发
pnpm dev

# 构建生产版本
pnpm build
```

## 本地预览私有主题

由于主题在私有仓库中，本地开发时需要手动同步：

```bash
# 方式1: 从私有仓库clone主题文件
gh repo clone hpp-bot/vite-docs-theme /tmp/theme
cp -r /tmp/theme/.vitepress/theme/* .vitepress/theme/

# 方式2: 直接编辑公开仓库中的主题文件（临时，下次同步会覆盖）
```

## 修改主题

1. 修改私有仓库 `vite-docs-theme` 中的 `.vitepress/theme/` 文件
2. 推送到私有仓库
3. 在公开仓库 Actions tab 中手动触发 "Sync Theme" workflow
4. 等待自动构建完成

## 修改文档

1. 直接在公开仓库的 `docs/` 目录中添加或修改 Markdown 文件
2. 通过 GitHub 网页端点击 "在 GitHub 上编辑此页" 按钮
3. 推送后自动触发部署

## 项目结构

```
vite-docs/
├── .github/workflows/   # CI/CD 配置
│   ├── deploy.yml       # 构建部署流程
│   └── sync-theme.yml   # 主题同步流程
├── .vitepress/
│   ├── config.ts        # VitePress 配置
│   └── theme/           # 主题（由CI自动填充）
├── docs/                # 文档内容（核心！）
│   ├── index.md
│   ├── guide/
│   ├── api/
│   └── about/
├── package.json
└── README.md
```

## 许可证

MIT
