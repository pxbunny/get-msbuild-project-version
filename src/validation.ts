import { existsSync } from 'fs';

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function isBlank (str: string): boolean {
  return (!str || /^\s*$/.test(str));
}

export function ensureFileNotEmpty(file: string): void {
  if (isBlank(file)) {
    throw new ValidationError('File is empty');
  }
}

export function ensureVersionNotEmpty(version: string): void {
  if (isBlank(version)) {
    throw new ValidationError('Version is empty');
  }
}

export function validateFilePath (path: string): void {
  if (isBlank(path)) {
    throw new ValidationError('Path is empty');
  }

  if (!existsSync(path)) {
    throw new ValidationError(`File ${path} does not exist`);
  }
}

export function validateVersion(version: string): void {
  ensureVersionNotEmpty(version);

  if (!version.match(/^([0-9]+\.){0,3}[0-9]+(-[0-9A-Za-z-]+)?$/)) {
    throw new ValidationError('Wrong version format');
  }
}
