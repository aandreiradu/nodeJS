const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my page');
    } else if (req.url === '/about') {
        res.end('This is the welcome page');
    } else {
        res.end(`
            <h1>Ooops!</h1>
            <p>We can't find this page...:( </p>
            <a href='/'>back home</a>
        `);
    }
});

server.listen(5000);
