var express = require('express');
var path = require('path');
var app = express();

// Use port 3000 unless there exists a preconfigured port
app.set( 'port', ( process.env.PORT || 3000 ));

app.use(express.static(path.join(__dirname, 'public')));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
});
