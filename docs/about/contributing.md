# 贡献指南

## 如何贡献文档

所有文档内容存储在公开仓库的 `docs/` 目录中。贡献方式：

### 方式一：在线编辑（推荐）

点击任意文档底部的 "在 GitHub 上编辑此页" 按钮，直接在浏览器中修改并提交 PR。

### 方式二：本地开发

```bash
# 1. Fork 并克隆仓库
git clone https://github.com/你的用户名/vite-docs.git
cd vite-docs

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 创建分支并提交更改
git checkout -b feature/add-guide
# 编辑 docs/guide/xxx.md
git add .
git commit -m "docs: 添加xxx指南"
git push origin feature/add-guide
```

## 文档规范

- 使用中文编写
- 代码块注明语言（如 `bash`、`typescript`）
- 图片放置在 `docs/public/images/` 目录
- 保持标题层级一致（h1 → h2 → h3）

## 主题贡献

主题文件存储在私有仓库中，如需修改样式请联系项目维护者。
