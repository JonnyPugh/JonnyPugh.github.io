# [JonnyPugh.github.io](https://jonnypugh.github.io) &middot; ![CI](https://github.com/JonnyPugh/JonnyPugh.github.io/actions/workflows/ci.yml/badge.svg)

Personal website built with [Svelte](https://svelte.dev) + [Vite](https://vitejs.dev) + [Tailwind CSS](https://tailwindcss.com).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode at [http://localhost:5173](http://localhost:5173).

### `npm test`

Runs Playwright end-to-end tests.

### `npm run lint`

Runs `svelte-check` for Svelte file validation.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Previews the production build locally.

## CI/CD

[GitHub Actions](https://github.com/JonnyPugh/JonnyPugh.github.io/actions) runs `lint` → `test` → `build` on every push and PR to `source`, then deploys the `dist/` folder to the `gh-pages` branch for GitHub Pages.
