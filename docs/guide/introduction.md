# 介绍

ViteDocs 是一个基于 VitePress 构建的扁平化二次元风格文档站点，采用独特的**双仓架构**实现内容开源与主题私有的完美结合。

## 核心理念

传统文档站点要么全部公开（主题样式也随之开源），要么全部私有（失去协作价值）。ViteDocs 提供了一种折中方案：

- **公开仓库** 存储所有 Markdown 文档内容，任何人可以查看、编辑、贡献
- **私有仓库** 存储主题样式、CSS 和组件代码，保持闭源
- **GitHub Actions** 自动将两者结合，构建并部署到 GitHub Pages

## 适用场景

- 希望文档内容开源协作，但自定义主题不希望被复制
- SaaS 产品需要对外文档站点，同时保护自己的设计系统
- 团队协作开发，需要区分内容与样式权限
- 想要"在 GitHub 上编辑此页"的便捷体验，但不想公开全部代码

## 技术栈

- **构建工具**: Vite 5
- **静态站点生成器**: VitePress 1.x
- **样式方案**: 原生 CSS + CSS Variables（无 Tailwind）
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions
- **字体**: Google Fonts (Noto Sans SC, ZCOOL QingKe HuangYou)

## 目录结构

```
vite-docs/                    # 公开仓库（Git clone 可见）
├── .github/workflows/        # CI/CD 工作流
├── .vitepress/
│   ├── config.ts             # VitePress 配置
│   └── theme/                # 主题入口（空壳，实际内容由 CI 同步）
├── docs/                     # 所有 Markdown 文档 ← 核心内容
│   ├── index.md
│   ├── guide/
│   ├── api/
│   └── about/
├── package.json
└── index.html

vite-docs-theme/              # 私有仓库（仅 CI 可访问）
├── .vitepress/theme/         # 主题样式
│   ├── style.css             # 主样式表
│   ├── custom.css            # 自定义补充样式
│   ├── components/           # Vue 组件
│   └── index.ts              # 主题入口
└── README.md
```
