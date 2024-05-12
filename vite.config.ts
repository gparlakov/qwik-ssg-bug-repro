import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: './node_modules/.vite/./budgily',
  build: {minify: false},
  plugins: [
    qwikCity({}),
    qwikVite({
      devTools: {
        clickToSource: false,
      },
      client: {
        outDir: './dist/client',
      },
      ssr: {
        outDir: './dist/server',
      },
    }),
    tsconfigPaths({ root: './'}),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['./'],
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
});
