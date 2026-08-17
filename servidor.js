const http = require('http');

const servidor = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Bem-vindo à Home');
  } else if (req.url === '/contato') {
    res.end('contato');
  } else {
    res.writeHead(404);
    res.end('Página não encontrada');
  }
});

servidor.listen(3000);