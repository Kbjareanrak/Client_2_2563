// const http = require('http');
// const server = http.createServer(function(req, res){
//    res.writeHead(200, {'Content-type': 'text/plain'});
//    res.end('Hello world\n');
// });

// server.listen(8000);
// console.log('Server is ready!');

// const express = require('express');
// const app = express();

// app.get('/', function(req, res){
//     res.send('<html><body><h1>Hello world</h1></body></html>')
//  });

// const express = require('express');
// const app = express();

// app.get('/greeting', (req, res) => {
//     let greetText = req.query.str1 + " " + req.query.str2
//     res.send(`<html><body><h1 style="align:center;">${greetText}</h1></body></html>`)
//  })
 
//  app.listen(8000);

// const express = require('express');
// const app = express();

// app.get('/greeting/:str1/:str2/:str3', (req, res) => {
//   console.log(req)
//   let greetText = req.params.str1 + " " + req.params.str2+ " " + req.params.str3
//   res.send(`<html><body>
//             <h1 style="align:center;">Hey: ${greetText}</h1>
//             </body></html>`)
// })

// app.listen(8000);

// const express = require('express'),
//    app = express(),
//    bodyParser = require('body-parser');

// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static(__dirname + '/public'));

// app.post('/add', urlencodedParser, function(req, res){
//    let result = parseInt(req.body.a) + parseInt(req.body.b);
//    res.send('Result = ' + result);
// });

// app.listen(8000);

//Cookie
// const express = require('express')
// const app = express()
// const cookieParser = require('cookie-parser')
// app.use(cookieParser('keyboard cat')) //‘keyboard cat’ is a secret key to sign cookie (prevent cookie tamper)
// app.get('/ck_get', function(req, res) {
//    res.send(req.cookies)
// })

// app.get('/ck_set', function(req, res) {
//    res.cookie('a', 10)
//    res.send('ok')
// })

// app.listen(8000)

//Session (req.session)
// const express = require('express')
// const app = express()
// const session = require('express-session')

//                          // sign cookie (for a session)
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
//    resave : false, saveUninitialized: false }))
//    // resave => Forces the session to be saved back to the session store, even if the session was never modified 
//    // saveUninitialized => the cookie will not be set on a response with an uninitialized session

// app.use(function(req, res, next) {
//    var sess = req.session
//    if (sess.views) {
//        sess.views++
//    } else {
//        sess.views = 1
//    }
//    console.log(sess.views)
//    next();
// })
// app.get('/',function(req, res) {
//    res.send('count =' + req.session.views)
// })
// app.listen(8000)

// Sample API (JSON)
const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000

let tasks = [
   { id: 1, name: 'Do homework' },
   { id: 2, name: 'Read book' },
   { id: 3, name: 'Write a program' }]

app.use(cors())

app.get('/', (req,res) => {
   res.json(tasks)
})

app.listen(PORT, () => console.log(`listen at ${PORT}`))





 
 