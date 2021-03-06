module.exports = {
    title: '笔墨的博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/avatar.png'} ]
    ],
    themeConfig: {
        logo: '/avatar.png',  // 左上角logo
        nav:[ // 导航栏配置
            {text: '首页', link: '/' },
            {text: '技术文档', link: '/tech/interview/' },
            {text: '简书主页', link: 'https://www.jianshu.com/u/c455567c7f50'}      
        ],
        sidebar: 'auto', // 侧边栏配置
    }
}