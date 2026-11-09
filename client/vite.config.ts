import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const manifestIcons = [
  { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
  { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },

]
export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Anxiety Shredder',
        short_name: 'Anxiety Shredder',
        icons: manifestIcons,
      }
  })

  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});