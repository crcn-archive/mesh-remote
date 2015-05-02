```javascript
var mesh   = require("mesh");
var memory = require("mesh-memory");
var remote = require("mesh-remote");
var io     = require("socket.io-client");

var bus = mesh.tailable(memory());

bus(mesh.op("tail")).pipe(mesh.open(remote({
  channel: "channelName",
  client: io("http://127.0.0.1")
})));


```
