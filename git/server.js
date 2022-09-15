const express = require('express');
const app = express();
var http = require('http');
http.createServer(function(req, res){
res.writeHead(200, { 'Content-Type': 'application/json'
})
res.end("hello world!");
}).listen(3000,"127.0.0.1")
// app.use(express.json());


// app.listen(3001,(()=>{
//     console.log("listen on 3001")
// }))