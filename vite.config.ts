import * as path from 'path'

import * as reactPlugin from 'vite-plugin-react'

import type { UserConfig } from 'vite'

const srcPath = path.resolve(__dirname, './src')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // map '@' to './src'
    },
  },
})
