var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require("express");
var app = express();
var path = require('path');
var bp = require('body-parser');




  app.use(bp.urlencoded({extended: false}));
  app.use(bp.json());

  app.use('/', express.static(path.join(__dirname, 'html')));

  app.route("/login").post(function (req, res) {
      console.log("We're in login!");
      console.log(req.body);
      res.sendStatus(200);
    });

    app.route("/login").post(function (req, res) {
        console.log("We're in login!");
        console.log(req.body);
        res.sendStatus(200);
      });

  app.listen(8080);

/*http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);*/
