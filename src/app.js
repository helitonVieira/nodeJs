import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

/*conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
});*/

const app = express();
app.use(express.json());  // utiliza para conversao de string em objetos json
  //pagina principal
app.get("/", (req,res)=>{
    res.status(200).send("Curso de Node.js"); //utiliza send para enviar textos simples
});

//metodo GET pegar os dados
app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});


  //Busca com ID
  app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
  })

  //metodo POST enviando dados
  app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
  });

  //metodo PUT alterar nome
  app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
  });

  //metodo DELETE
  app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1); // metodo javaScript para deletar(index ser deletado, qtd posiçao ser deletada)
    res.status(200).send("livro removido com sucesso");    
  });
  

export default app;
