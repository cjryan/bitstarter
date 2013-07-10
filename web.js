var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  res = fs.readFileSync('index.html');
  file_str = res.toString("utf-8",0,res.length);
  response.send(file_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
