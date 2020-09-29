var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){

    if(req.url=="/"){
        
        let error=fs.unlinkSync('demoSynNew2.txt');

        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Delete Fail");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Delete successful");
            res.end();
        }


    }
});
server.listen(4040);
console.log("Successfully Run");