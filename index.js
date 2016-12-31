var http = require('http');
var fs = require('fs');
var path = require('path');
var port = process.argv[2] || 3001;

// http servr 생성
var server = http.createServer(function(req, res){
	var url = req.url;
	var pathParse = path.parse(url);	
	var file = 'index.html';
	var filePath = path.join('./', pathParse.dir, pathParse.base || file);

	readFile(filePath, function(data){
		switch(path.extname(filePath)){
			case '.js':
				res.writeHead(200, {'Content-Type': 'text/javascript'});
				break;
			case '.css':
				res.writeHead(200, {'Content-Type': 'text/css'});
				break;
			case '.json':
				res.writeHead(200, {'Content-Type': 'application/json'});
				break;
			default:
				res.writeHead(200, {'Content-Type': 'text/html'});
				break;
		}

		res.write(data);
		res.end();
	});	

}).listen(port);

function readFile(file, cb){
	// 파일이 있는지 검사
	fs.exists(file, function(exists){
		if(exists){
			// 파일이 있다면 읽기
			fs.readFile(file, 'utf-8', function(err, data){
				if(err) throw err;
				cb(data);
			});
		} else {
			// 파일이 없다면 생성
			return '';
		}
	});
}
