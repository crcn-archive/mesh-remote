var ros    = require("ros");

/**
 */

module.exports = function(options, bus) {
  var client  = options.client;
  var channel = options.channel || "operation";
  return ros(client.on.bind(client, channel), client.emit.bind(client, channel), bus);
};
