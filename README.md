# ejs-express
ejsとexpressでTodoListを作る  

### 参考サイト  
- [node.js、express、ejsでHello Worldするコード](https://qiita.com/Masa79/items/4d3c12949473017127d0)  
- [Node.js + Express で作る Webアプリケーション 開発 入門](https://garafu.blogspot.com/2016/07/nodejs-express-webapp-tutorial.html)

- プロジェクトフォルダで 
- $ npm init
- → package.json作成
- $ npm install express ejs --save

- 不足分のフォルダとファイルを作成
ejs-express
|-/public
    |-/javascripts
        |-index.js
    |-/stylesheets
        |-style.css
|-routes
    |-api.js
    |-/apis
|-/views
    |-index.ejs
|-/node_modules ※自動で生成される
|-app.js
|-package.json ※自動で生成される
|-package-lock.json ※自動で生成される

- mode_modulesをgit管理から外す
- .gitignoreファイルを追加
- ファイル内に "node_modules" を追加するだけ
- https://qiita.com/EngTks/items/a4f875956f0b087668f6

- Hello Worldの確認
- $ node app.js でサーバー起動
- localhost:3000/
- control + c でサーバー停止
