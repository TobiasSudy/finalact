import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel uses the root path for deployments
export default defineConfig({
  base: '/',  // Make sure this is set to '/'
  plugins: [react()],
});

