import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // host: true — доступ по локальному IP (Radmin/Hamachi/LAN)
  server: { port: 5173, host: true },
  preview: { port: 5173, host: true },
  build: { chunkSizeWarningLimit: 1500 },
});
