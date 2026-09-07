const http = require('http');
const fs=require('fs')
const _=require('lodash')
const server=http.createServer((req,res)=>{
    console.log('Request is made');
    
    console.log(req.method);
    
    res.setHeader('Content-Type','text/html');
    console.log(req.url);
     
    let path='./docs/';

    if(req.url=='/'){
        path += 'index.html';
    }
    else if(req.url=='/home'){
        res.statusCode=301
        res.setHeader('Location','/')
        res.end()
    }
    else if(req.url=='/about'){
        path += 'about.html';
    }
    else if(req.url=='/contact'){
        path += 'contact.html';
    }
    else{
        path += 'notFound.html';
        res.statusCode=404
    }
    
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err.message);
            res.end()
            
        }
        else{
            res.write(data)
            res.end()
        }
    })
   
});
server.listen(3000,'localhost',()=>{
    console.log('Server is listening');
    console.log(_.random(15,25));
    
    
})