const http      = require('http');


exports.startHttpServer = startHttpServer;

async function startHttpServer(port){
    return new Promise((resolve, reject)=>{
        var server = http.createServer(app).listen(port,function(){

            console.log("=app.get('port')======",app.get('port'))
            console.log("=app.get('env')======",app.get('env'))
            
            console.log("########## Express Connected #########", app.get('port')||port , app.get('env'));
            resolve(server)
        })
    });
}