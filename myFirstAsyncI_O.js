var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, contents){
	var array = contents.split('\n');
	console.log(array.length - 1);
});