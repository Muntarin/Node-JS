var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url=="/"){

        fs.writeFile('demo.text','Hello World',function(error){

             if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Fail");
                res.end();
             }
             else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Success");
                res.end();
             }
        });
    }
});
server.listen(5050);
console.log("Successfully Run");