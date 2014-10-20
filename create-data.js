var fs = require("fs");


// 
// @see http://stackoverflow.com/questions/22056248/javascript-nodejs-random-string-alternate-techniques/22056380
// 
var timestamp = new Date();

// nodejs随机数生成
var TOKEN_CHARS = '0123456789';// 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var LINE_LEN = 1000000; // 3.1469973260387937525653122354951e+85
var MIN_CHAR_LEN = 5;
var CHAR_LEN = 5;

var lines = [], chars, len = 0;
for (var i = 0; i < LINE_LEN; i++) {
    chars = [];
    // len = Math.floor(Math.random() * TOKEN_CHARS.length);
    // while (len <= MIN_CHAR_LEN) {
    //     len = Math.floor(Math.random() * TOKEN_CHARS.length); // (Math.random() * num).toFix(0)
    // }
    for (var j = 0; j < CHAR_LEN; j++) {
        var index = Math.floor(Math.random() * TOKEN_CHARS.length);
        chars.push(TOKEN_CHARS[index]);
    }
    lines.push(chars.join(''));
}
fs.exists('data/', function(exists) {
    if (!exists) {
        fs.mkdir('data/', createFile);
    } else {
        createFile(exists);
    }
});

var createFile = function(exists) {
    if (!exists) {
        console.log('Create "data" directory success!');
    }
    fs.writeFile('data/data.txt', lines.join('\n'), function(err) {
        if (err) throw err;
        console.log("Create default data Success!");
        console.log("Use", (new Date() - timestamp) + "ms");
    });
};
