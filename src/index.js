import { getInput, setFailed, setOutput } from '@actions/core';
import { readFile, getVersionFromFile } from './csproj';
import { ensureVersionNotEmpty, validateVersion } from './validation';

function getInputs() {
  const path = getInput('path');
  const validate = getInput('validate');

  const validateLowerCase = validate.toLowerCase();

  if (validateLowerCase !== 'true' && validateLowerCase !== 'false') {
    throw new Error('Input validate must be true or false');
  }

  return {
    path,
    validate: validateLowerCase === 'true'
  };
}

try {
  const { path, validate } = getInputs();

  const file = readFile(path);
  const version = getVersionFromFile(file);

  validate
    ? validateVersion(version)
    : ensureVersionNotEmpty(version);

  setOutput('version', version);
} catch (error) {
  setFailed(error.message);
}
