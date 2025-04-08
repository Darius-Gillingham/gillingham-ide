import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';

export function extractZip(filePath: string, outputDir: string): void {
  const zip = new AdmZip(filePath);
  zip.extractAllTo(outputDir, true);
  console.log(`✅ Extracted ZIP to ${outputDir}`);
}
