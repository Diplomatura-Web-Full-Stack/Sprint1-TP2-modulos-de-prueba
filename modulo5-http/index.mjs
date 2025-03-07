import http from 'http';

// Crea un servidor HTTP básico
const server = http.createServer((req, res) => {

    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, mundo!');
});

//configurar el servidor para que escuche en el puerto 3000
const port = 3000;
const localhost = '127.0.0.1';

server.listen(port, localhost, ()=> {

    console.log(`Servidor ${port} corriendo en la ruta: ${localhost}`);
    
});