#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fail(msg) { console.error('ERROR:', msg); process.exitCode = 2; }
function ok(msg) { console.log('OK:', msg); }

const root = path.resolve(__dirname, '..');
const distIndex = path.join(root, 'dist', 'index.html');
const publicRobots = path.join(root, 'public', 'robots.txt');

if (!fs.existsSync(distIndex)) fail('dist/index.html not found; run `npm run build` first.');
else ok('dist/index.html found');

if (!fs.existsSync(publicRobots)) fail('public/robots.txt missing');
else ok('public/robots.txt found');

const html = fs.readFileSync(distIndex, 'utf8');
if (!/rel="canonical" href="https:\/\/honeyberries.net\//.test(html)) fail('canonical missing or incorrect in dist/index.html');
else ok('canonical link present');

if (!/name="robots" content="index, follow"/.test(html) && !/name="robots" content="noindex, follow"/.test(html)) fail('robots meta missing');
else ok('robots meta present');

if (!/property="og:title"/.test(html)) fail('OG metadata missing');
else ok('OG metadata present');

console.log('\nSEO check completed. If all OK messages passed, basic validations succeeded.');
