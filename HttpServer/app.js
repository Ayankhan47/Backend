require('http').createServer((req, res)=>{
    console.log(req.url);
    
    if(req.url === '/'){
        res.end("home Page")
    }
    if(req.url === '/about'){
        res.end("about Page")
    }
    if(req.url === '/product'){
        res.end("product Page")
    }
    
   
}).listen(3001)