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
          ]
        },

        {
          text: 'BlendShare',
          items: [
            { text: 'BlendShare', link: '/blendshare/' },
          ]
        },

      ],

      '/zh/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: '安裝指南', link: '/zh/face-tracking-addon/installation-guide' },
            { text: '如何使用 BlendShare', link: '/zh/face-tracking-addon/blendshare' },
            { text: '文檔', link: '/zh/face-tracking-addon/documents' },
            { text: 'Eye Tracking Setings', link: '/zh/face-tracking-addon/eye-tracking-settings' },
            { text: 'Q-Parameters Creator', link: '/zh/face-tracking-addon/quantization-parameters-creator' },
          ]
        },
        {
          text: 'BlendShare',
          items: [
            { text: 'BlendShare', link: '/zh/blendshare/' },
          ]
        },
      ],

      '/ja/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: 'ガイド', link: '/ja/face-tracking-addon/installation-guide' },
            { text: 'BlendShareの使用方法', link: '/ja/face-tracking-addon/blendshare' },
            { text: 'ドキュメント', link: '/ja/face-tracking-addon/documents' },
            { text: 'Eye Tracking Setings', link: '/ja/face-tracking-addon/eye-tracking-settings' },
            { text: 'Q-Parameters Creator', link: '/ja/face-tracking-addon/quantization-parameters-creator' },
          ]
        },
      ],

      '/ko/': [
        {
          text: 'Face Tracking Addon',
          items: [
            { text: 'Instalation Guide', link: '/ko/face-tracking-addon/installation-guide' },
            { text: 'How to use BlendShare', link: '/ko/face-tracking-addon/blendshare' },
            { text: 'Documents', link: '/ko/face-tracking-addon/documents' },
            { text: 'Eye Tracking Setings', link: '/ko/face-tracking-addon/eye-tracking-settings' },
            { text: 'Q-Parameters Creator', link: '/ko/face-tracking-addon/quantization-parameters-creator' },
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
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/'
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


