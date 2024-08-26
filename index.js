const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('This is the Home Page');
    } 
    else if (req.url === '/about') {
        res.end('This is the About Page');
    } 
    else if (req.url === '/contact') {
        res.end('This is the Contact Page');
    }
    else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.end('Error writing file\n');
            } else {
                res.end('File demo.txt created successfully\n');
            }
        });
    }
});
server.listen(5500, () => {
    console.log("server is running on port 5500");
})
