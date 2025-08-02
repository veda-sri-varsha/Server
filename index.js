const http = require('http'); // HTTP module
const fs = require('fs'); // File System
const { URL } = require('url'); //Uniform Resource Locator

const server = http.createServer((req, res) => {
    // Ignore favicon
    if (req.url === '/favicon.ico') return res.end();

    //  Define the URL object
    const url = new URL(req.url, `http://${req.headers.host}`);

    // Log request
    fs.appendFile('log.txt', `Request received at ${new Date()}: (${req.url})\n`, (err) => {
        if (err) {
            console.error('Log write error:', err);
            res.statusCode = 500;
            return res.end('Internal Server Error');
        }

        console.log('Log updated');

        //  Route handling based on pathname
        switch (url.pathname) {
            case '/':
                res.end('Welcome to the Home Page\n');
                break;
            case '/about':
                res.end('This is the About Page\n');
                break;
            case '/contact':
                res.end('This is the Contact Page\n');
                break;
            default:
                res.end('Page not found\n');
                break;
        }
    });
});


server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
