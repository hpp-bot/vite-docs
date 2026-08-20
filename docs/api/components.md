# 组件 API

## GitHubEditButton

底部编辑按钮组件，自动根据当前页面路径生成 GitHub 编辑链接。

```vue
<GitHubEditButton />
```

### Props

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `repo` | string | `hpp-bot/vite-docs` | GitHub 仓库路径 |
| `branch` | string | `main` | 分支名称 |

## 自定义 CSS 类

| 类名 | 用途 |
|------|------|
| `.feature-grid` | 特性卡片网格容器 |
| `.feature-card` | 单个特性卡片 |
| `.highlight-box` | 高亮提示块 |
| `.github-edit-btn` | GitHub 编辑按钮 |
| `.arch-diagram` | 架构图容器 |
| `.float-animation` | 漂浮动画 |
| `.sparkle` | 闪烁动画 |

## 自定义容器（Custom Containers）

VitePress 支持自定义容器语法：

```markdown
::: tip 提示
这是一条提示消息
:::

::: warning 警告
这是一条警告消息
:::

::: danger 危险
这是一条危险消息
:::
```
