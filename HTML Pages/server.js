var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require("express");
var app = express();
var path = require('path');
var bp = require('body-parser');
var writing;
var sentiment;
var magnitude;

function analyzeJournal(feelings){
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  // Creates a client
  const client = new language.LanguageServiceClient();

  const document = {
    content: feelings,
    type: 'PLAIN_TEXT',
  };

  const [result] = client.analyzeSentiment({document});

  const sentiment = result.documentSentiment;
  console.log(`Document sentiment:`);
  console.log(`  Score: ${sentiment.score}`);
  console.log(`  Magnitude: ${sentiment.magnitude}`);


  return
}



  app.use(bp.urlencoded({extended: false}));
  app.use(bp.json());

  app.use('/', express.static(path.join(__dirname, 'html')));

  app.route("/login").post(function (req, res) {
      console.log("We're in login!");
      console.log(req.body);
      res.sendStatus(200);
    });

    app.route("/analyze").post(function (req, res) {
        console.log("Analyzing sentiment");
        writing = (req.body);
        console.log(writing);
        //analyzeJournal(writing);

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
