var express = require('express');
var app = express();

//viewエンジンをejsで設定
app.set('view engine', 'ejs');

//ルートのGET
app.get('/', function(req, res) {
    const message = "Hello World!";
    res.render('index', {
        message: message
    });
});

//ポート3000でリッスン開始
app.listen(3000, () => console.log('app listening on port 3000!'));