import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // or -swc

export default defineConfig({
  plugins: [react()],
})
