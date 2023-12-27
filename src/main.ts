import { setFailed } from '@actions/core';

import { getInputs, Inputs, setOutputs } from './io';
import { MsBuild, Versions } from './msbuild';
import { Validator } from './validator';

type ValidationInputs = Omit<Inputs, 'file'>;

function validateVersions(validationInputs: ValidationInputs, versions: Versions): void {
  const {
    validateAll,
    validateVersionPrefix,
    validateVersionSuffix,
    validateVersion,
    validateAssemblyVersion,
    validateFileVersion,
    validatePackageVersion
  } = validationInputs;

  const {
    versionPrefix,
    versionSuffix,
    version,
    assemblyVersion,
    fileVersion,
    packageVersion
  } = versions;

  const validator = new Validator();

  /* eslint-disable no-multi-spaces */

  const shouldVersionPrefixBeValidated   = !!validateAll || !!validateVersionPrefix;
  const shouldVersionSuffixBeValidated   = !!validateAll || !!validateVersionSuffix;
  const shouldVersionBeValidated         = !!validateAll || !!validateVersion;
  const shouldAssemblyVersionBeValidated = !!validateAll || !!validateAssemblyVersion;
  const shouldFileVersionBeValidated     = !!validateAll || !!validateFileVersion;
  const shouldPackageVersionBeValidated  = !!validateAll || !!validatePackageVersion;

  /* eslint-disable @typescript-eslint/no-unused-expressions */

  shouldVersionPrefixBeValidated   && validator.validateVersionPrefix(versionPrefix);
  shouldVersionSuffixBeValidated   && validator.validateVersionSuffix(versionSuffix);
  shouldVersionBeValidated         && validator.validateVersion(version);
  shouldAssemblyVersionBeValidated && validator.validateAssemblyVersion(assemblyVersion);
  shouldFileVersionBeValidated     && validator.validateFileVersion(fileVersion);
  shouldPackageVersionBeValidated  && validator.validatePackageVersion(packageVersion);

  /* eslint-enable no-multi-spaces, @typescript-eslint/no-unused-expressions */
}

try {
  const { file, ...validationInputs } = getInputs();

  const msbuild = MsBuild.readFile(file);
  const versions = msbuild.getVersions();

  validateVersions(validationInputs, versions);

  setOutputs(versions);
} catch (error) {
  setFailed(error.message);
}
