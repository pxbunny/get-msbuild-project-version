export class ArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ArgumentError';
  }
}

export abstract class Guard {
  static aganistEmptyOrWhiteSpace(value: string | undefined, name: string): void {
    if (Guard.isBlank(value)) {
      throw new ArgumentError(`${name} is empty or white space`);
    }
  }

  private static isBlank(str?: string): boolean {
    return !str || /^\s*$/.test(str);
  }
}
