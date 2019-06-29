var template = require('art-template')

var ret = template.render('hello {{ name }}',{
	name: 'Gonefour_boke'
})
console.log(ret)