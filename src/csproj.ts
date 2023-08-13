import { DOMParser } from '@xmldom/xmldom';
import { readFileSync } from 'fs';
import { select } from 'xpath';

import { ensureFileNotEmpty, validateFilePath } from './validation';

export function readFile(path: string): string {
  validateFilePath(path);
  return readFileSync(path, 'utf8');
}

export function getVersionFromFile(file: string): string {
  ensureFileNotEmpty(file);
  const doc = new DOMParser().parseFromString(file, 'text/xml');
  const pattern = 'string(/Project/PropertyGroup/Version)';
  const version = select(pattern, doc) as string;
  return version.trim();
}
