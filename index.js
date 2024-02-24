const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
    console.log("The URL is: ", req.url)
    if (req.url === "/favicon.ico") {
        return res.end();
    }

    const myUrl = url.parse(req.url,true);
    console.log(myUrl);

    const log = `${Date.now()}: ${req.url} New Req Received \n`;
    
    fs.appendFile('log.txt', log, (err, data) => {
        if (err) {
            console.error("Error writing to log.txt", err);
        }

        switch (myUrl.pathname) {
            case "/":
                res.end("Hey there from Server");
                break;
            
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi! ${username}`);
                break;
            
            default: 
                res.end("404 Error not found.");
        }
    });
});

myServer.listen(8000, () => console.log("Server started."));
