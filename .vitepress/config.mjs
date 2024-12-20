import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Triturbo",
  base: "/Docs/",
  description: "Documents and Tutorials",
  themeConfig: {
    logo:'/triturbo_logo.png',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [

    //   { text: 'Face Tracking Addon', link: '/face-tracking-addon' },
    //   { text: 'BlendShare', link: '/blendshare' },
    // ],

    sidebar: {
      '/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: 'Instalation Guide', link: '/face-tracking-addon/installation-guide' },
            { text: 'How to use BlendShare', link: '/face-tracking-addon/blendshare' },
            { text: 'Documents', link: '/face-tracking-addon/documents' },
            { text: 'Eye Tracking Setings', link: '/face-tracking-addon/eye-tracking-settings' },
            { text: 'Q-Parameters Creator', link: '/face-tracking-addon/quantization-parameters-creator' },
            { text: 'Avatars', link: '/face-tracking-addon/avatars' },
          ]
        },

        {
          text: 'BlendShare',
          items: [
            { text: 'Documents', link: '/blendshare/' },
            { text: 'BlendShapes Assets', link: '/blendshare/blendshapes-assets' },
          ]
        },

      ],

      '/zh-hant/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: '安裝指南', link: '/zh-hant/face-tracking-addon/installation-guide' },
            { text: '如何使用 BlendShare', link: '/zh-hant/face-tracking-addon/blendshare' },
            { text: '面捕文檔', link: '/zh-hant/face-tracking-addon/documents' },
            { text: '眼動追蹤設定', link: '/zh-hant/face-tracking-addon/eye-tracking-settings' },
            { text: '量化參數創建器', link: '/zh-hant/face-tracking-addon/quantization-parameters-creator' },
            { text: 'Avatars', link: '/zh-hant/face-tracking-addon/avatars' },
          ]
        },
        {
          text: 'BlendShare',
          items: [
            { text: '文檔', link: '/zh-hant/blendshare/' },
            { text: 'BlendShapes Assets', link: '/zh-hant/blendshare/blendshapes-assets' },
          ]
        },
      ],

      '/zh-hans/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: '安装指南', link: '/zh-hans/face-tracking-addon/installation-guide' },
            { text: '如何使用 BlendShare', link: '/zh-hans/face-tracking-addon/blendshare' },
            { text: '面捕文档', link: '/zh-hans/face-tracking-addon/documents' },
            { text: '眼动追踪设置', link: '/zh-hans/face-tracking-addon/eye-tracking-settings' },
            { text: '量化参数创建器', link: '/zh-hans/face-tracking-addon/quantization-parameters-creator' },
            { text: 'Avatars', link: '/zh-hans/face-tracking-addon/avatars' },
          ]
        },
        {
          text: 'BlendShare',
          items: [
            { text: '文档', link: '/zh-hans/blendshare/' },
            { text: 'BlendShapes Assets', link: '/zh-hans/blendshare/blendshapes-assets' },
          ]
        },
      ],

      '/ja/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: 'インストールガイド', link: '/ja/face-tracking-addon/installation-guide' },
            { text: 'BlendShareの使用方法', link: '/ja/face-tracking-addon/blendshare' },
            { text: 'ドキュメント', link: '/ja/face-tracking-addon/documents' },
            { text: '眼球追跡設定', link: '/ja/face-tracking-addon/eye-tracking-settings' },
            { text: '量子化パラメータクリエーター', link: '/ja/face-tracking-addon/quantization-parameters-creator' },
            { text: 'Avatars', link: '/ja/face-tracking-addon/avatars' },

          ]
        },
        
        {
          text: 'BlendShare',
          items: [
            { text: 'ドキュメント', link: '/ja/blendshare/' },
            { text: 'BlendShapes Assets', link: '/ja/blendshare/blendshapes-assets' },
          ]
        },
      ],

      '/ko/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: '설치 가이드', link: '/ko/face-tracking-addon/installation-guide' },
            { text: 'BlendShare 사용 방법', link: '/ko/face-tracking-addon/blendshare' },
            { text: '문서', link: '/ko/face-tracking-addon/documents' },
            { text: 'Eye Tracking Setings', link: '/ko/face-tracking-addon/eye-tracking-settings' },
            { text: 'Q-Parameters Creator', link: '/ko/face-tracking-addon/quantization-parameters-creator' },
            { text: 'Avatars', link: '/ko/face-tracking-addon/avatars' },
          ]
        },
        
        {
          text: 'BlendShare',
          items: [
            { text: '문서', link: '/ko/blendshare/' },
            { text: 'BlendShapes Assets', link: '/ko/blendshare/blendshapes-assets' },
          ]
        },
      ],
    },
    
 

    socialLinks: [
      { icon: {
        svg: '<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 812C0 929.084 94.9156 1024 212 1024H812C929.084 1024 1024 929.084 1024 812V212C1024 94.9156 929.084 0 812 0H212C94.9156 0 0 94.9156 0 212V812Z" fill="#FC4D50"/><path fill-rule="evenodd" clip-rule="evenodd" d="M773.828 438.341V389.068L650.744 192H608.227L541.093 353.238L475.077 214.446L438.138 214.382L326.272 478.653V227.833H250.172V250.007H192V327.26H250.172V550.306C250.172 570.098 266.227 586.141 286.004 586.141H324.033V832L401.683 831.946C401.683 831.946 401.695 720.762 401.695 720.644C401.695 658.964 455.026 608.963 520.963 608.563C521.198 608.563 521.445 608.535 521.707 608.535H521.744H521.786H521.875C629.722 608.612 717.139 690.28 717.139 790.983V832H773.828V611.427H832V489.487L773.828 438.341Z" fill="white"/></svg>' },
         link: 'https://triturbo.booth.pm/' },
      { icon: 'github', link: 'https://github.com/Tr1turbo' },

      { icon: 'x', link: 'https://x.com/TR1TURBO' }

    ]
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },

    "zh-hant": {
      label: '繁體中文',
      lang: 'zh-hant',
      link: '/zh-hant/'
    },

    "zh-hans": {
      label: '简体中文',
      lang: 'zh-hans',
      link: '/zh-hans/'
    },

    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/'
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/'
    },
  
  },
    
})


