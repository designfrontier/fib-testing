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

    it('should work for string that is a number', () => {
        assert.strictEqual(getFib('14'), 377);
        assert.strictEqual(getFib('0x05'), 5);
        assert.strictEqual(getFib('0x06'), 8);
    });

    context('should throw errors for non-number inputs', () => {
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
            it(`should throw TypeError for ${input.toString()}`, () => {
                assert.throws(() => getFib(input), 'TypeError');
            });
        });
    });
});
