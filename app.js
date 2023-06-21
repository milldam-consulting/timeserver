const http = require('http');

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    const now = new Date()
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'version': '1.0',
        'utc': now.toUTCString(),
    }));
})

server.listen(port, host, () => {
    console.log(`Starting server on port ${port}`);
});
