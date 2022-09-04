import { defineConfig } from 'vitepress'

const pages = [
  {
    text: '実績',
    link: '/work'
  },
  {
    text: 'ポートフォリオ',
    link: '/portfolio'
  },
  {
    text: 'SNS',
    link: '/sns'
  },
]

export default defineConfig({
  appearance: false,
  title: 'kkeisuke.com',
  description: 'Web Application Engineer / Frontend Engineer',
  head: [
    ['link', { rel: 'icon', href: '/icon/favicon.ico' }],
  ],
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kkeisuke' },
      { icon: 'twitter', link: 'https://twitter.com/kkeisuke' }
    ],
    lastUpdatedText: 'Last Updated',
    nav: [
      ...pages,
      {
        text: 'Blog',
        link: 'https://blog.kkeisuke.com/'
      },
      {
        text: 'お問い合わせ',
        link: 'https://goo.gl/forms/xoKOlTbN2Mqf5eh22'
      },
      {
        text: 'その他',
        items: [
          {
            text: 'Wiki',
            link: '/wiki/'
          },
          {
            text: 'Bookmark',
            link: 'https://hatebu.kkeisuke.com/'
          }
        ]
      }
    ],
    sidebar: [
      {
        items: [
          ...pages,
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2018-present kkeisuke'
    }
  }
})
