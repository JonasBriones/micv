// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplaza por tu dominio real cuando lo tengas
  site: 'https://tu-dominio.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});