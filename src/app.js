import express from "express";

const app = express();
app.use(express.json());  // utiliza para conversao de string em objetos json

const livros = [
    {
      id: 1,
      titulo: "O Senhor dos Anéis"
    },
    {
      id: 2,
      titulo: "O Hobbit"
    }
  ]

app.get("/", (req,res)=>{
    res.status(200).send("Curso de Node.js"); //utiliza send para enviar textos simples
});

//metodo GET pegar os dados
app.get("/livros", (req, res) => {
    res.status(200).json(livros); // utiliza o json para objetos json
  });

  //metodo POST enviando dados
  app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
  });
  

export default app;
