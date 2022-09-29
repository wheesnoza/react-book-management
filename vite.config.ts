/// <reference types="vitest" />
/// <reference types="vite/client" />
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
  },
});
