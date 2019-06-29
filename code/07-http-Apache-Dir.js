
var http = require('http')
var fs = require('fs')
var template = require('art-template')
var server = http.createServer()
server.on('request', function (req, res){
	var url = req.url
	var wwwDir = 'F:/Web/node/code/www'
	var filePath = '/index.html'
	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	// if (url !== '/') filePath = url
	fs.readFile('./template.html', function (err, data) {
		if (err) return res.end('<h1>404 not found!</h1>')

		fs.readdir(wwwDir, function (err, files) {
			if (err) return res.end('can not find www dir')
			// console.log(files)
			
			data = template.render(data.toString(), {
				files: files,
				title: 'art-template'
			})

			res.end(data) 
		})
		
		
	});
});
server.listen(3000,function (){
	console.log('server is running....')
})