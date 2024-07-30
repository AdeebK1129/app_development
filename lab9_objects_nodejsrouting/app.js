// import the http module
const http = require("http");
const fs = require('fs');

// create server
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});

    // create routing using url
    const url = request.url
    
    if(url ==="/home" || url === "/"){
        fs.createReadStream("index.html").pipe(response);
    }
    else if (url==="/about"){
        fs.createReadStream("about.html").pipe(response);
    }
    else{
        fs.createReadStream("404.html").pipe(response);
    }
})

// server is listening to port 3000
server.listen(3000, () => {
    console.log('Server is Running');
})

/* 
// server for index.html
const server = http.createServer((request, response) => {
    // send the response header
    response.writeHead(200, {'Content-Type': 'text/html'});

    // create a read stream for the index.html file
    const readStream = fs.createReadStream(__dirname + '/index.html');

    // piping the read stream to the response
    readStream.pipe(response);
})
*/
