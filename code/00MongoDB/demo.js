const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost/test');
//创建
const Cat = mongoose.model('Cat', { name: String });
//添加数据
for (let i = 0; i < 100; i++) {
    const kitty = new Cat({ name: '喵喵'+ i });
    kitty.save().then(() => console.log('meow' + i ));
}