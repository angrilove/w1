// 
// @see http://segmentfault.com/q/1010000000506163#字典统计分析
// 
var fs = require('fs');


var timestemp = new Date();
var directory = 'data/';
fs.exists(directory, function(exists) {
    if (!exists) {
        console.log("Please create data directory and file!");
        return;
    }
    fs.readFile(directory + 'data.txt', function(e, data) {
        if (e) throw e;
        var lines = {};
        var arr = data.toString().split('\n');
        for (var i = arr.length; i--;) {
            lines[arr[i]] = lines[arr[i]] ? lines[arr[i]] + 1 : 1;
        }
        data = [];
        for (var key in lines) {
            data.push(key + ": " + lines[key]);
        }
        fs.writeFile(directory + 'analysis.txt', data.join('\r\n'), function(e) {
            if (e) throw e;
            console.log("Analysis Success!");
            console.log("Use ", (new Date() - timestemp) + "ms");
        });
    });
});
