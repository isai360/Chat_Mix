const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

//configurar puerto
app.set('port', 3000);
app.use(express.static(__dirname + "/public"));



//setting(Servidor Denis360);
server.listen(app.get('port'), function(){
    console.log('servidor Iniciado');
})

require('socket')(server);

