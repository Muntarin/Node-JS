var fs = require('fs'); //adding

var http = require('http'); //manage server

var server=http.createServer(function(req,res){

    if(req.url="/"){
        /*
        //Asynchronous
        fs.readFile('index.html',function(error,data) {

            res.writeHead(200,{"Content-Type":"text/html"}); //response code 200
            res.write(data);
            res.end();
        });
        */

        //Synchronous
        let mydata=fs.readFileSync('index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata);
        res.end();

    }

});

server.listen(5050); //5050 Port Number
console.log("Successfully Run");
