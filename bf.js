
var buf = new Buffer(256);
console.log(" bytes: " + buf.toString());

var len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));

