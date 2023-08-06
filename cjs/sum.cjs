function sum(a, b) {
  return a + b;
}

// module.exports = sum;

// obligamos a usar sum en su importación
module.exports = {
  sum, // sum: sum esto es un atajo de ES6
};
