# 插件系统

## VitePress 内置插件

VitePress 本身不提供插件系统，但可以利用 Vite 的插件生态：

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import react from '@vitejs/plugin-react'

export default defineConfig({
  vite: {
    plugins: [
      react(),
      // 添加其他 Vite 插件...
    ],
  },
})
```

## 常用 Vite 插件

### @vitejs/plugin-react

用于支持 React JSX：

```bash
pnpm add -D @vitejs/plugin-react
```

### vite-plugin-pwa

用于添加 PWA 支持：

```bash
pnpm add -D vite-plugin-pwa
```

### vite-plugin-compression

用于构建时 Gzip 压缩：

```bash
pnpm add -D vite-plugin-compression
```

## 自定义 Vue 插件

在 `.vitepress/theme/index.ts` 中注册：

```typescript
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MyPlugin from './plugins/my-plugin'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MyPlugin)
  },
}
```
