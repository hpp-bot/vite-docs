# 主题定制

## 主题架构概述

ViteDocs 的主题系统分为两层：

1. **内容层**（公开）：Markdown 文档 + 前端 UI 框架
2. **样式层**（私有）：CSS 变量、组件样式、动画效果

## 颜色主题

所有颜色通过 CSS 自定义属性（CSS Variables）定义，修改极其简单。

### 主色调变量

```css
:root {
  /* 品牌色 - 二次元粉色 */
  --vp-c-brand-1: #ff6b9d;
  --vp-c-brand-2: #ff8fb4;
  --vp-c-brand-3: #ff4d8a;
  
  /* 强调色 - 薰衣草紫 */
  --vp-c-accent-1: #7c5cfc;
  --vp-c-accent-2: #a78bfa;
  
  /* 背景色 */
  --vp-c-bg: #fef6f9;
  --vp-c-bg-soft: #fff0f5;
  
  /* 文字色 */
  --vp-c-text-1: #2d2d3a;
  --vp-c-text-2: #5a5a72;
}
```

### 深色模式

深色模式的变量通过 `.dark` 类覆盖：

```css
.dark {
  --vp-c-bg: #1a1520;
  --vp-c-text-1: #f0e6f6;
  --vp-c-brand-soft: rgba(255, 107, 157, 0.2);
}
```

VitePress 会自动根据系统偏好或用户切换来应用深色模式。

## 字体配置

项目在 `index.html` 中引入了 Google Fonts：

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700
  &family=ZCOOL-QingKe-HuangYou&display=swap" rel="stylesheet" />
```

- **Noto Sans SC**：正文和 UI 文字，简洁现代
- **ZCOOL QingKe HuangYou**：标题字体，二次元风格

## 圆角与阴影

```css
:root {
  --vp-radius: 12px;         /* 标准圆角 */
  --vp-radius-lg: 20px;      /* 大圆角（卡片、英雄区） */
}
```

阴影采用粉色系：

```css
.card:hover {
  box-shadow: 0 12px 40px rgba(255, 107, 157, 0.15);
}
```

## 动画效果

### 漂浮动画

用于装饰元素：

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### 闪烁动画

用于星星/亮点装饰：

```css
@keyframes sparkle {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}
```

## 如何修改主题

1. 修改私有仓库 `vite-docs-theme` 中的 `.vitepress/theme/style.css`
2. 推送到私有仓库
3. GitHub Actions 自动同步到公开仓库
4. 重新构建并部署

> **注意**：不要直接修改公开仓库中的主题文件，它们会被同步覆盖！
