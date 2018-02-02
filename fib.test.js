const getFib = require('./fib');
const assert = require('chai').assert;

describe('fib tests', () => {
    it('should return 0 for 0', () => {
        assert.strictEqual(getFib(0), 0);
    });

    // let's write some tests here!
});
