import http from "http";

const PORT = 3000; //ultiliza letras maiusculas quando variaveis estaticas

const rotas = {
"/": "Curso de Node.js API",
"/livros": "Entrei na rota livros",
"/autores": "Entrei na rota autores"
};

const server = http.createServer((req, res)=>{  //server variavel criada para armazenar tudo que vai ser trafegado usando protocolo http e passando as informações nescessarias pelo cabeçalho
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end(rotas[req.url]); //tudo que vai trafegar esta no nosso server , msg que vai trafegar via http
});

server.listen(PORT,() =>{
    console.log("servidor escutando!");  //Quando subir aplicação msg avisando que esta escutando comando node server.js
});