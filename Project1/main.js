const http = require("http")
const mod1 = require("./my.module1")
http.createServer((req, res) => {
    const myresponse = JSON.stringify(mod1.obj1)

    res.end(myresponse);
}).listen(5100)