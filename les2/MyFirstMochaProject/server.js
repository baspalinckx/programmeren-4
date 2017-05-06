// dit is mijn server
var express = require('express');

var config = require('./config.json');

var app = express();
app.set('PORT', config.webPort);

var port = process.env.PORT || 3000;

app.all('*', function(request, response, next) {
console.log(request.method + " " + request.url);
next();
})
app.use('/api/v1', 
require('./routes/routes_api_v1'))

app.use('/info',
require('./routes/routes_api_v2'))

app.get('/', function(request, response) {
response.send('Hello Avans, GET request received');
})

app.post('/', function(request, response) {
response.send('Hello Avans, POST request received');
})
app.put('/', function(request, response) {
response.send('Hello Avans, PUT request received!');
})
app.all('*', function(request, response) {
response.status(404);
response.send('404 Not found');
})
app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})