# 安装配置

## 前置条件

- Node.js >= 18.0.0
- pnpm >= 8.0.0（推荐使用 pnpm 管理依赖）
- GitHub 账号（用于创建仓库和配置 Actions）

## 本地开发环境搭建

### 1. 克隆公开仓库

```bash
git clone https://github.com/hpp-bot/vite-docs.git
cd vite-docs
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

开发服务器默认运行在 `http://localhost:5173`。

### 4. 构建生产版本

```bash
pnpm build
```

构建产物输出到 `.vitepress/dist/` 目录。

## GitHub Actions 配置

### 所需环境变量

在公开仓库的 Settings → Secrets and variables → Actions 中添加：

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `THEME_REPO_URL` | 私有主题仓库地址 | `https://github.com/hpp-bot/vite-docs-theme.git` |
| `THEME_PAT` | 具有 repo 权限的 PAT | `ghp_xxxxxxxxxxxx` |
| `GITHUB_TOKEN` | GitHub 内置 Token（自动注入） | 无需设置 |

### 首次部署流程

1. 创建公开仓库并推送代码
2. 创建私有仓库并推送主题文件
3. 在公开仓库的 Actions tab 中启用 workflows
4. 手动触发一次 workflow 完成首次同步

详细配置见 [双仓架构指南](/guide/dual-repo-architecture)。

## 注意事项

- **不要**将主题样式文件直接放在公开仓库中
- **不要**在私有仓库中提交任何 Markdown 文档
- 每次修改主题后，需推送到私有仓库才会触发同步
