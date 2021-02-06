// Express is a node module for building HTTP servers
var express = require('express');
var app = express();

//Tell express to look into the Public folder
app.use(express.static("public"));
app.use(express.json());

// The default route of / and what to do!
app.get("/", function(req, res) {
res.send("Hello Hello Thank you for connecting!");
});

// Listen on the default HTTP port - 80
app.listen(8080);

