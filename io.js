var fs = require('fs');

var data = ["1", "2,"];

// fs.writeFile("data.txt", data.join("\n"), function(err) {
// 	if (err) throw err;
// 	console.log("Write Success!");
// });

if (!fs.existsSync()) {
	fs.mkdirSync("data");
}

fs.open("data/data.txt", "w+", 0666, function(e, fd) {
	if (e) throw e;
	fs.write(fd, data.join("\n"), 0, "utf8", function(e) {
		if (e) throw e;
		fs.closeSync(fd);
	});
});

// fs.open("data.txt", 'w', 0644, function(e, fd) {
// 	if (e) throw e;
// 	fs.write(fd, data.join("\n"), 0, 'utf8', function(e) {
// 		if (e) throw e;
// 		fs.closeSync(fd);
// 	});
// });