import { getInput, setFailed, setOutput } from '@actions/core';
import { readFile, getVersionFromFile } from './csproj';
import {
  ensureFileNotEmpty,
  ensureVersionNotEmtpy,
  validateFilePath,
  validateVersion
} from './validation';

try {
  const path = getInput('path');
  const validate = getInput('validate').toLowerCase() === 'true';

  validateFilePath(path);
  const file = readFile(path);
  ensureFileNotEmpty(file);
  const version = getVersionFromFile(file);

  validate
    ? validateVersion(version)
    : ensureVersionNotEmtpy(version);

  setOutput('version', version);
} catch (error) {
  setFailed(error.message);
}
