import { existsSync } from 'fs';

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function isBlank (str) {
  return (!str || /^\s*$/.test(str));
}

export function ensureFileNotEmpty(file) {
  if (isBlank(file)) {
    throw new ValidationError('File is empty');
  }
}

export function ensureVersionNotEmpty(version) {
  if (isBlank(version)) {
    throw new ValidationError('Version is empty');
  }
}

export function validateFilePath (path) {
  if (isBlank(path)) {
    throw new ValidationError('Path is empty');
  }

  if (!existsSync(path)) {
    throw new ValidationError(`File ${path} does not exist`);
  }
}

export function validateVersion(version) {
  ensureVersionNotEmpty(version);

  if (!version.match(/^(\d+\.){0,3}\d+(-[0-9A-Za-z-]+)?$/)) {
    throw new ValidationError('Wrong version format');
  }
}
