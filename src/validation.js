import { existsSync } from 'fs';

export const validateFilePath = (path) => {
  if (!path) {
    throw new Error('Path is empty');
  }

  if (!path.endsWith('.csproj')) {
    throw new Error('Path must end with .csproj');
  }

  if (!existsSync(path)) {
    throw new Error(`File ${path} does not exist`);
  }
};

export const ensureFileNotEmpty = (file) => {
  if (!file) {
    throw new Error('File is empty');
  }
};

export const ensureVersionNotEmpty = (version) => {
  if (!version) {
    throw new Error('Version is empty');
  }
};

export const validateVersion = (version) => {
  ensureVersionNotEmpty(version);

  if (!version.match(/^\d+\.\d+\.\d+$/)) {
    throw new Error('Version must be in format x.y.z');
  }
};
