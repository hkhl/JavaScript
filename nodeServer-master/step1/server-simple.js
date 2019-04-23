//核心代码
var http = require('http')
var fs = require('fs')
//console.log(__dirname)

//服务器特别容易挂掉不推荐使用！
// var server = http.createServer(function(req,res){
// 	同步读取数据
// 	console.log(__dirname + '/static'+ req.url)
// 	var fileContent = fs.readFileSync(__dirname + '/static' + req.url)
// 	res.end(fileContent)
// })

//稍微好一点
var server = http.createServer(function(req,res){
	console.log(__dirname + '/static' + req.url)
	try{   //可能会导致错误的代码
		var fileContent = fs.readFileSync(__dirname + '/static' + req.url)
		res.write(fileContent)
	}catch(error){   //在错误发生时怎么处理
		res.writeHead(404,'not Found')
	}
	res.end()
})

server.listen(8000)
console.log('visit http://localhost:8000')