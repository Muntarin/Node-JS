var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url=="/"){

        fs.rename('demo.text','demoNew.text',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Rename Fail");
                res.end();
             }
             else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Rename Success");
                res.end();
             }
        })

      
    }
});
server.listen(4040);
console.log("Successfully Run");