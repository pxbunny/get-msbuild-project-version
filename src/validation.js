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

  if (!path.endsWith('.csproj')) {
    throw new ValidationError('Path must end with .csproj');
  }

  if (!existsSync(path)) {
    throw new ValidationError(`File ${path} does not exist`);
  }
}

export function validateInput(input, type) {
  if (isBlank(input)) {
    throw new ValidationError('Input is empty');
  }

  if (type !== 'boolean') {
    return;
  }

  const lowerCaseInput = input.toLowerCase();

  if (lowerCaseInput !== 'true' && lowerCaseInput !== 'false') {
    throw new ValidationError('Input must be true or false');
  }
}

export function validateVersion(version) {
  ensureVersionNotEmpty(version);

  if (!version.match(/^\d+\.\d+\.\d+$/)) {
    throw new ValidationError('Version must be in format x.y.z');
  }
}
