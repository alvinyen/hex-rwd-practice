const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(`${__dirname}/dist`));
// console.log(`${__dirname}/dist`);
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(8080, () => {
    console.log('server is running on port 8080');
});
