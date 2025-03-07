import os from 'os';

// Obtener la arquitectura del sistema
console.log('Arquitectura:', os.arch());
//  Devuelve la arquitectura de la CPU, como 'x64' o 'arm'.

// Obtener el tipo de sistema operativo
console.log('Plataforma:', os.platform());
//  Devuelve el sistema operativo ('win32', 'linux', 'darwin' para macOS).

// Obtener la cantidad total de memoria RAM
console.log('Memoria total:', os.totalmem());
//  Devuelve la memoria total del sistema en bytes.

// Obtener la memoria RAM libre
console.log('Memoria libre:', os.freemem());
// Devuelve la memoria disponible en bytes.

// Obtener información de la CPU
console.log('Información de la CPU:', os.cpus());
//  Devuelve un objeto con detalles de cada núcleo de la CPU.

