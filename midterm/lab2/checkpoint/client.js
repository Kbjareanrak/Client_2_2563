var net = require('net');
var HOST = 'coin.werapun.com';
var PORT = 6969;


var client = new net.Socket();
client.connect(PORT, HOST, function() {
   console.log('5935512090 ' + HOST + ':' + PORT);
   client.write('5935512090');
});

client.on('data', function(data) {
    let n = Math.floor(Math.random() * 21);
    if (data.toString() == 'OK') {
        client.write(n.toString());
    }
    else if (data.toString() == 'WRONG') {
        client.write(n.toString());
    }
    else if (data.toString() == 'BINGO') {
        console.log('BINGO');
        client.destroy();
    }
    else{console.log('Sometime wrong');
}
   
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
   console.log('Connection closed');
});