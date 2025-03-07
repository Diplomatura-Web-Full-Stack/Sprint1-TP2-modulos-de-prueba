import fs from 'fs';

// Leer un archivo de manera asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido del archivo:', data);
});
// Lee el archivo example.txt y lo muestra por consola.

// Escribir en un nuevo archivo
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
  if (err) throw err;
  console.log('Archivo creado y escrito');
});
// Crea un archivo llamado newfile.txt y escribe "Contenido nuevo".

// Renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
  if (err) throw err;
  console.log('Archivo renombrado');
});
//  Renombra el archivo newfile.txt a renamedfile.txt.
