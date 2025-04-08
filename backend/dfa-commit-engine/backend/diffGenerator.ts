import fs from 'fs';
import path from 'path';

export function generateFileDiff(filePath: string, newContent: string): string {
  const absolutePath = path.resolve(filePath);
  const oldContent = fs.existsSync(absolutePath)
    ? fs.readFileSync(absolutePath, 'utf-8')
    : '';

  if (oldContent === newContent) return '';

  return `--- ${filePath}\n+++ updated\n\n${newContent}`;
}
