//server คือผู้ให้บริการ

var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;
net.createServer(function(sock) {
    //เมื่อไคลเเอ้นถูกส่งมา
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   //รอข้อมูลเข้ามา
   sock.on('data', function(data) {
       console.log('DATA ' + sock.remoteAddress + ': ' + data);
       //ตอบข้อมูลนี้กลับไปยังไคลเอ้น
       sock.write('You said "' + data + '"');
   });
   //ทำก็ต่อเมื่อมีการตัดการเชื่อมต่อ
   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
   //ใช้ในการดัก error
//    sock.on('error', function(err){
//        console.log('Er')
//    })

}).listen(PORT, HOST); //เปิด server แล้ว

console.log('Server listening on ' + HOST +':'+ PORT);