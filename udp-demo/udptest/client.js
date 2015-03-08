var dgram = require('dgram');
var message = new Buffer("Hello, I am Here");
var client = dgram.createSocket("udp4");
client.send(message, 0, message.length, 8888, "192.168.1.168", function(err) {
  client.close();
});

