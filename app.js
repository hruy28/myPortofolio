var express = require('express');
var path = require('path');
var app = express();

// Use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, function() {
  console.log("Listening on port " + port);
})
