// @ts-check
import { defineConfig } from 'astro/config';

// Static site: `npm run build` outputs plain HTML/CSS to dist/, which can be
// served by any host (see MIK-18 for the hosting decision).
export default defineConfig({
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Lets Sass files @use foundation partials by name, e.g. 'abstracts'
          loadPaths: ['src/styles'],
          // Every Sass file loaded by a page or component gets the shared
          // variables, functions and mixins without importing them itself
          additionalData: `@use 'abstracts' as *;\n`,
        },
      },
    },
  },
  markdown: {
    // Keep quotes and dashes exactly as typed, as on the old site
    smartypants: false,
    // Don't turn plain "www." text into links; the old site didn't
    gfm: false,
  },
});
