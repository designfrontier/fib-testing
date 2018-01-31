 const getFib = (i) => {
    if (isNaN(new Number(i)) || typeof i === 'boolean' || new Number(i) < 0) {
        throw new Error('TypeError');
    }

    return i <= 1 ? i : getFib(i - 1) + getFib(i - 2);
}

 module.exports = getFib;
