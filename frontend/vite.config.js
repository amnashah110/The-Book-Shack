import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['C:/Users/Amna Shah/Desktop/Things/MERN Project/'],
    },
  },
})