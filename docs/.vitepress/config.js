export default {
    title: '笔记',
    description: '个人笔记',
    lastUpdated: true,
    base: '/note/',
    themeConfig: {
        outline: [2, 5],
        outlineTitle: '本页内容',
        lastUpdatedText: 'Updated Date',
        nav: [
            {text: 'Git', link: '/git/git-cli.md'},
            {text: 'Linux', link: '/linux/crontab.md'},
            {text: 'Mysql', link: '/mysql/mysql-cli.md'},
            {text: 'Windows', link: '/windows/cli.md'},
            {text: 'Docker', link: '/docker/cli.md'},
            {
                text: '目录组',
                items: [
                    {text: '地址一', link: '/item-1'},
                    {text: '地址二', link: '/item-2'},
                    {text: '地址三', link: '/item-3'}
                ]
            }
        ],
        sidebar: {
            '/git/': [
                {
                    text: 'Git',
                    collapsed: false,
                    items: [
                        {text: 'git 常用命令', link: '/git/git-cli.md'},
                        {text: '创建一个与远程关联的 git 库', link: '/git/link-remote.md'}
                    ]
                }
            ],
            '/linux/': [
                {
                    text: 'Linux',
                    collapsed: false,
                    items: [
                        {text: '定时任务 crontab', link: '/linux/crontab.md'},
                        {text: '安装 redis 服务', link: '/linux/install-redis.md'},
                        {text: 'Linux 操作快捷键', link: '/linux/linux-cli.md'},
                        {text: 'CentOS 安装 MySQL、nginx、PHP(PHP-FPM)', link: '/linux/centos-install-mysql.md'},
                        {text: 'CentOS 修改 SSH 端口', link: '/linux/centos-cli.md'},
                    ]
                }
            ],
            '/mysql/': [
                {
                    text: 'Mysql',
                    collapsed: false,
                    items: [
                        {text: 'MySQL 服务相关内容', link: '/mysql/mysql-cli.md'},
                        {text: 'MySQL 的一些查询小方法', link: '/mysql/mysql-query.md'}
                    ]
                }
            ],
            '/windows/': [
                {
                    text: 'Windows',
                    collapsed: false,
                    items: [
                        {text: 'Windows DOS 命令小技巧', link: '/windows/cli.md'},
                    ]
                }
            ],
            '/docker/': [
                {
                    text: 'Docker',
                    collapsed: false,
                    items: [
                        {text: 'docker 常用命令', link: '/docker/cli.md'},
                    ]
                }
            ],
        },
        footer: {
            message: '',
            copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备16014678号</a>'
        }
    },
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true
    }
}
