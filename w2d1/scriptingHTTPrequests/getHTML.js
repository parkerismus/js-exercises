function getHTML (options, fn) {

  // while https is built-in to Node, it is a module, so it must be required
  var https = require('https');

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // Buffering:
    var rawData = '';

    response.on('data', function(chunk) {
      rawData += chunk;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      fn(rawData);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, function(html) {
  console.log(html.length)
});

getHTML(requestOptions, function(html) {
  console.log(html)
});
