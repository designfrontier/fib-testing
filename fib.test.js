const getFib = require('./fib');

describe('fib tests', () => {
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
        expect(getFib('14')).toBe( 377);
    });

    test('should throw type error for boolean', () => {
        expect(
          () => getFib(true)
        ).toThrow('TypeError');
    });

    test('should throw type error for string', () => {
        expect(
          () => getFib('hello world')
        ).toThrow('TypeError');
    });

    test('should throw a type error if a function', () => {
        expect(
          () => getFib(() => `can't take the sky from me`)
        ).toThrow('TypeError');
    });
});
