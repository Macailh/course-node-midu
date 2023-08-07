const fs = require("node:fs"); // a partir de node 16, se recomienda usar el prefijo node: para importar módulos nativos

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), //sí es un fichero
  stats.isDirectory(), // sí es un directorio
  stats.isSymbolicLink(), // sí es un enlace simbólico
  stats.size // tamaño en bytes
);
