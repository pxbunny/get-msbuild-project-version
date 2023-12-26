import { ArgumentError, Guard } from '../src/guard';

describe('aganistEmptyOrWhiteSpace method', () => {
  it('should throw an error on empty string', () => {
    const func = () => Guard.aganistEmptyOrWhiteSpace('', 'name');
    expect(func).toThrow(ArgumentError);
  });

  it('should throw an error on whitespace only string', () => {
    const func = () => Guard.aganistEmptyOrWhiteSpace('   ', 'name');
    expect(func).toThrow(ArgumentError);
  });

  it('should throw an error on undefined', () => {
    const func = () => Guard.aganistEmptyOrWhiteSpace(undefined, 'name');
    expect(func).toThrow(ArgumentError);
  });

  it('should not throw an error on valid string', () => {
    const func = () => Guard.aganistEmptyOrWhiteSpace('value', 'name');
    expect(func).not.toThrow();
  });
});
