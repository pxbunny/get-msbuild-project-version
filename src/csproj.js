import { readFileSync } from 'fs';
import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';
import { ensureFileNotEmpty, validateFilePath } from './validation';

export function readFile(path) {
  validateFilePath(path);
  return readFileSync(path, 'utf8');
}

export function getVersionFromFile(file) {
  ensureFileNotEmpty(file);
  const doc = new DOMParser().parseFromString(file, 'text/xml');
  return xpath.select('string(/Project/PropertyGroup/Version)', doc).trim();
}
