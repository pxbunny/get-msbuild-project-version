import { readdirSync } from 'fs';
import { getVersionFromFile, readFile } from '../src/csproj';
import { ValidationError } from '../src/validation';

describe('readFile function', () => {
  it('should read existing file', () => {
    const file = readFile('tests/TestFiles/ValidFile1_1.0.0.csproj');
    expect(typeof(file)).toBe('string');
    expect(file.length).not.toEqual(0);
  });

  it('should throw a validation error on non valid file extension', () => {
    const func = () => readFile('tests/TestFiles/file.xml');
    expect(func).toThrow(ValidationError);
  });

  it('should throw a validation error on empty file path', () => {
    const func = () => readFile('');
    expect(func).toThrow(ValidationError);
  });

  it('should throw a validation error on whitespace only path', () => {
    const func = () => readFile('   ');
    expect(func).toThrow(ValidationError);
  });

  it('should throw a validation error when file does not exist', () => {
    const func = () => readFile('tests/TestFiles/NonExistingFile.csproj');
    expect(func).toThrow(ValidationError);
  });
});

describe('getVersionFromFile function', () => {
  it('should throw a validation error on empty file', () => {
    const func = () => getVersionFromFile(' ');
    expect(func).toThrow(ValidationError);
  });

  it('should return version from files', () => {
    const files = readdirSync('tests/TestFiles')
      .filter(file => file.startsWith('ValidFile') &&
                      file.endsWith('.csproj' &&
                      file.includes('1.0.0')));

    files.forEach(file => {
      const fileContent = readFile(`tests/TestFiles/${file}`);
      const version = getVersionFromFile(fileContent);
      expect(version).toEqual('1.0.0');
    });
  });
});
