// import { getVersionFromFile, readFile } from '../src/csproj';
// import { ValidationError } from '../src/validation';

// describe('readFile function', () => {
//   it('should read existing file', () => {
//     const file = readFile('tests/TestFiles/Valid1_1.0.0.proj');
//     expect(typeof(file)).toBe('string');
//     expect(file.length).not.toEqual(0);
//   });

//   it('should throw a validation error on empty file path', () => {
//     const func = () => readFile('');
//     expect(func).toThrow(ValidationError);
//   });

//   it('should throw a validation error on whitespace only path', () => {
//     const func = () => readFile('   ');
//     expect(func).toThrow(ValidationError);
//   });

//   it('should throw a validation error when file does not exist', () => {
//     const func = () => readFile('tests/TestFiles/NonExistingFile.proj');
//     expect(func).toThrow(ValidationError);
//   });
// });

// describe('getVersionFromFile function', () => {
//   const testCasesValid = [
//     ['Valid1_1.0.0.proj', '1.0.0'],
//     ['Valid2_1.0.0.proj', '1.0.0'],
//     ['Valid3_1.0.0.proj', '1.0.0'],
//     ['Version_1.2.3-beta.proj', '1.2.3-beta'],
//     ['Version_1.2.3.4.proj', '1.2.3.4'],
//     ['Version_2.1.3.proj', '2.1.3']
//   ];
//   test.each(testCasesValid)('should return correct version from file %s', (file, expected) => {
//     const fileContent = readFile(`tests/TestFiles/${file}`);
//     const actual = getVersionFromFile(fileContent);
//     expect(actual).toEqual(expected);
//   });

//   const testCasesInvalid = [
//     'Invalid1.proj',
//     'Invalid2.proj',
//     'Invalid3.proj'
//   ];
//   test.each(testCasesInvalid)('should throw a validation error on invalid file %s', (file) => {
//     const fileContent = readFile(`tests/TestFiles/${file}`);
//     const version = getVersionFromFile(fileContent);
//     expect(!!version).toBe(false);
//   });

//   it('should throw a validation error on empty file', () => {
//     const func = () => getVersionFromFile(' ');
//     expect(func).toThrow(ValidationError);
//   });
// });
