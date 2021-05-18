const express = require('express');
const app = express();
var router = require('./router/server')(app);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/public'));

var server = app.listen(8888, function(){
    console.log("Express server has started on port 8888")
});


