const http = require("http");
const mod = require("./my.module");



http.createServer((req, res) => {
    res.setHeader("acess-control-allow-origin", "*")

    const myresponse = JSON.stringify(mod.list);
    //console.log(mod.list);
    res.end(myresponse);
    //


    console.log(mod.list);
}).listen(5200);