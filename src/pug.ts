import fs from 'fs/promises';
import pug from 'pug';
import path from 'path';

import engines from '../data/engines.json';
import shortcuts from '../data/shortcuts.json';

const PUBLIC_DIR = path.resolve('public');
const VIEWS_DIR = path.resolve('src', 'views');

async function build() {
  try {
    const compiledFunction = pug.compileFile(path.join(VIEWS_DIR, 'index.pug'));
    const pageContent = compiledFunction({ engines, shortcuts });

    await fs.mkdir(PUBLIC_DIR, { recursive: true });
    await fs.writeFile(path.join(PUBLIC_DIR, 'index.html'), pageContent, 'utf8');

    console.log('✔ index.html generated successfully');
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
}

build();
