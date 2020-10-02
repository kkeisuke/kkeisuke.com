module.exports = {
  title: 'kkeisuke.com',
  description: 'Web Application Engineer',
  head: [
    ['link', { rel: 'icon', href: '/icon/favicon.ico' }],
  ],
  themeConfig: {
    search: false,
    repo: 'kkeisuke/kkeisuke.com',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
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
        text: 'Wiki',
        link: '/wiki/'
      },
      {
        text: 'お問い合わせ',
        link: 'https://goo.gl/forms/xoKOlTbN2Mqf5eh22'
      }
    ]
  },
  markdown: {
    extendMarkdown: (md) => {
      md.options.linkify = true
    }
  },
  plugins: ['@vuepress/back-to-top']
}
