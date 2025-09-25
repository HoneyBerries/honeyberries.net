#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import project data to expand dynamic routes (use data.sitemap.js which contains no asset imports)
import { PROJECTS } from '../src/lib/data.sitemap.js';

const BASE = 'https://honeyberries.net';
const outPathDist = path.join(__dirname, '..', 'dist', 'sitemap.xml');

async function build() {
  const appFilePath = path.join(__dirname, '..', 'src', 'App.jsx');
    const appFileContent = fs.readFileSync(appFilePath, 'utf8');

    // Find all static routes from the App.jsx file
    const staticRouteRegex = /path="([^"]*)"/g;
    let staticRoutes = [];
    let match;
    while ((match = staticRouteRegex.exec(appFileContent)) !== null) {
    // Ensure we don't add dynamic routes or wildcards
    if (!match[1].includes(':') && !match[1].includes('*')) {
        staticRoutes.push(match[1]);
    }
    }
    staticRoutes = [...new Set(staticRoutes)]; // Deduplicate

    // Expand project routes from data
        const projectRoutesAll = (PROJECTS || []).map(p => p.href || `/projects/${p.id}`);

        // Only include project hrefs that exist in the app routes (staticRoutes) or are external URLs
        const projectRoutes = projectRoutesAll.filter(href => href.startsWith('http') || staticRoutes.includes(href));

        const urls = Array.from(new Set([...staticRoutes, ...projectRoutes]));

    const smStream = new SitemapStream({ hostname: BASE });

    for (const url of urls) {
        smStream.write({ url, changefreq: 'weekly', priority: url === '/' ? 1.0 : 0.7 });
    }
    smStream.end();

    try {
        const sitemapOutput = await streamToPromise(smStream);
        // Write only to dist
        try {
            fs.mkdirSync(path.dirname(outPathDist), { recursive: true });
            fs.writeFileSync(outPathDist, sitemapOutput.toString());
            console.log('sitemap.xml written to', outPathDist);
        } catch (e) {
            console.error('Failed to write sitemap to dist:', e.message);
        }
    } catch (err) {
        console.error('Failed to generate sitemap:', err);
        if (typeof globalThis.process !== 'undefined' && typeof globalThis.process.exit === 'function') {
            globalThis.process.exit(1);
        }
    }
}

build();
