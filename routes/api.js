var express = require('express');
var router = express.Router();

var indexApi = require('./apis/indexApi');

// デフォルトルーティング
router.get('/', indexApi.startup);

module.exports = router;