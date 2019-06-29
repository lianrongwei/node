var fs = require('fs')

fs.readdir('F:/Web/node/code/www', function (err, files) {
	if (err) return console.log('404 not found')
	console.log(files)
})