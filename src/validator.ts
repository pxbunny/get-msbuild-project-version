import { Guard } from './guard';

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class Validator {
  public validateVersionPrefix(versionPrefix?: string): void {
    Guard.aganistEmptyOrWhiteSpace(versionPrefix, 'versionPrefix');

    // major.minor.patch[.build]
    if (!versionPrefix?.match(/^([0-9]+\.){0,2}[0-9]+$/)) {
      throw new ValidationError('Wrong VersionPrefix format');
    }
  }

  public validateVersionSuffix(versionSuffix?: string): void {
    Guard.aganistEmptyOrWhiteSpace(versionSuffix, 'versionSuffix');

    // Alphanumberic (+ hyphen) string: [0-9A-Za-z-]*
    if (!versionSuffix?.match(/^[0-9A-Za-z-]+$/)) {
      throw new ValidationError('Wrong VersionSuffix format');
    }
  }

  public validateVersion(version?: string): void {
    Guard.aganistEmptyOrWhiteSpace(version, 'version');

    // major.minor.patch[.build][-prerelease]
    if (!version?.match(/^([0-9]+\.){0,2}[0-9]+(-[0-9A-Za-z-]+)?$/)) {
      throw new ValidationError('Wrong Version format');
    }
  }

  public validateAssemblyVersion(assemblyVersion?: string): void {
    Guard.aganistEmptyOrWhiteSpace(assemblyVersion, 'assemblyVersion');

    // major.minor.patch.build
    if (!assemblyVersion?.match(/^([0-9]+\.){3}[0-9]+$/)) {
      throw new ValidationError('Wrong AssemblyVersion format');
    }
  }

  public validateFileVersion(fileVersion?: string): void {
    Guard.aganistEmptyOrWhiteSpace(fileVersion, 'fileVersion');

    // major.minor.patch.build
    if (!fileVersion?.match(/^([0-9]+\.){3}[0-9]+$/)) {
      throw new ValidationError('Wrong FileVersion format');
    }
  }

  public validatePackageVersion(packageVersion?: string): void {
    Guard.aganistEmptyOrWhiteSpace(packageVersion, 'packageVersion');

    // major.minor.patch[.build][-prerelease]
    if (!packageVersion?.match(/^([0-9]+\.){0,2}[0-9]+(-[0-9A-Za-z-]+)?$/)) {
      throw new ValidationError('Wrong PackageVersion format');
    }
  }
}
