import { getInput, setOutput } from '@actions/core';

import { Versions } from './msbuild';

export type Inputs = {
  file: string;
  validateAll?: boolean;
  validateVersionPrefix?: boolean;
  validateVersionSuffix?: boolean;
  validateVersion?: boolean;
  validateAssemblyVersion?: boolean;
  validateFileVersion?: boolean;
  validatePackageVersion?: boolean;
};

export function getInputs(): Inputs {
  const TRUE_STRING = 'true';

  const file = getInput('file');

  const validateAll = getInput('validate-all').toLowerCase();
  const validateVersionPrefix = getInput('validate-version-prefix').toLowerCase();
  const validateVersionSuffix = getInput('validate-version-suffix').toLowerCase();
  const validateVersion = getInput('validate-version').toLowerCase();
  const validateAssemblyVersion = getInput('validate-assembly-version').toLowerCase();
  const validateFileVersion = getInput('validate-file-version').toLowerCase();
  const validatePackageVersion = getInput('validate-package-version').toLowerCase();

  return {
    file,
    validateAll: validateAll === TRUE_STRING,
    validateVersionPrefix: validateVersionPrefix === TRUE_STRING,
    validateVersionSuffix: validateVersionSuffix === TRUE_STRING,
    validateVersion: validateVersion === TRUE_STRING,
    validateAssemblyVersion: validateAssemblyVersion === TRUE_STRING,
    validateFileVersion: validateFileVersion === TRUE_STRING,
    validatePackageVersion: validatePackageVersion === TRUE_STRING
  };
}

export function setOutputs(versions: Versions): void {
  const {
    versionPrefix,
    versionSuffix,
    version,
    assemblyVersion,
    fileVersion,
    informationalVersion,
    packageVersion
  } = versions;

  setOutput('version-prefix', versionPrefix);
  setOutput('version-suffix', versionSuffix);
  setOutput('version', version);
  setOutput('assembly-version', assemblyVersion);
  setOutput('file-version', fileVersion);
  setOutput('informational-version', informationalVersion);
  setOutput('package-version', packageVersion);
}
