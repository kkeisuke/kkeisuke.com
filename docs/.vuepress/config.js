module.exports = {
  title: 'kkeisuke.com',
  description: 'Web Application Engineer',
  themeConfig: {
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
