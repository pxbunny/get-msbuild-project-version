import { getInputs } from '../src/io';

const inputEnvNames = [
  'INPUT_FILE',
  'INPUT_VALIDATE-ALL',
  'INPUT_VALIDATE-VERSION-PREFIX',
  'INPUT_VALIDATE-VERSION-SUFFIX',
  'INPUT_VALIDATE-VERSION',
  'INPUT_VALIDATE-ASSEMBLY-VERSION',
  'INPUT_VALIDATE-FILE-VERSION',
  'INPUT_VALIDATE-PACKAGE-VERSION'
];

function setInput(name: (typeof inputEnvNames)[number], value: string) {
  process.env[name] = value;
}

describe('getInputs method', () => {
  afterEach(() => {
    inputEnvNames.forEach((name) => {
      delete process.env[name];
    });
  });

  it('should correctly parse inputs', () => {
    setInput('INPUT_FILE', './directory/file.proj');
    setInput('INPUT_VALIDATE-ALL', 'true');
    setInput('INPUT_VALIDATE-VERSION-PREFIX', 'true');
    setInput('INPUT_VALIDATE-VERSION-SUFFIX', 'true');
    setInput('INPUT_VALIDATE-VERSION', 'true');
    setInput('INPUT_VALIDATE-ASSEMBLY-VERSION', 'true');
    setInput('INPUT_VALIDATE-FILE-VERSION', 'true');
    setInput('INPUT_VALIDATE-PACKAGE-VERSION', 'true');

    const inputs = getInputs();

    expect(inputs).toEqual({
      file: './directory/file.proj',
      validateAll: true,
      validateVersionPrefix: true,
      validateVersionSuffix: true,
      validateVersion: true,
      validateAssemblyVersion: true,
      validateFileVersion: true,
      validatePackageVersion: true
    });
  });

  it('should correctly parse inputs with default values', () => {
    setInput('INPUT_FILE', './directory/file.proj');

    const inputs = getInputs();

    expect(inputs).toEqual({
      file: './directory/file.proj',
      validateAll: false,
      validateVersionPrefix: false,
      validateVersionSuffix: false,
      validateVersion: false,
      validateAssemblyVersion: false,
      validateFileVersion: false,
      validatePackageVersion: false
    });
  });
});
