 const getFib = (i) => i <= 1 ? i : getFib(i - 1) + getFib(i - 2);

 module.exports = getFib;
