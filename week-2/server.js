var express = require('express')
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser); 

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/formdata', function(req, res) {
    res.send("Sorry we can't find " +  req.body.model + " "+req.body.level + "  better check your internet connection");
    console.log("You submitted: " +  req.body.model + " "+req.body.level);

   // var image ="<html><body><img src="public/dino.png"></body></html>;

});			

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})