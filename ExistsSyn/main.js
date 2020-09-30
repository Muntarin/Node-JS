var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url=="/"){

       let result= fs.existsSync('demoNew.text');

            if(result){
                
                res.end("True");
             }
             else{
               
                res.end("False");
             }
        }

      
    });

server.listen(4040);
console.log("Successfully Run");