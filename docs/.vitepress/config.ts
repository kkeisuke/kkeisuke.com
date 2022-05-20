import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'kkeisuke.com',
  description: 'Web Application Engineer',
  head: [
    ['link', { rel: 'icon', href: '/icon/favicon.ico' }],
  ],
  lastUpdated: true,
  themeConfig: {
    repo: 'kkeisuke/kkeisuke.com',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'ホーム',
        link: '/'
      },
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
      },
    ],
    sidebar: {
      '/work': [
        { text: '実績', link: '/work' }
      ],
      '/portfolio': [
        { text: 'ポートフォリオ', link: '/portfolio' }
      ],
      '/sns': [
        { text: 'SNS', link: '/sns' }
      ],
      '/wiki': [
        {
          text: 'Wiki',
          link: '/wiki/',
          children: [
            { text: 'TypeScript', link: '/wiki/ts/utility_types' },
            { text: 'Docker', link: '/wiki/docker/commands' }
          ]
        }
      ]
    }
  }
})
