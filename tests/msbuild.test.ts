import { ArgumentError } from '../src/guard';
import { MsBuild } from '../src/msbuild';

describe('readFile method', () => {
  it('should read existing file', () => {
    const msbuild = MsBuild.readFile('tests/files/ValidAllData.proj');
    const content = msbuild.content;
    expect(content.length).toBeGreaterThan(0);
  });

  it('should throw an error on empty file path', () => {
    const func = () => MsBuild.readFile('');
    expect(func).toThrow(ArgumentError);
  });

  it('should throw an error on whitespace only path', () => {
    const func = () => MsBuild.readFile('   ');
    expect(func).toThrow(ArgumentError);
  });

  it('should throw an error when file does not exist', () => {
    const func = () => MsBuild.readFile('tests/files/NonExistingFile.proj');
    expect(func).toThrow();
  });

  it('should not throw exception on valid file with no data', () => {
    const func = () => MsBuild.readFile('tests/files/ValidNoData.proj');
    expect(func).not.toThrow();
  });
});

describe('getVersions method', () => {
  it('should return correct versions', () => {
    const msbuild = MsBuild.readFile('tests/files/ValidAllData.proj');
    const versions = msbuild.getVersions();
    expect(versions.versionPrefix).toEqual('1.0.0');
    expect(versions.versionSuffix).toEqual('prelease');
    expect(versions.version).toEqual('1.0.1-beta');
    expect(versions.assemblyVersion).toEqual('1.0.2.0');
    expect(versions.fileVersion).toEqual('1.0.2.1');
    expect(versions.informationalVersion).toEqual('version');
    expect(versions.packageVersion).toEqual('1.0.3');
  });

  it('should return default versions when no data', () => {
    const msbuild = MsBuild.readFile('tests/files/ValidNoData.proj');
    const versions = msbuild.getVersions();
    expect(versions.versionPrefix).toEqual('1.0.0');
    expect(versions.versionSuffix).toEqual('');
    expect(versions.version).toEqual('1.0.0');
    expect(versions.assemblyVersion).toEqual('1.0.0.0');
    expect(versions.fileVersion).toEqual('1.0.0.0');
    expect(versions.informationalVersion).toEqual('1.0.0');
    expect(versions.packageVersion).toEqual('1.0.0');
  });
});
