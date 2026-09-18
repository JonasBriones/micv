# Web personal — CV + Blog + Marca personal

Sitio Astro para marca personal, separado de Pisuerga Digital y de Sazón.
Diseño propio (serif "Fraunces" + sans "Inter", fondo papel cálido, acento
azul marino) — deliberadamente distinto del branding de esos dos proyectos.

## Estructura

- `/` — Home, frase potente + últimas notas del blog.
- `/sobre-mi` — Bio/CV.
- `/blog` — Listado, contenido en `src/content/blog/*.md`.
- `/proyectos` — Mención de Pisuerga Digital / Sazón, sin detalle operativo.
- `/contacto` — Email + redes.

## Antes de publicar — reemplazar placeholders

Todo lo marcado con `[Tu Nombre]` o `TODO` es contenido de ejemplo:

- [ ] Nombre real en `Layout.astro`, `Header.astro`, `Footer.astro`, y el `title`/`description` de cada página.
- [ ] Frase potente del Home (`src/pages/index.astro`).
- [ ] Bio real en `src/pages/sobre-mi.astro`.
- [ ] Email y redes reales en `src/pages/contacto.astro` y `Footer.astro`.
- [ ] Dominio real en `astro.config.mjs` (`site:`) y `public/robots.txt`.
- [ ] Borrar o reemplazar el post de ejemplo `src/content/blog/bienvenida.md`.
- [ ] Favicon propio (hoy usa el de Astro por defecto, en `public/`).

## Comandos

| Comando           | Acción                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Instala dependencias                          |
| `npm run dev`       | Servidor local en `localhost:4321`            |
| `npm run build`     | Build de producción a `./dist/`               |
| `npm run astro check` | Type-check                                  |

## Añadir un post nuevo

Crea un archivo en `src/content/blog/mi-post.md` con este frontmatter:

```yaml
---
title: "Título del post"
description: "Descripción corta para SEO y el listado del blog."
pubDate: 2026-09-17
tags: ["tech", "negocio"]
draft: false
---
```

## Deploy

Todavía sin definir — falta decidir dominio y dónde se hospeda (Render, Vercel,
Netlify, o el mismo VPS de AltaCalle). No hay CI/CD configurado aún.
