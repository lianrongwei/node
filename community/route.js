
const express = require('express')

const User = require('./models/user')
const md5 = require('blueimp-md5')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('index.html', {
		user: req.session.user
	})
})

router.get('/login', (req, res) => {
	res.render('login.html')
})

router.post('/login', (req, res) => {
	
})

router.get('/register', (req, res) => {
	res.render('register.html')
})

router.post('/register', (req, res) => {
	//提交响应体
	let body = req.body
	//数据查询
	User.findOne({
		$or: [
			{email: body.email},
			{nickname: body.nickname}
		]
	}, (err, data) => {
		if (err) return res.status(500).json({
											err_code: 500,
											message: 'Server error'
										})
		//判断邮箱用户名是否存在
		if (data) return res.status(200).json({
											err_code: 1,
											message: 'An email or nickname already exists'
										})
		body.password = md5(md5(body.password))
		//成功注册用户
		new User(body).save((err, user) => {
			if (err) return res.status(500).json({
												err_code: 500,
												message: 'Server error'
											})
			req.session.user = user
			res.status(200).json({
									err_code: 0,
									message: 'ok'
								})
		})//end new User
	})//end callback(err,data)
})//end router post
module.exports = router
