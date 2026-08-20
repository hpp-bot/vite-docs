# 配置选项

## .vitepress/config.ts

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基本配置
  title: 'ViteDocs',
  description: '扁平化二次元风格文档站点',
  base: '/vite-docs/',  // GitHub Pages 子路径
  
  // 主题配置
  themeConfig: {
    nav: [...],        // 顶部导航栏
    sidebar: {...},    // 侧边栏
    search: {          // 搜索配置
      provider: 'local'
    },
    editLink: {        // 编辑链接
      pattern: 'https://github.com/hpp-bot/vite-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    footer: {          // 页脚
      message: 'MIT Licensed',
      copyright: 'Copyright © 2026',
    },
  },
  
  // Vite 配置
  vite: {
    plugins: [...],
  },
})
```

## frontmatter 选项

每个 Markdown 文件支持 YAML frontmatter：

```yaml
---
layout: home        # home | doc | page
title: 页面标题
description: 页面描述
editLink: false     # 是否显示编辑按钮
---
```

## 首页特殊配置

`docs/index.md` 支持特殊的 hero 和 features 配置：

```yaml
---
layout: home
hero:
  name: ViteDocs
  text: 扁平化二次元文档站
  tagline: 双仓架构 · 公开内容 · 私有主题
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/introduction
features:
  - icon: 📦
    title: 双仓架构
    details: ...
---
```
