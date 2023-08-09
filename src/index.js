import { setFailed, setOutput } from '@actions/core';
import { readFile, getVersionFromFile } from './csproj';
import { getAndValidateInputs } from './input';
import { ensureVersionNotEmpty, validateVersion } from './validation';

try {
  const [path, validateInputs] = getAndValidateInputs([
    { name: 'path', type: 'string' },
    { name: 'validate', type: 'boolean' }
  ]);

  const file = readFile(path);
  const version = getVersionFromFile(file);

  validateInputs
    ? validateVersion(version)
    : ensureVersionNotEmpty(version);

  setOutput('version', version);
} catch (error) {
  setFailed(error.message);
}
