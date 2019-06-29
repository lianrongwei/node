//1.加载http 核心模块
var http = require('http');
//2.使用 http.createServer() 方法创建一个Web服务器, 返回一个 Server 实例
var server = http.createServer();
//3
//注册request请求事件
//第二个回调函数 有两个参数（request，response)请求，响应
server.on('request',function (){
	console.log('收到客户端请求'); 
});

//4.绑定端口号，启动服务器
server.listen(3000,function (){
	console.log('服务器启动成功，可以通过http://127.0.0.1:3000/localhost:3000 来进行访问');
});