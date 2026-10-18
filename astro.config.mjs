// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['src/styles'],
          // Shared variables, functions and mixins in every component's Sass
          additionalData: `@use 'abstracts' as *;\n`,
        },
      },
    },
  },
  markdown: {
    // Keep text exactly as typed: straight quotes, no auto-linked "www."
    smartypants: false,
    gfm: false,
  },
});
