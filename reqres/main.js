var http=require('http');

var server = http.createServer(function(request,response){

    //response.end("Hello World")
    if(request.url=="/"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<h1>This is home page</h1>')
        response.end();
    }
    else if(request.url=="/about"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<h1>This is about page</h1>')
        response.end();
    }
    else if(request.url=="/contact"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<h1>This is contact page</h1>')
        response.end();
    }

});
server.listen(5052);
console.log("Successfully Run");