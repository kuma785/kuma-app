import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kuma-app/', // 追加
  build: {
    outDir: 'docs', // 追加
  },
})
