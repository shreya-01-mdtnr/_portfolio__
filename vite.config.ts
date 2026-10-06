import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/_portfolio__/',
  plugins: [react()],
})
