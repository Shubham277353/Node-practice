const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'application/JSON'})
    res.end(JSON.stringify({data: 'Hello World'})); 
});

server.listen(8000,()=>{
    console.log("Server running on port 8000");
});