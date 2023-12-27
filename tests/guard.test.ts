import { ArgumentError, Guard } from '../src/guard';

describe('aganistEmptyOrWhiteSpace method', () => {
  it('should throw an error on empty string', () => {
    const func = () => Guard.againstEmptyOrWhiteSpace('', 'name');
    expect(func).toThrow(ArgumentError);
  });

  it('should throw an error on whitespace only string', () => {
    const func = () => Guard.againstEmptyOrWhiteSpace('   ', 'name');
    expect(func).toThrow(ArgumentError);
  });

  it('should throw an error on undefined', () => {
    const func = () => Guard.againstEmptyOrWhiteSpace(undefined, 'name');
    expect(func).toThrow(ArgumentError);
  });

  it('should not throw an error on valid string', () => {
    const func = () => Guard.againstEmptyOrWhiteSpace('value', 'name');
    expect(func).not.toThrow();
  });
});
