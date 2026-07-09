const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err,data) => {
    if(err){
        console.log(err);
        res.end();
    }else{
        res.end(data);
    }
  })
});

server.listen(8000, () => {
  console.log("running on localhost 8000");
});
