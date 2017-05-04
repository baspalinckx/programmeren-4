// dit is mijn server
var express = require('express');
var app = express();
var port = process.env.PORT || 8000

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