const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
// console.log(`${__dirname}/dist`);
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

const server = http.createServer(app);
server.listen(8080, () => {
    console.log('server is running on port 8080');
});
