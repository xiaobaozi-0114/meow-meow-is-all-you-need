import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserPage = Boolean(repoName?.endsWith('.github.io'))
const base = process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS && repoName && !isUserPage ? `/${repoName}/` : '/')

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    proxy: {
      '/api/chat': {
        target: process.env.VITE_DEV_CHAT_TARGET || 'http://127.0.0.1:8787',
        changeOrigin: true,
      },
    },
  },
})
