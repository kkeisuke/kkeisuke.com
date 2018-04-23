module.exports = {
  title: 'kkeisuke.com',
  description: 'Web Application Engineer',
  themeConfig: {
    repo: 'kkeisuke/kkeisuke.com',
    nav: [
      {
        text: 'ホーム',
        link: '/'
      },
      {
        text: 'SNS',
        link: '/sns'
      },
      {
        text: 'ポートフォリオ',
        link: '/portfolio'
      },
      {
        text: '実績',
        link: '/work'
      }
    ]
  },
  markdown: {
    config: (md) => {
      md.options.linkify = true
    }
  }
}
