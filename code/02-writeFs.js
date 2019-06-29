/*Gonefour_boke*/

var fs = require('fs');
//第一个参数文件路径
//第二个参数文件内容
//第三个参数是回调函数,回调函数只有一个参数（error）
fs.writeFile('./hello.txt','你11们s11s好/n',function (error) {
    if (error) {
    	console.log('写入失败');
    }else{
    	console.log('写入成功');
    }
});

