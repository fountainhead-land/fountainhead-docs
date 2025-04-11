import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FountainHead Docs",
  description: "FountainHead Docs",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'FountainHead 文档',
      description: 'FountainHead 文档',
      themeConfig: {
        nav: [
          { text: '文档', link: '/zh/check-white-list' }
        ],
        sidebar: [
          {
            text: '常见问题',
            items: [
              { text: '测试白名单生效', link: '/zh/check-white-list' },
              { text: '如何禁用 IPv6', link: '/zh/ban-ipv6' },
              { text: '预售激活说明', link: '/zh/pre-sale-activation' },
              { text: '用户套餐升级流程', link: '/zh/plan-upgrade' },
              { text: '退款政策', link: '/zh/refund-policy' },
              { text: '试用政策', link: '/zh/trial-policy' }
            ]
          },
          {
            text: '帮助',
            items: [
              { text: '常见问题排查', link: '/zh/troubleshooting' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/check-white-list' }
    ],

    sidebar: [
      {
        text: 'Common Issues',
        items: [
          { text: 'Test Whitelist Status', link: '/check-white-list' },
          { text: 'Disable IPv6', link: '/ban-ipv6' },
          { text: 'Pre-sale Activation', link: '/pre-sale-activation' },
          { text: 'User Plan Upgrade', link: '/plan-upgrade' },
          { text: 'Refund Policy', link: '/refund-policy' },
          { text: 'Trial Policy', link: '/trial-policy' }
        ]
      },
      {
        text: 'Help',
        items: [
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/Fountainhead_zh' }
    ],

    // 添加其他主题配置
    logo: '/logo.png',
    siteTitle: 'FountainHead Docs',
    footer: {
      copyright: 'Copyright © 2024-present FountainHead'
    }
  }
})
