//nodejs里面通过require去加载一个模快
var http = require('http')
//通过http模块创建一个服务器
var server = http.createServer(function(req,res){
	//当本次请求到达浏览器后，在终端输出请求的url信息
	console.log(req.url)
	//设置响应头
	res.setHeader('Content-Type','text/plain;charset=gbk')
	//检测服务器状态
	res.writeHead(200,'Okay')
	//将写入的数据返回给浏览器（发送响应数据）
	res.write('hello world')
	//结束传输
	res.end()
})
//监听端口
server.listen(8090)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8090')