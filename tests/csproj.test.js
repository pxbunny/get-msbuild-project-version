import { readdirSync } from 'fs';
import { getVersionFromFile, readFile } from '../src/csproj';

describe('readFile function', () => {
  it('should read existing file', () => {
    const file = readFile('tests/testFiles/ValidFile1_1.0.0.csproj');
    expect(typeof(file)).toBe('string');
    expect(file.length).not.toEqual(0);
  });

  it('should throw an exception when file does not exist', () => {
    try {
      readFile('tests/testFiles/NonExistingFile.csproj');
    } catch (error) {
      expect(error.code).toEqual('ENOENT');
    }
  });
});

describe('getVersionFromFile function', () => {
  it('should return version from files', () => {
    const files = readdirSync('tests/testFiles')
      .filter(file => file.startsWith('ValidFile') &&
                      file.endsWith('.csproj' &&
                      file.includes('1.0.0')));

    files.forEach(file => {
      const fileContent = readFile(`tests/testFiles/${file}`);
      const version = getVersionFromFile(fileContent);
      expect(version).toEqual('1.0.0');
    });
  });
});
