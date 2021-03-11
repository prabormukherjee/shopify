const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);


/*
node app.js

npm init
npm start
npm run customName
*/