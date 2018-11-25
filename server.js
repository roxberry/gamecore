const http = require('http');
const config = require('./config/config');

const hostname = process.env.HOST || config.ip;
const port = process.env.PORT || config.port;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


console.log(config);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
