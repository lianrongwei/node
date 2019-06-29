const express = require('express')
const http = require('http')
const fs = require('fs')
const app = express()
var gifFilePath = 'http://photocdn.sohu.com/20150721/mp23627612_1437451852870_2.gif'
app.get('/', (req, res) => {
	//获取
	// http.get(gifFilePath, (response) => {
	// 	response.setEncoding('binary')
	// 	var type = response.headers["content-type"]
    //     var imgData = ''
    //     response
	// 			.on('data', (data) => {
	// 				imgData += data
	// 			})
	// 			.on('end', () => {
	// 				  res.writeHead(200, { 'Access-Control-Allow-Origin': '*', "Content-Type": type })   //设置头，允许跨域
	// 	              res.write(imgData, "binary")
	// 	              res.end()
	// 			})
	// })

	//保存
	http.get(gifFilePath, (response) => {
		response.setEncoding('binary')
		var imgData = ''
		response
				.on('data', (data) => {
					imgData += data
				})
				.on('end', () => {
					fs.writeFile(__dirname + '/1.gif', imgData, 'binary', (err) => {
						if (err) return console.log('保存失败')
						console.log('ok')
						res.send('保存成功')
					});
				})
	})

})
app.listen(3000, function () {
	console.log('server is running .... ');
})