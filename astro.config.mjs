// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { markdownImages } from './src/lib/markdown-images.ts';

export default defineConfig({
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['src/styles'],
          additionalData: `@use 'abstracts' as *;\n`,
        },
      },
    },
  },
  markdown: {
    processor: satteri({
      // Keep text exactly as typed: straight quotes, no auto-linked "www."
      features: { gfm: false, smartPunctuation: false },
      hastPlugins: [markdownImages()],
    }),
  },
});
