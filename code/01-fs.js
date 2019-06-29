/*Gonefour_boke*/

//1.使用require 方法加载fs核心模块
var fs = require('fs');
//2.读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数就是回调函数，调回函数有两个参数（error，data）
fs.readFile('./hello.txt',function (error,data) {
    //打印进制码
    // console.log(data);
    // console.log(data.toString());
    if (error) {
    	console.log('file no defined');
    }else{
    	console.log(data.toString());
    }
});

