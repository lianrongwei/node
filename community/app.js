//定义模块
const express = require('express')
const path = require('path')
//自定义路由模块
const router = require('./route')

//POST
const bodyParser = require('body-parser')

//session
const session = require('express-session')


const app = express()

//开放静态资源目录
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

//配置art-template模板引擎
app.engine('html', require('express-art-template'))
//配置目录 默认目录就是 views
app.set('views', path.join(__dirname, './views/'))

//配置解析表单POST 请求体插件 中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

//挂载路由aap中
app.use(router)


//开启服务
app.listen(3000, function () {
	console.log('server is running .... ');
})
