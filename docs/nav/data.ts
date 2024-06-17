import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://www.gov.cn/images/gtrs_logo_lt.png',
        title: '企业信息公示系统',
        desc: '查询企业公示信息',
        link: 'https://www.gsxt.gov.cn/',
      },
      {
        icon: 'https://www.gov.cn/images/gtrs_logo_lt.png',
        title: '风险信息网',
        desc: '查询企业风险信息',
        link: 'https://www.lawxin.com/',
      },
      {
        icon: 'https://www.gov.cn/images/gtrs_logo_lt.png',
        title: '被执行信息网',
        desc: '查询被执行信息',
        link: 'http://zxgk.court.gov.cn/zhzxgk/',
      },
      {
        icon: 'https://www-app.gdeei.cn/gdeepub/images/favicon.ico',
        title: '环保查询',
        desc: '环保信息查询',
        link: 'https://www-app.gdeei.cn/gdeepub/data/punish/',
      },
      {
        icon: 'https://www.gov.cn/images/gtrs_logo_lt.png',
        title: '专利查询',
        desc: '专利信息查询',
        link: 'http://epub.cnipa.gov.cn/',
      },
      {
        icon: 'https://www.gov.cn/images/gtrs_logo_lt.png',
        title: '小微企业名录',
        desc: '小微企业信息查询',
        link: 'https://xwqy.gsxt.gov.cn/',
      },
      {
        icon: 'https://cponline.cnipa.gov.cn/prefix/img/logo.jpg',
        title: '专利质押查询',
        desc: '专利质押信息查询',
        link: 'https://cponline.cnipa.gov.cn/',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://www.an2.net/favicon.ico',
        title: '田字格字帖生成器',
        desc: '田字格字帖生成器系列工具，自2013年上线以来，一致致力于为您提供更优质全面的中文学习资源和更好的用户体验，并坚持完全免费。',
        link: 'https://www.an2.net/zim/',
      },
      {
        icon: 'https://www.an2.net/favicon.ico',
        title: '字帖生成器',
        desc: '田字格字帖生成器系列工具',
        link: 'https://www.babawar.com/',
      },
      {
        icon: 'https://www.an2.net/favicon.ico',
        title: '字帖生成器',
        desc: '田字格字帖生成器系列工具',
        link: 'https://xgzb.top/',
      },
    ],
  },
  {
    title:'在线工具',
    items:[
      {
        icon: 'https://excalidraw.com/favicon-32x32.png',
        title: 'Excalidraw',
        desc:'在线白板工具',
        link: 'https://excalidraw.com/'
      }
    ]
  },
    {
      title: '政务网站',
      items: [
        {
          icon: 'https://ggfw.hrss.gd.gov.cn/isso/img/logo.e14a7e23.png',
          title: '广东人事考试网',
          desc: '广东人事考试网',
          link: 'https://rsks.gd.gov.cn/zwgk/gzdt/index.html',
        },
        {
          icon: 'https://ggfw.hrss.gd.gov.cn/isso/img/logo.e14a7e23.png',
          title: '广东电子证网',
          desc: '广东省专业技术人员职业资格电子证书系统',
          link: 'https://ggfw.hrss.gd.gov.cn/zjzsh/center.do?nvt=1695267703697',
        },
        {
          icon: 'https://ggfw.hrss.gd.gov.cn/isso/img/logo.e14a7e23.png',
          title: '黄埔人才服务平台',
          desc: '黄埔人才指数综合服务平台',
          link: 'https://hprczs.hp.gov.cn/index.html#/serviceGuide?id=3&type=30',
        },
        {
          icon: 'https://www.gov.cn/images/gtrs_logo_lt.png',
          title: '国家统计局',
          desc: '国家统计局',
          link: 'https://data.stats.gov.cn/',
        },
        {
          icon: 'https://ts2.cn.mm.bing.net/th?id=ODLS.220f48a3-2622-4acb-9ce3-e381b852fa53&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
          title: '全国高速监控',
          desc: '全国高速交通实时监控摄像头视频',
          link: 'https://blog.upx8.com/3478',
        },
      ],
    },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com',
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai',
      },
    ],
  },
  {
    title: '图片工具',
    items: [
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji 表情大全',
        link: 'https://emoji.muan.co/',
      },
      {
        icon: 'https://www.profilepicture.ai/favicon.ico',
        title: '圆形头像',
        desc: '免费制作圆形头像',
        link: 'https://www.profilepicture.ai/free-pfp-maker/#quotemaker',
      },
    ],
  },
    {
      title: '可视图表',
      items: [
        {
          icon: 'https://echarts.apache.org/zh/images/favicon.png',
          title: 'ECharts',
          desc: '一个基于 JavaScript 的开源可视化图表库',
          link: 'https://echarts.apache.org/zh/index.html',
        },
        {
          icon: 'https://antv.vision/icons/icon-72x72.png',
          title: 'AntV',
          desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
          link: 'https://antv.vision/zh/',
        },
        {
          icon: 'https://d3js.org/favicon.png',
          title: 'D3.js',
          desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
          link: 'https://d3js.org',
        },
        {
          icon: 'https://www.chartjs.org/favicon.ico',
          title: 'Chart.js',
          desc: '一个简单而灵活的 JavaScript 图表库',
          link: 'https://www.chartjs.org',
        },
        {
          icon: 'https://threejs.org/files/favicon.ico',
          // icon: 'https://threejs.org/files/favicon_white.ico',
          title: 'Three.js',
          desc: 'JavaScript 3d 库',
          link: 'https://threejs.org',
        },
      ],
    },
  {
    title: '站点工具',
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: '阿里云盘搜索',
        desc: '阿里云盘搜索工具',
        link: 'https://blog.upx8.com/4000',
      },
    ],
  },
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com',
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com',
      },
      {
        title: '博客园',
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: '/icons/cnblogs.svg',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com',
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'MusicFree',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://yinghe.app/musicfree-chajian/',
      },
    ],
  },
]
