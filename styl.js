var express = require('express');
var app = express();
console.log(process.argv[3]);
app.use(require('stylus').middleware("C:/Users/huarsc/AppData/Roaming/npm/node_modules/expressworks/exercises/stylish_css/public" + "main.styl"));
app.use(express.static("C:/Users/huarsc/AppData/Roaming/npm/node_modules/expressworks/exercises/stylish_css/public"));

app.listen(3000);
