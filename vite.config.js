/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react"
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  build: {
    chunkSizeWarningLimit: 2000, // ممكن تزود الحد مؤقتًا لو تحب
    rollupOptions: {
      output: {
        manualChunks: {
          // فصل المكتبات الكبيرة في ملفات منفصلة
          react: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap'],
          emailjs: ['@emailjs/browser'],
        }
      }
    }
  }
})
