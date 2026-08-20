---
layout: home

hero:
  name: ViteDocs
  text: 扁平化二次元文档站
  tagline: 双仓架构 · 公开内容 · 私有主题 · 自动同步
  image:
    src: /vite.svg
    alt: Vite
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/introduction
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/hpp-bot/vite-docs

features:
  - icon: 📦
    title: 双仓架构
    details: 公开仓库存储文档内容，私有仓库托管主题样式，两者通过 CI/CD 自动联动
  - icon: 🎨
    title: 扁平化二次元风格
    details: 粉色系渐变主题，Noto Sans SC 字体，流畅圆角设计，支持深色模式
  - icon: ✏️
    title: GitHub 在线编辑
    details: 每篇文档底部提供"在 GitHub 上编辑此页"按钮，可直接在线修改内容
  - icon: ⚡
    title: 自动构建部署
    details: GitHub Actions 自动同步主题、构建文档并部署到 GitHub Pages
  - icon: 🔒
    title: 主题私有化
    details: 主题样式代码保存在私有仓库，防止开源，同时保持内容开源可协作
  - icon: 🔄
    title: 一键更新
    details: 修改主题后只需推送 commit，CI 自动完成同步和重新构建
---

::: custom arch-diagram
<div style="display:flex;align-items:center;justify-content:center;gap:1rem;padding:2rem;flex-wrap:wrap;">
  <div style="background:var(--vp-c-bg-soft-up);border:2px solid var(--vp-c-brand-2);border-radius:16px;padding:1.5rem 2rem;text-align:center;min-width:180px;">
    <div style="font-size:2rem;">📄</div>
    <div style="font-weight:bold;margin-top:0.5rem;">docs/</div>
    <div style="font-size:0.85rem;color:var(--vp-c-text-2);">公开内容</div>
  </div>
  <div style="font-size:1.5rem;color:var(--vp-c-brand-1);">→</div>
  <div style="background:linear-gradient(135deg,var(--vp-c-accent-soft),var(--vp-c-brand-soft));border:2px solid var(--vp-c-accent-1);border-radius:16px;padding:1.5rem 2rem;text-align:center;min-width:180px;">
    <div style="font-size:2rem;">🎨</div>
    <div style="font-weight:bold;margin-top:0.5rem;">.vitepress/theme/</div>
    <div style="font-size:0.85rem;color:var(--vp-c-text-2);">私有主题</div>
  </div>
  <div style="font-size:1.5rem;color:var(--vp-c-brand-1);">→</div>
  <div style="background:var(--vp-c-bg-soft);border:2px solid var(--vp-c-border);border-radius:16px;padding:1.5rem 2rem;text-align:center;min-width:180px;">
    <div style="font-size:2rem;">🌐</div>
    <div style="font-weight:bold;margin-top:0.5rem;">GitHub Pages</div>
    <div style="font-size:0.85rem;color:var(--vp-c-text-2);">公开访问</div>
  </div>
</div>
:::

## 快速开始

```bash
# 克隆公开仓库（你只能看到文档内容）
git clone https://github.com/hpp-bot/vite-docs.git

# 编辑文档
code docs/index.md

# 提交更改（在线编辑功能会自动同步）
git add . && git commit -m "更新文档内容"
```

## 项目架构

| 仓库 | 类型 | 内容 | 访问方式 |
|------|------|------|----------|
| `vite-docs` | Public | 文档内容 (Markdown) + 配置文件 | 公开克隆 |
| `vite-docs-theme` | Private | 主题样式 (CSS/组件) | 仅通过 CI/CD 拉取 |

两者的联动方式：
1. 修改私有仓库的 `.vitepress/theme/` 文件
2. 推送 commit，触发 GitHub Actions workflow
3. Workflow 自动克隆私有仓库的主题文件到公开仓库
4. 自动构建并部署到 GitHub Pages

详细文档请查看 [双仓架构指南](/guide/dual-repo-architecture)。
