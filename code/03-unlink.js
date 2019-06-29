var fs = require('fs');
fs.unlink('./hello.txt', function (error){
	if (error) {
		console.log('删除失败');
	}else{
		console.log('删除成功');
	}
});