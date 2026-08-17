/**
const fs = require('fs');

if (fs.existsSync('dados.txt')) {
  const conteudo = fs.readFileSync('dados.txt', 'utf8');
  console.log(conteudo);
} else {
  fs.writeFileSync('dados.txt', 'Estudando Node.js!');
  console.log('Arquivo criado!');
}
*/

const http = require('http');

const servidor = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Bem-vindo à Home');
  } else if (req.url === '/sobre') {
    res.end('Sobre o sistema');
  } else {
    res.writeHead(404);
    res.end('Página não encontrada');
  }
});

servidor.listen(3000);
