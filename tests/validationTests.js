import {
  ValidationError,
  ensureFileNotEmpty,
  ensureVersionNotEmpty,
  validateFilePath,
  validateVersion
} from '../src/validation';

describe('ensureFileNotEmpty function', () => {
  it('should throw a validation error on empty file', () => {
    const func = () => ensureFileNotEmpty(' ');
    expect(func).toThrow(ValidationError);
  });
});

describe('ensureVersionNotEmpty function', () => {
  it('should throw a validation error on empty version', () => {
    const func = () => ensureVersionNotEmpty(' ');
    expect(func).toThrow(ValidationError);
  });
});

describe('validateFilePath function', () => {
  const testCasesValid = [
    'tests/TestFiles/Valid1_1.0.0.csproj',
    'tests/TestFiles/Valid2_1.0.0.csproj',
    'tests/TestFiles/Valid3_1.0.0.csproj',
    'tests/TestFiles/Version_1.2.3-beta.csproj',
    'tests/TestFiles/Version_1.2.3.4.csproj',
    'tests/TestFiles/Version_2.1.3.csproj'
  ];
  test.each(testCasesValid)('should validate correct file path %s', (path) => {
    validateFilePath(path);
  });

  const testCasesInvalid = [
    ' ',
    'NonExistingFile.csproj',
    'tests/TestFiles/file.xml',
  ];
  test.each(testCasesInvalid)('should throw a validation error on invalid file path %s', (path) => {
    const func = () => validateFilePath(path);
    expect(func).toThrow(ValidationError);
  });
});

describe('validateVersion function', () => {
  const testCasesValid = [
    '1.0.0',
    '1.0.0.1',
    '1.0.0.1-beta',
    '1.0.0-alpha',
    '1.0.0-alpha.1',
    '111.100.100',
    '1.2.3-beta',
    '1.2.3.4'
  ];
  test.each(testCasesValid)('should successfully validate version %s', (version) => {
    validateVersion(version);
  });

  const testCasesInvalid = [
    '1.0',
    ' 2.0.0',
    '3.0.0 ',
    '4-2-3',
    '5version',
    '6.1.2asdfasdf'
  ];
  test.each(testCasesInvalid)('should throw a validation error on invalid version %s', (version) => {
    const func = () => validateVersion(version);
    expect(func).toThrow(ValidationError);
  });

  it('should throw a validation error on empty version', () => {
    const func = () => validateVersion(' ');
    expect(func).toThrow(ValidationError);
  });
});
