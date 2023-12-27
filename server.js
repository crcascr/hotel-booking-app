const jsonServer = require('json-server');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());

server.use(middlewares);
server.use(router);

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

const httpsServer = https.createServer(options, server);

const PORT = 8000;
httpsServer.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT} with HTTPS`);
});
