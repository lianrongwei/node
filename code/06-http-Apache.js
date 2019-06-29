
var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request', function (req, res){
	var url = req.url
	var wwwDir = 'F:/Web/node/code/www'
	var filePath = '/index.html'
	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	if (url !== '/') filePath = url
	fs.readFile(wwwDir + filePath, function (err, data) {
		if (err) return res.end('<h1>404 Not Found!</h1>')
		res.end(data)
	});
});
server.listen(3000,function (){
	console.log('server is running....')
})