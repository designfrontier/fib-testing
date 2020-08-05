const getFib = require('./fib');

describe('fib tests', () => {
    test('should return 0 for 0', () => {
        expect(getFib(0)).toBe(0);
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
});
