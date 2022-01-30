//importar la dependencia
const express = require("express");

//defino la aplicacion
const app = express();

//defino mi variable puerto
const port = 8080 || process.env.port; // esto sirve para tomar el puerto 8080 o el que el servicio me cree


let visitas = 0
let date = new Date();



//lo que vamos a ver del lado del cliente
app.get('/', (req, res) =>{
    res.send('<h1>BIENVENIDOS AL SERVIDOR EXPRESS </>')
})
app.get("/visitas", (req, res) =>{
    res.send(`NUMERO DE VISITAS: ${visitas++}`);
});
app.get("/fyh", (req, res) =>{
    res.send(`FECHA Y HORA : ${date}`);
});


//escucho lo que hay en el puerto
app.listen(port, ()=>{
    console.log(`escuchando la app en http://localhost:${port}`)
})