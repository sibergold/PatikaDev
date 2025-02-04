const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>INDEX SAYFASI</h2>");
    }
    else if (url == "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>ABOUT SAYFASI</h2>");
    }
    else if (url == "/contact") {
        res.writeHead(200, { "Contect-Type": "text/html" });
        res.write("<h2>İLETİŞİM SAYFASI</h2>")
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>404 SAYFA BULUNAMADI</h2>")
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`Sunucu ${port} nolu port ile çalışmaya başladı`);
});