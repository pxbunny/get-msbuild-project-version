import { readFileSync } from 'fs';
import { DOMParser } from 'xmldom';
import xpath from 'xpath';

export const readFile = (path) => {
  return readFileSync(path, 'utf8');
};

export const getVersionFromFile = (file) => {
  const doc = new DOMParser().parseFromString(file, 'text/xml');
  const nodes = xpath.select('string(/Project/PropertyGroup/Version)', doc);

  if (nodes.length < 1) {
    throw new Error('Version not found');
  }

  return nodes[0];
};
