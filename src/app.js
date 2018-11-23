const http = require("http");
const express = require("express"); 

const app   = express();

const hostname = '127.0.0.1'; 
const port = 3000;

app.use((request, response, next) => {
    response.status(404).send('<h1>Página não encontrada!</h1>');
});

const server = http.createServer(app);

app.set("port", port);

server.listen(port, hostname, () => {
    console.log(`Servidor em Execução em http://${hostname}:${port}/`);
}) 