import fs from 'fs';
import path from 'path';

export function loadProjectStructure(basePath: string): void {
  const walk = (dir: string, depth = 0) => {
    const indent = '  '.repeat(depth);
    for (const file of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      console.log(`${indent}${stat.isDirectory() ? '📁' : '📄'} ${file}`);
      if (stat.isDirectory()) walk(fullPath, depth + 1);
    }
  };
  walk(basePath);
}
