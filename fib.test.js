const getFib = require('./fib');
const assert = require('chai').assert;

describe('fib tests', () => {
    it('should return 0 for 0', () => {
        assert.strictEqual(getFib(0), 0);
    });

    it('should return 1 for 1', () => {
        assert.strictEqual(getFib(1), 1);
    });

    it('should return 89 for 11', () => {
        assert.strictEqual(getFib(11), 89);
    });

    it('should return 357 for 14', () => {
        assert.strictEqual(getFib(14), 377);
    });
});
