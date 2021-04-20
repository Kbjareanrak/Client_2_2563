var net = require('net');
var HOST = '172.26.252.120';
var PORT = 6969;
var server = net.createServer();

var answer = 13;

server.listen(PORT, HOST);
server.on('connection', function(sock) {
    var i = 0;
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) {
       if(i == 0){
           if((data.length) == 10){
               sock.write('OK');
               i++;
            }else{
                sock.write('Wrong username');
                sock.destroy();
            }
       }else{
           if (data == answer) {
               sock.write('BINGO');
               sock.destroy();
            }
            if(i == 4){
                sock.write('END');
                sock.destroy();
            }else if (data !== answer) {
                sock.write('WRONG');
                i++;
            }
       }
});

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
});