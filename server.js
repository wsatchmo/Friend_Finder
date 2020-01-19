//DEPENDENCIES
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, 'routing/apiRoutes'))(app); //pathing for routes
require(path.join(__dirname, 'routing/htmlRoutes'))(app);

// start server listening
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});