/*const http = require("http");
const { getCharById } = require("./controlers/getCharById")

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split('/').at(-1);
        getCharById(res, +id);
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Route not found');
    }
}).listen(3001, "localhost"*/

const server = require("./app")
const PORT = 3001;

server.listen(PORT, () => {
   console.log(`Server raised in port: ` + PORT);
});