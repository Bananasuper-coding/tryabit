import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tryabit/', // Tên repository của bạn
  root: './', // Chỉ định rõ tìm file ở thư mục gốc thay vì thư mục src
  build: {
    outDir: 'dist',
  }
});
