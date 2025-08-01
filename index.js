const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//  console.log(req.headers);
//    console.log("Request received");
fs.appendFile('log.txt', `Request received at ${new Date()} (${req.url})\n`, (err) => {
    if (err) throw err;
    console.log('Log updated');
});
   res.end('Hello World\n');
});

server.listen(7000, () => {
  console.log('Server running at http://localhost:7000');
});