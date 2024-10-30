const http = require('http');

const server = http.createServer((req, res) => {
    // Check if the request URL and method match
    if (req.url === '/test' && req.method === 'GET') {
        // Set the response header
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Send a response back to the client
        res.end('You have reached /test!');
    } else {
        // Handle other routes or methods
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(5555, () => {
    console.log(`Server is listening on http://localhost:${5555}`);
});

class HttpServer {
    constructor(PORT) {

    }
}

// module.exports