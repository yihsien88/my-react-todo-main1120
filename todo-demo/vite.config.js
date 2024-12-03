import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_EW === 'production'?'/my-react-todo-main1120/' :'/',
  plugins: [react()],
})
