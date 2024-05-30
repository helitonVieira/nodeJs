import mongoose, { mongo } from "mongoose";
//mongodb+srv://admin:<password>@cluster0.psjvjx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://admin:<password>@cluster0.yhxwfjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 //OBS  DEPOIS DO mongodb.net/ ... temos que informar o nome do banco que foi criado livraria
  //mongoose.connect("mongodb+srv://admin:admin123@cluster0.psjvjx8.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"); 
 //conectaNaDatabase.catch(err => console.log(err));

 /*async function conectaNaDatabase() {  
        mongoose.connect("mongodb+srv://admin:admin123@cluster0.op2uxh4.mongodb.net/livrarias?retryWrites=true&w=majority&appName=Cluster0");
 };*/

 async function conectaNaDatabase() {
       mongoose.connect(process.env.DB_CONNECTION_STRING);
       return mongoose.connection;
     };
 
 export default conectaNaDatabase;

