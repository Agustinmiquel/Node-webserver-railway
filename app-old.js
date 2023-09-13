const http = require('http'); 

http.createServer((req, res)=>{
    res.write('Hola mundo'); 
    res.end();
}).listen(8000);

console.log('Escuchando el puerto: ', 8000); 
