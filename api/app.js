var express = require('express');
let multer = require('multer');
var schedule = require('node-schedule');
let http = require("http");
let fs = require("fs");
let path=require('path');
var app = express();
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/upload', express.static('./upload'));
app.use('/views', express.static('./views'));
var router=require('./router');


app.use(router);






//app.listen(8000, () => console.log('Example app listening on port 3000!'));
http.createServer(app).listen(9000,function(){
    console.log('启动成功')
});
// https.createServer(httpsOption, app).listen(443);