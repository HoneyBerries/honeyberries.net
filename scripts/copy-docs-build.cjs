const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: true, ...opts });
  if (res.status !== 0) process.exit(res.status);
}

const repoRoot = path.resolve(__dirname, '..');
const docsDir = path.join(repoRoot, 'projects', 'modcord', 'docs');
const docsBuild = path.join(docsDir, 'build');
const dest = path.join(repoRoot, 'public', 'projects', 'modcord', 'docs');

console.log('Building Docusaurus docs in', docsDir);
run('npm', ['install'], { cwd: docsDir });
run('npm', ['run', 'build'], { cwd: docsDir });

console.log('Copying docs build to', dest);

// ensure destination exists
fs.mkdirSync(dest, { recursive: true });

function copyDir(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(docsBuild, dest);

console.log('Docs copied successfully.');
