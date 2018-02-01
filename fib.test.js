const getFib = require('./fib');
const assert = require('chai').assert;

describe('fib tests', () => {
    it('should return 0 for 0', () => {
        assert.strictEqual(getFib(0), 0);
        assert.strictEqual(getFib(-0), 0);
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

    it('should throw type error for negative numbers', () => {
        assert.throws(() => getFib(-1), 'TypeError');
        assert.throws(() => getFib(-42), 'TypeError');
        assert.throws(() => getFib(-102), 'TypeError');
        assert.throws(() => getFib(-Infinity), 'TypeError');
    });

    it('should throw type error for boolean', () => {
        assert.throws(() => getFib(true), 'TypeError');
    });

    it('should work for string that is a number', () => {
        assert.strictEqual(getFib('14'), 377);
        assert.strictEqual(getFib('0x05'), 5);
        assert.strictEqual(getFib('0x06'), 8);
    });

    it('should throw type error for string', () => {
        assert.throws(() => getFib('hello world'), 'TypeError');
    });

    it('should throw a type error if a function', () => {
        assert.throws(() => getFib(() => {return `can't take the sky from me`}), 'TypeError');
    });
});
