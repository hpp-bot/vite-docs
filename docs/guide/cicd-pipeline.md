# CI/CD 流水线

## Workflow 概览

公开仓库包含两个 GitHub Actions workflow：

### 1. deploy.yml — 构建部署

**触发条件**：当 `docs/` 目录有文件变更时自动触发

**流程**：
1. 检出代码
2. 安装 Node.js 和 pnpm
3. 安装依赖（`pnpm install`）
4. 运行 VitePress 构建（`pnpm build`）
5. 部署到 GitHub Pages

### 2. sync-theme.yml — 主题同步

**触发条件**：
- 手动触发（workflow_dispatch）
- 私有仓库推送新主题时通过 webhook 触发

**流程**：
1. 使用 PAT 克隆私有主题仓库
2. 将 `.vitepress/theme/` 复制到公开仓库
3. 提交并推送变更
4. 触发 deploy workflow

## 部署流程图解

```
                    修改 docs/ 文件
                        ↓
              推送 commit 到 main
                        ↓
              [deploy.yml 触发]
                        ↓
              pnpm install && pnpm build
                        ↓
              部署到 GitHub Pages
                        ↓
              https://hpp-bot.github.io/vite-docs/
        
        同时（如需更新主题）：
        
        修改私有仓库 theme/ 文件
                ↓
        推送 commit 到私有仓库
                ↓
        [sync-theme.yml 触发]
                ↓
        克隆私有仓库 → 复制主题 → 推送到公开仓库
                ↓
        [deploy.yml 再次触发]
                ↓
        重新构建并部署
```

## 手动触发部署

如果需要手动触发部署，可以在 GitHub 仓库的 Actions tab 中选择对应的 workflow，点击 "Run workflow"。

## 部署状态查看

在仓库的 Actions tab 可以查看所有 workflow 的执行历史和状态。
