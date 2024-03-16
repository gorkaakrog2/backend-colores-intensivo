const http = require("http");

http.createServer((peticion,respuesta) => {
    respuesta.write("Esta es la respuesta del servidor");
    respuesta.end();
}).listen(4000);