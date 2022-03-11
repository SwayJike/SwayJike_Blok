module.exports = {
  title: "SwayJike的个人博客",
  description: '欢迎进入SwayJike的个人博客',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    huawei: true,
    mode: 'dark',
    modePicker: true,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '联系',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/SwayJike/SwayJike_Blok', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/blogs/category/spring/': [
        'springannotation',
        'springaop',
        'springc3po',
        'springioc',
        'springmail',
        'springmybatis',
        'springtask',
        'springtest',
        'springtransation'
      ],
      '/blogs/category/html/': [
        'html',
        'regex'
      ],
      '/blogs/category/javascript/': [
        'bom',
        'circle',
        'click',
        'dom',
        'func',
        'jsfamily',
        'jshelloworld',
        'jstexiao',
        'scope'
      ],
      '/blogs/category/linux/': [
        'linux',
      ],
      '/blogs/category/mybatis/': [
        'mybatis',
      ],
      '/blogs/category/mysql/': [
        'mysql',
      ],
      '/blogs/category/springboot/': [
        'springbootext',
        'springbootnote'
      ],
      '/blogs/category/vue/': [
        'lodash',
        'qs',
        'swiper',
        'vue',
        'vuelife',
        'webpack'
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '目录' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '848988457@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'SwayJike的个人博客',
        desc: '欢迎进入SwayJike的个人博客',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'SwayJike',
    // 作者头像
    authorAvatar: '/avatar.jpg',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: 'spring',

    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }

  },

  markdown: {
    lineNumbers: true
  },
  plugins: [
      // 看板娘
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
      theme: [
        'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
      ],
      clean: false,
      messages: {
        welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
      },
      messageStyle: { right: '68px', bottom: '290px' },
      width: 250,
      height: 320
    }
    ],
      // 弹出框
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎加我的QQ/vx 🎉🎉🎉',
          style: 'text-aligin: center;',
        },
        {
          type: 'text',
          content: 'QQ/VX：848988457',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '喜欢的主题特效可以去个人信息',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '友链或疑问均可在留言板给我留言',
          style: 'text-align: center;'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/'
        },
      ]
    }],
      // 音乐播放器
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",{
      audios: [
        // 本地文件示例
        // {
        //   name: '장가갈 수 있을까',
        //   artist: '咖啡少年',
        //   url: '/bgm/1.mp3',
        //   cover: '/bgm/1.jpg'
        // },
        // 网络文件示例
        {
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ]
    }
    ],
      // 点击特效
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    // 彩色背景
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]

  ],


}
