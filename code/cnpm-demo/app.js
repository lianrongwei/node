const express = require('express')

const app = express()

//公开指定的目录
app.use('/public',express.static('./public/'))

app.get('/', (req, res) => res.end('Hello express'))
app.get('/a', (req, res) => res.send('我是A页面'))
app.get('/about', (req, res) => {
	res.setHeader('content-type', 'text/html; charset=UTF-8')
	res.end('关于我')
})

app.listen(3000, () => console.log('express is server running....'))

