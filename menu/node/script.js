const http = require('http');
const server = http.createServer(function(req, res){
    console.log("request recieved!")
    res.end("hello hermi!");
});
server.listen(880, function(){
    console.log("it's listening!")
})

