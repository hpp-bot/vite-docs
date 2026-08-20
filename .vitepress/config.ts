import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ViteDocs',
  description: '扁平化二次元风格文档站点',
  base: '/vite-docs/',
  lang: 'zh-CN',

  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/' },
      { text: 'API 参考', link: '/api/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '安装配置', link: '/guide/installation' },
            { text: '项目结构', link: '/guide/project-structure' },
            { text: '主题定制', link: '/guide/theme-customization' },
            { text: '双仓架构', link: '/guide/dual-repo-architecture' },
            { text: 'CI/CD 流水线', link: '/guide/cicd-pipeline' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '配置选项', link: '/api/config' },
            { text: '组件 API', link: '/api/components' },
            { text: '插件系统', link: '/api/plugins' },
          ]
        }
      ],
      '/about/': [
        {
          text: '关于项目',
          items: [
            { text: '项目简介', link: '/about/introduction' },
            { text: '贡献指南', link: '/about/contributing' },
            { text: '许可协议', link: '/about/license' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hpp-bot/vite-docs' },
    ],
    editLink: {
      pattern: 'https://github.com/hpp-bot/vite-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    footer: {
      message: 'MIT Licensed | Copyright © 2026 hpp-bot',
      copyright: '由 ViteDocs 驱动',
    },
    search: {
      provider: 'local',
    },
  },
})
