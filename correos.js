const fs = require('fs');

const url = require('url');

const http = require('http');

const enviar = require('./mailer');

http
.createServer((req, res)=>{
    let {para, asunto, contenido} = url.parse(req.url, true).query
    if(req.url =='/'){
        res.setHeader('content-type', 'text/html')
        fs.readFile('index.html', 'utf8', (err, data)=>{
            res.end(data)
        });
    }
if(req.url.startsWith('/correos')){
enviar(para, asunto, contenido)
}
}).listen(3000, ()=>{
    console.log('Servidor ON');
});

