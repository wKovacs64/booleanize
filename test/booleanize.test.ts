import booleanize from '../src/index';

describe('booleanize', () => {
  it('returns false for falsy values', () => {
    expect(booleanize(null)).toBe(false);
    expect(booleanize(undefined)).toBe(false);
    expect(booleanize(false)).toBe(false);
    expect(booleanize(0)).toBe(false);
    expect(booleanize(BigInt(0))).toBe(false);
    expect(booleanize('')).toBe(false);
    expect(booleanize('null')).toBe(false);
    expect(booleanize('undefined')).toBe(false);
    expect(booleanize('false')).toBe(false);
    expect(booleanize('0')).toBe(false);
    expect(booleanize('no')).toBe(false);
  });

  it('returns true for truthy values', () => {
    expect(booleanize(true)).toBe(true);
    expect(booleanize(42)).toBe(true);
    expect(booleanize(BigInt(42))).toBe(true);
    expect(booleanize('true')).toBe(true);
    expect(booleanize('1')).toBe(true);
    expect(booleanize('yes')).toBe(true);
    expect(booleanize('42')).toBe(true);
  });

  it('throws on unsupported input types', () => {
    expect(() => booleanize({} as any)).toThrowErrorMatchingInlineSnapshot(
      `"Unable to booleanize type: object"`,
    );

    expect(() =>
      booleanize(Symbol('false') as any),
    ).toThrowErrorMatchingInlineSnapshot(`"Unable to booleanize type: symbol"`);
  });
});
