import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000; //ultiliza letras maiusculas quando variaveis estaticas

app.listen(PORT,() => {
    console.log("servidor escutando!");  //Quando subir aplicação msg avisando que esta escutando comando node server.js
});

//mongodb+srv://admin:admin123@cluster0.yhxwfjt.mongodb.net/

//mongodb+srv://admin:<password>@cluster0.yhxwfjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://admin:<password>@cluster0.yhxwfjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0