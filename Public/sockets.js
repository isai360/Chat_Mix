const io = require('socket.io');

module.exports = function (server){

    //socket para conectar servidor con cliente 
var sockets = io.listen(server);

sockets.on('connection', function (socket){
    console.log('nuevo Cliente conectado');

    socket.on('mensaje-del-cliente', function(data){
        sockets.emit('mensaje-del-servidor', data);
    });
});
}