/**
 * Created by shen on 16/4/30.
 */
var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
require('../webpack/dev-server');
var app = express();
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

require('./mockReq')(app);

var proxy = httpProxy.createProxyServer();
app.all('/dist/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://127.0.0.1:4000'
    });
});
app.listen(3000);