import { defineConfig } from 'vitepress'

const url = 'https://kkeisuke.com'
const title = 'kkeisuke.com'
const description = 'Web Application Engineer / Frontend Engineer'
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
  title,
  description,
  head: [
    ['link', { rel: 'icon', href: '/icon/favicon.ico' }],
    ['meta', { hid: 'ogTitle',property: 'og:title', content: title }],
    ['meta', { hid: 'ogDescription', property: 'og:description', content: description }],
    ['meta', { hid: 'ogType', property: 'og:type', content: 'website' }],
    ['meta', { hid: 'ogImage', property: 'og:image', content: `${url}/img/Lento.webp` }],
    ['meta', { hid: 'ogUrl', property: 'og:url', content: url }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:site', content: '@kkeisuke' }]
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
