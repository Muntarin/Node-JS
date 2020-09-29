var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){

    if(req.url=="/"){
        
        let error=fs.renameSync('demoSynNew.txt','demoSynNew2.txt');

        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Rename Fail");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File rename successful");
            res.end();
        }


    }
});
server.listen(4040);
console.log("Successfully Run");