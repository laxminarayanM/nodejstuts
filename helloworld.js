// Shows non blocking mode of execution with event loop in node js.


var http = require('http');

http.createServer(function(request,response){
  response.writeHead(200);
  response.write("Hello world! ");

  setTimeout(function(){
     response.write("Hello world is done !!");
     response.end();
  },5000);

}).listen(8000);   
