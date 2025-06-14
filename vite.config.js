import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Mobile optimization
  build: {
    // Reduce chunk size for better mobile loading
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          swiper: ['swiper'],
          ui: ['lucide-react', '@mui/material', '@mui/icons-material'],
        },
      },
    },
    // Optimize for mobile
    target: ['es2015', 'safari11'],
    cssCodeSplit: true,
    minify: 'esbuild',
  },
  
  // Better mobile performance
  server: {
    fs: {
      strict: false
    }
  },
  
  // Mobile-friendly optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
  
  // Ensure proper asset handling
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg']
})
