export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class Validator {
  public validateVersionPrefix(versionPrefix?: string): void {
    // major.minor.patch[.build]
    if (!versionPrefix?.match(/^([0-9]+\.){2,3}[0-9]+$/)) {
      throw new ValidationError('Wrong VersionPrefix format');
    }
  }

  public validateVersionSuffix(versionSuffix?: string): void {
    // Alphanumberic (+ hyphen) string: [0-9A-Za-z-]*
    if (!versionSuffix?.match(/^[0-9A-Za-z-]+$/)) {
      throw new ValidationError('Wrong VersionSuffix format');
    }
  }

  public validateVersion(version?: string): void {
    // major.minor.patch[.build][-prerelease]
    if (!version?.match(/^([0-9]+\.){2,3}[0-9]+(-[0-9A-Za-z-]+)?$/)) {
      throw new ValidationError('Wrong Version format');
    }
  }

  public validateAssemblyVersion(assemblyVersion?: string): void {
    // major.minor.patch.build
    if (!assemblyVersion?.match(/^([0-9]+\.){3}[0-9]+$/)) {
      throw new ValidationError('Wrong AssemblyVersion format');
    }
  }

  public validateFileVersion(fileVersion?: string): void {
    // major.minor.patch.build
    if (!fileVersion?.match(/^([0-9]+\.){3}[0-9]+$/)) {
      throw new ValidationError('Wrong FileVersion format');
    }
  }

  public validatePackageVersion(packageVersion?: string): void {
    // major.minor.patch[.build][-prerelease]
    if (!packageVersion?.match(/^([0-9]+\.){2,3}[0-9]+(-[0-9A-Za-z-]+)?$/)) {
      throw new ValidationError('Wrong PackageVersion format');
    }
  }
}
