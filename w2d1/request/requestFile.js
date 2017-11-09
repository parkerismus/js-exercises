// require 'request' and the Node 'fs' (filesystem module)
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
// 'request.get' is equivalent to 'request()'
        .on('error', function (err) {
          throw err;
        })
// 'request'.on('error', callback)' handles any error
        .on('response', function(response) {
          console.log('Response Status Code: ', response.statusCode);
          console.log('Download complete');
        })
// 'request.on('response', callback) handles the response
        .pipe(fs.createWriteStream('./future.jpg'));
        console.log('Downloading image');

