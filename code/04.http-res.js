var http = require('http');
var server = http.createServer();
server.on('request',function (request,response){
	var url = request.url;
	console.log('收到客户端请求,请求路径是:' + url);
	if ( url == '/') {
		response.write('index')
	}else if (url == '/login') {
		response.write('loginIndex');
	}else if (url == '/register') {
		response.write('registerIndex');
	}else{
		response.write('404');
	}
	response.end();
});

server.listen(3000,function (){
	console.log('服务器启动成功，可以通过http://127.0.0.1:3000/localhost:3000 来进行访问');
});