import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  base: "./",
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-api-01.newbee.ltd', //接口域名
        changeOrigin: true,             //是否跨域
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    }
  }
})
