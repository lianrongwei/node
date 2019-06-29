var getDate = function (){
    var date = new Date()
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    var d = date.getDate()
    m = m < 10 ? '0' + m : m
    d = d < 10 ? '0' + d : d
    return y + '-' + m + '-' + d
}

var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var comments = [
	{
		name: '张三0',
		message: '这篇文件写的很好啊',
		dateTime: '2015-10-16'
	},
	{
		name: '张三1',
		message: '这篇文件写的很好啊',
		dateTime: '2015-10-16'
	},
	{
		name: '张三2',
		message: '这篇文件写的很好啊',
		dateTime: '2015-10-16'
	},
	{
		name: '张三3',
		message: '这篇文件写的很好啊',
		dateTime: '2015-10-16'
	},
	{
		name: '张三4',
		message: '这篇文件写的很好啊',
		dateTime: '2015-10-16'
	}
]

http
    .createServer(function(req, res) {
        var parseObj = url.parse(req.url, true);
        var pathname = parseObj.pathname
        if (pathname === '/') {
            fs.readFile('./views/index.html', function(err, data) {
                if (err) return res.end('404 not found')
                data = template.render(data.toString(),{
                	comments: comments
                })
                res.end(data)
            })
        } else if (pathname === '/post') {
        	fs.readFile('./views/post.html', function(err, data) {
                if (err) return res.end('404 not found')
                res.end(data)
            })
        } else if (pathname.indexOf('/public/') === 0) {
            fs.readFile('.' + pathname, function(err, data) {
                if (err) return res.end('404 not found')
                res.end(data)
            })
        } else if (pathname === '/pinglun') {
            res.setHeader('Access-Control-Allow-Origin','*')
            var comment = parseObj.query
            comment.dateTime = getDate()
            comments.unshift(comment)
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end(JSON.stringify({msg: '请求报错'}))
        } else {
            fs.readFile('./views/404.html', function(err, data) {
                if (err) return res.end('404 not found')
                res.end(data)
            })
        }
    })
    .listen(3000, function() {
        console.log('server is running.')
    })

