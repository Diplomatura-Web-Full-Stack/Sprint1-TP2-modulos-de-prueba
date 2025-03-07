/* path:  es un módulo nativo de Node.js que proporciona utilidades para manejar y transformar rutas de archivos y directorios.*/


import path from 'path';

//definir una ruta de archivo de ejemplo 
const filePath = '/data/ejemplo.txt';


//obtener el directorio base
const dirName = path.dirname(filePath); //
console.log/("Directorio base:", dirName); 

//obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath,'.txt');
console.log("Nombre del archivo:", baseName);

//Obtener la extension del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

//crear una ruta unida
const newPath = path.join('/user', 'docs', 'nexfile.txt');
console.log("Nueva ruta:" , newPath);

