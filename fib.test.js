const getFib = require('./fib');

describe('should handle numerical input', () => {
  test('should return 0 for 0', () => {
      expect(getFib(0)).toBe(0);
      expect(getFib(-0)).toBe(0);
  });

  test('should return 1 for 1', () => {
      expect(getFib(1)).toBe(1);
  });

  test('should return 89 for 11', () => {
      expect(getFib(11)).toBe(89);
  });

  test('should return 357 for 14', () => {
      expect(getFib(14)).toBe(377);
  });

  test('should work for string that is a number', () => {
      expect(getFib('14')).toBe(377);
      expect(getFib('0x05')).toBe(5);
      expect(getFib('0x06')).toBe(8);
  });
});

describe('should throw errors for non-number inputs', () => {
    [
        -1,
        -42,
        -102,
        -Infinity,
        true,
        'the enemies gate is down',
        () => `can't take the sky from me`,
        false
    ].forEach(input => {
        test(`should throw TypeError for ${input.toString()}`, () => {
            expect(() => getFib(input)).toThrow('TypeError');
        });
    });
});
