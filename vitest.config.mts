import { defineConfig, configDefaults } from 'vitest/config'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

const rootDir = resolve(__dirname)

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [...configDefaults.exclude],
    include: ['./tests/**/*.test.tsx', './tests/**/*.test.ts'],
    setupFiles: ['./tests/setup.ts'],
    environment: 'happy-dom',
    globals: true
  },
  resolve: {
    alias: {
      '@': resolve(rootDir, 'src')
    }
  }
})