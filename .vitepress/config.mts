import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "charlie_site",
  description: "Charlie's Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      { text: 'Home Server Setup',
        collapsed: false, 
        items: [
          {text: 'Overview', link: '/home_server_setup/overview'},
          {text: 'Plex', link: '/home_server_setup/plex'},
          {text: 'Docker', link: '/home_server_setup/docker'},
        ],
       },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chaz-n' }
    ]
  },
  lastUpdated: true,
})
