const http = require('http');

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    const now = new Date()
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        'version': '1.1',
        'utc': now.toUTCString(),
        'iso': now.toISOString(),
    }));
})

server.listen(port, host, () => {
    console.log(`Starting server on port ${port}`);
});
