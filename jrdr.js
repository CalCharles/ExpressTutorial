var express = require('express');
var fs = require('fs');
var app = express();
fs.readFile(process.argv[3], function(err, file) {
	app.get('/books', function(req,res) {
		res.send(JSON.parse(file));
	});
});

app.listen(process.argv[2])
