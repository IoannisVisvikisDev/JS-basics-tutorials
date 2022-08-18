

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Incoming request : ${req.url}`);
    req.rawHeaders.forEach(header => {
        console.log(header);
    });

    if(req.url === "/"){  //http GET to localhost:9000
        res.write("Hello", (error) => {
            res.statusCode = 500;
            if(error === undefined) return;
            error.message = "500 : Internal server error!"
        });
    }
    else if(req.url === "/to/mouni/tis/manas/sou"){   //http GET to localhost:9000//to/mouni/tis/manas/sou
        res.write("Hello apo to mouni tis manas sou!!!", (error) => {
            res.statusCode = 500;
            if(error === undefined) return;
            error.message = "To mouni tis manas sou petakse error!"
        })
    }

    res.end();
});

server.listen(9000);

