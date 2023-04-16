const http = import('http');
const fs = import('fs');
const path = import('path');
const open = import('open');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  open(`http://${hostname}:${port}`);
});
