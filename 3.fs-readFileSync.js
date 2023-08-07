const fs = require("node:fs"); // a partir de node 16, se recomienda usar el prefijo node: para importar módulos nativos

console.log("Leyendo el primer archivo");
const text = fs.readFileSync("./file.txt", "utf-8"); // devuelve un buffer de memoria, por eso se agrega utf8
console.log(text);

console.log("Hacer coasas mientras lee el archivo...");

console.log("Leyendo el segundo archivo");
const secondText = fs.readFileSync("./file2.txt", "utf-8");
console.log(secondText);
