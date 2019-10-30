var express = require('express');
var app = express();

// テンプレートエンジンを EJS に設定
app.set('views', './views');
app.set('view engine', 'ejs');

// 静的ファイルは無条件に公開
app.use('/public', express.static('public'));

// ルーティング設定
app.get('/', require('./routes/api.js'));

//ポート3000でリッスン開始
app.listen(3000, () => console.log('app listening on port 3000!'));