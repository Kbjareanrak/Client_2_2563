var net = require('net');
var HOST = '192.168.1.112';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
 console.log('5935512090 ' + HOST + ':' + PORT);
 client.write('5935512090');
});
client.on('data', function(data) {
    let N = Math.floor(Math.random() * 21);
    if (data == 'OK') {
        client.write(''+(N.toString()));
    }
    if (data == 'BINGO') {
        console.log('BINGO')
        client.destroy();
    }
    if (data == 'WRONG') {
        client.write(''+(N.toString()));
    }

 console.log('DATA: ' + data);

 
});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});