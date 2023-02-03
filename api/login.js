
var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var psw = queryObj.psw
    res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
    res.end("Server收到了服务请求，内容如下 姓名：" + name + '，密码：' + psw);
});
server.listen(3000);
console.log('Server running at http://192.168.3.9:3000/')
