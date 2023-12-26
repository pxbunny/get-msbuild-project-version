import { ValidationError, Validator } from '../src/validator';

describe('validateVersionPrefix method', () => {
  it('should throw an error on empty string', () => {
    const validator = new Validator();
    const func = () => validator.validateVersionPrefix('');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on whitespace only string', () => {
    const validator = new Validator();
    const func = () => validator.validateVersionPrefix('   ');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on undefined', () => {
    const validator = new Validator();
    const func = () => validator.validateVersionPrefix(undefined);
    expect(func).toThrow(ValidationError);
  });

  const testCasesValid = ['1.0.0', '1.2.3', '1.2.3.4'];
  it.each(testCasesValid)('should successfully validate version %s', (version: string) => {
    const validator = new Validator();
    const func = () => validator.validateVersionPrefix('1.0.0');
    expect(func).not.toThrow();
  });

  const testCasesInvalid = ['1', '1.0', '1.2.3.4.5', 'a.b.c', 'text', '1.2,3'];
  it.each(testCasesInvalid)(
    'should throw a validation error on invalid version %s',
    (version: string) => {
      const validator = new Validator();
      const func = () => validator.validateVersionPrefix(version);
      expect(func).toThrow(ValidationError);
    }
  );
});

describe('validateVersionSuffix method', () => {
  it('should throw an error on empty string', () => {
    const validator = new Validator();
    const func = () => validator.validateVersionSuffix('');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on whitespace only string', () => {
    const validator = new Validator();
    const func = () => validator.validateVersionSuffix('   ');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on undefined', () => {
    const validator = new Validator();
    const func = () => validator.validateVersionSuffix(undefined);
    expect(func).toThrow(ValidationError);
  });

  const testCasesValid = ['prelease', 'beta', 'beta-1'];
  it.each(testCasesValid)('should successfully validate version %s', (version: string) => {
    const validator = new Validator();
    const func = () => validator.validateVersionSuffix(version);
    expect(func).not.toThrow();
  });

  const testCasesInvalid = ['beta 2', 'beta-1.2', 'beta-1.2.3'];
  it.each(testCasesInvalid)(
    'should throw a validation error on invalid version %s',
    (version: string) => {
      const validator = new Validator();
      const func = () => validator.validateVersionSuffix(version);
      expect(func).toThrow(ValidationError);
    }
  );
});

describe('validateVersion method', () => {
  it('should throw an error on empty string', () => {
    const validator = new Validator();
    const func = () => validator.validateVersion('');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on whitespace only string', () => {
    const validator = new Validator();
    const func = () => validator.validateVersion('   ');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on undefined', () => {
    const validator = new Validator();
    const func = () => validator.validateVersion(undefined);
    expect(func).toThrow(ValidationError);
  });

  const testCasesValid = [
    '1.0.0',
    '1.2.3',
    '1.2.3.4',
    '1.2.3-beta',
    '1.2.3-beta-1',
    '1.2.3.4-prerelease'
  ];
  it.each(testCasesValid)('should successfully validate version %s', (version: string) => {
    const validator = new Validator();
    const func = () => validator.validateVersion(version);
    expect(func).not.toThrow();
  });

  const testCasesInvalid = [
    '1',
    '1.0',
    '1.2.3.4.5',
    '1.2.3.prerelease',
    '1.2.3-beta.1',
    '1.2.3 prelease'
  ];
  it.each(testCasesInvalid)(
    'should throw a validation error on invalid version %s',
    (version: string) => {
      const validator = new Validator();
      const func = () => validator.validateVersion(version);
      expect(func).toThrow(ValidationError);
    }
  );
});

describe('validateAssemblyVersion method', () => {
  it('should throw an error on empty string', () => {
    const validator = new Validator();
    const func = () => validator.validateAssemblyVersion('');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on whitespace only string', () => {
    const validator = new Validator();
    const func = () => validator.validateAssemblyVersion('   ');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on undefined', () => {
    const validator = new Validator();
    const func = () => validator.validateAssemblyVersion(undefined);
    expect(func).toThrow(ValidationError);
  });

  const testCasesValid = ['1.0.0.0', '1.2.3.4'];
  it.each(testCasesValid)('should successfully validate version %s', (version: string) => {
    const validator = new Validator();
    const func = () => validator.validateAssemblyVersion(version);
    expect(func).not.toThrow();
  });

  const testCasesInvalid = [
    '1',
    '1.0',
    '1.2.3',
    '1.2.3-beta',
    '1.2.3-beta-1',
    '1.2.3.4-prerelease',
    '1.2.3.4.5'
  ];
  it.each(testCasesInvalid)(
    'should throw a validation error on invalid version %s',
    (version: string) => {
      const validator = new Validator();
      const func = () => validator.validateAssemblyVersion(version);
      expect(func).toThrow(ValidationError);
    }
  );
});

describe('validateFileVersion method', () => {
  it('should throw an error on empty string', () => {
    const validator = new Validator();
    const func = () => validator.validateFileVersion('');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on whitespace only string', () => {
    const validator = new Validator();
    const func = () => validator.validateFileVersion('   ');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on undefined', () => {
    const validator = new Validator();
    const func = () => validator.validateFileVersion(undefined);
    expect(func).toThrow(ValidationError);
  });

  const testCasesValid = ['1.0.0.0', '1.2.3.4'];
  it.each(testCasesValid)('should successfully validate version %s', (version: string) => {
    const validator = new Validator();
    const func = () => validator.validateAssemblyVersion(version);
    expect(func).not.toThrow();
  });

  const testCasesInvalid = [
    '1',
    '1.0',
    '1.2.3',
    '1.2.3-beta',
    '1.2.3-beta-1',
    '1.2.3.4-prerelease',
    '1.2.3.4.5'
  ];
  it.each(testCasesInvalid)(
    'should throw a validation error on invalid version %s',
    (version: string) => {
      const validator = new Validator();
      const func = () => validator.validateAssemblyVersion(version);
      expect(func).toThrow(ValidationError);
    }
  );
});

describe('validatePackageVersion method', () => {
  it('should throw an error on empty string', () => {
    const validator = new Validator();
    const func = () => validator.validatePackageVersion('');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on whitespace only string', () => {
    const validator = new Validator();
    const func = () => validator.validatePackageVersion('   ');
    expect(func).toThrow(ValidationError);
  });

  it('should throw an error on undefined', () => {
    const validator = new Validator();
    const func = () => validator.validatePackageVersion(undefined);
    expect(func).toThrow(ValidationError);
  });

  const testCasesValid = ['1.0.0', '1.2.3', '1.2.3-beta', '1.2.3-beta-1', '1.2.3.4-prerelease'];
  it.each(testCasesValid)('should successfully validate version %s', (version: string) => {
    const validator = new Validator();
    const func = () => validator.validatePackageVersion(version);
    expect(func).not.toThrow();
  });

  const testCasesInvalid = [
    '1',
    '1.0',
    '1.2.3.4.5',
    '1.2.3.prerelease',
    '1.2.3-beta.1',
    '1.2.3 prelease'
  ];
  it.each(testCasesInvalid)(
    'should throw a validation error on invalid version %s',
    (version: string) => {
      const validator = new Validator();
      const func = () => validator.validatePackageVersion(version);
      expect(func).toThrow(ValidationError);
    }
  );
});
