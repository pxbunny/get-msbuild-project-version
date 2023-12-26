import { DOMParser } from '@xmldom/xmldom';
import { readFileSync } from 'fs';
import { select } from 'xpath';

import { Guard } from './guard';

export type Versions = {
  versionPrefix?: string;
  versionSuffix?: string;
  version?: string;
  assemblyVersion?: string;
  fileVersion?: string;
  informationalVersion?: string;
  packageVersion?: string;
};

export class MsBuild {
  private readonly fileContent: string;

  private constructor(fileContent: string) {
    Guard.aganistEmptyOrWhiteSpace(fileContent, 'fileContent');
    this.fileContent = fileContent;
  }

  public static readFile(filePath: string): MsBuild {
    Guard.aganistEmptyOrWhiteSpace(filePath, 'filePath');
    const fileContent = readFileSync(filePath, 'utf8');
    return new MsBuild(fileContent);
  }

  private static getVersion(
    doc: Document,
    propertyName: string,
    defaultValue: string
  ): string {
    const pattern = `string(/Project/PropertyGroup/${propertyName})`;
    const version = select(pattern, doc) as string;
    return version ? version.trim() : defaultValue;
  }

  public getVersions(): Versions {
    const doc = new DOMParser().parseFromString(this.fileContent, 'text/xml');

    const versionPrefix = MsBuild.getVersion(doc, 'VersionPrefix', '1.0.0');
    const versionSuffix = MsBuild.getVersion(doc, 'VersionSuffix', '');
    const version = MsBuild.getVersion(
      doc,
      'Version',
      versionSuffix ? `${versionPrefix}-${versionSuffix}` : versionPrefix
    );
    const assemblyVersion = MsBuild.getVersion(
      doc,
      'AssemblyVersion',
      versionPrefix.split('.').length === 3
        ? `${versionPrefix}.0`
        : versionPrefix
    );
    const fileVersion = MsBuild.getVersion(doc, 'FileVersion', assemblyVersion);
    const informationalVersion = MsBuild.getVersion(
      doc,
      'InformationalVersion',
      version
    );
    const packageVersion = MsBuild.getVersion(doc, 'PackageVersion', version);

    return {
      versionPrefix,
      versionSuffix,
      version,
      assemblyVersion,
      fileVersion,
      informationalVersion,
      packageVersion
    };
  }
}
