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
        nav: [
          {
            text: 'Git',
            link: '/git/git-cli.md'
          },
          {
            text: 'Linux',
            link: '/linux/crontab.md'
          }
        ],
        sidebar: {
          '/git/': ['/git/git-cli.md', '/git/link-remote.md'],
          '/linux/': [
            '/linux/crontab.md',
            '/linux/install-redis.md',
            '/linux/linux-cli.md'
          ]
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
