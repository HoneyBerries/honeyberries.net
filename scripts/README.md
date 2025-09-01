Sitemap generation
------------------

This project generates `public/sitemap.xml` at build time. The generator script is `scripts/generate-sitemap.js` and runs automatically after `vite build` via the `postbuild` script.

Make sure the `sitemap` package is installed as a dev dependency before running the build:

```bash
npm install --save-dev sitemap
```

Then run:

```bash
npm run build
```

The generated sitemap will be written to `public/sitemap.xml` and referenced by `public/robots.txt`.
