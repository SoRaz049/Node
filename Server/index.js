const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received \n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Hey there from Server");
                break;
            
            case "/about":
                res.end("I am Swaraj from Server side.");
                break;
            
            default: 
                res.end("404 Error not found.");
        }
    });
});

myServer.listen(8000, () => console.log("Server started."));
