import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress/',
  head: [["link", { rel: 'icon', href: '/logo1.png' }]],
  title: "我的文档",
  description: "一个前端学习文档",
  themeConfig: {
    //目录
    outlineTitle: '目录',
    outline: [2, 6],
    //logo
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config

    //导航栏
    nav: [
      {
        text: '首页', link: '/'
      },
      {
        text: '前端基础', items: [
        ]
      },
      {
        text: '前端前置', items: [
        ]
      },
      {
        text: '前端框架', items: [
          {
            text: 'Vue', items: [
              // {
              //   text: 'Vue基础', link: '/vue/vue1'
              // },
              // {
              //   text: 'Vue组件', link: '/vue/vue2'
              // },
              // {
              //   text: 'VueX', link: '/vue/vue3'
              // },
              // {
              //   text: 'Vue3', link: '/vue/vue4'
              // }
            ],
          },
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: '前端前置课',
    //     collapsible: true, // 是否可折叠
    //     collapsed: false, // 默认展开状态
    //     items: [
    //       { text: 'NodeJs', link: '/NodeJs' },
    //       { text: '构建工具', link: '/front-end-pre-course/webPack' }
    //     ]
    //   }
    // ],

    sidebar: false,//关闭侧边栏
    aside: 'left',//设置右侧侧边栏左侧显示

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 底部配置
    footer: {
      copyright: 'Copyright © 2021 <NAME>'
    },

    // //搜索框
    // search: {
    //   provider: "local",
    //   options: {
    //     translations: {
    //       button: {
    //         buttonText: "搜索",
    //         buttonAriaLabel: "搜索文档"
    //       },
    //       modal: {
    //         noResultsText: "没有找到结果",
    //         resetButtonText: "重置",
    //         footer: {
    //           selectText: "选择",
    //           navigeteText: "切换",
    //         }
    //       }
    //     }
    //   }
    // },
  }
})
