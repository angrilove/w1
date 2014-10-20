var crypto = require('crypto');

(function() {
    var len = 3;
    var token = require( 'crypto' ).randomBytes( len ).toString( 'hex' );
    console.log(token);
})();

crypto.randomBytes(3, function(ex, buf) {
    if (ex) throw ex;
    console.log('Have %d bytes of random data: %s', buf.length, buf.toString( 'hex' ));
});
