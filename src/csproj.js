import { readFileSync } from 'fs';
import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';

export const readFile = (path) => {
  return readFileSync(path, 'utf8').trim();
};

export const getVersionFromFile = (file) => {
  const doc = new DOMParser().parseFromString(file, 'text/xml');
  return xpath.select('string(/Project/PropertyGroup/Version)', doc).trim();
};
