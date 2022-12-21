module.exports = {
  title: '笔记',
  description: '个人笔记',
  base: '/note/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'zhaoxlchn/note',
    docsRepo: 'zhaoxlchn/note',
    docsDir: 'docs',
    editLinks: false,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: '哈哈哈',
        nav: [
          {
            text: 'Git',
            link: '/git/git-cli.md'
          }
        ],
        sidebar: {
          '/git/': ['/git/git-cli.md', '/git/link-remote.md']
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
}
