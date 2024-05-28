import app from "./src/app.js"

const PORT = 3000; //ultiliza letras maiusculas quando variaveis estaticas

app.listen(PORT,() =>{
    console.log("servidor escutando!");  //Quando subir aplicação msg avisando que esta escutando comando node server.js
});