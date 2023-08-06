import {
  platform,
  release,
  arch,
  cpus,
  totalmem,
  freemem,
  uptime,
} from "node:os";

console.log("Información del sistema operativo:");
console.log("-------------------------------------------");

console.log("Nombre del sistema operativo:", platform());
console.log("Versión del sistema operativo:", release());
console.log("Arquitectura del sistema operativo:", arch());
console.log("CPUs:", cpus().length);
console.log("Memoria total:", totalmem() / 1024 / 1024);
console.log("Memoria libre:", freemem() / 1024 / 1024);
console.log("Up time:", uptime() / 60 / 60);
