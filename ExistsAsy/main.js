var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url=="/"){

       fs.exists("demoNew.text",function(result){

        
        if(result){
                
            res.end("True");
         }
         else{
           
            res.end("False");
         }
    });
}

});

server.listen(4040);
console.log("Successfully Run");