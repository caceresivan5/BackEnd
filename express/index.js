//importar la dependencia
const express = require("express");

//defino la aplicacion
const app = express();

//defino mi variable puerto
const port = 8080 


let visitas = 0
let date = new Date();

const frase = "HOLA MUNDO, COMO ESTAN?"

//middleware
//avisamos a EXPRESS que vamos a recibir data en formato Json
app.use(express.json);
app.use(express.urlencoded({extended: true}));

//lo que vamos a ver del lado del cliente

app.get("/", (req, res) => {
    res.send(`<h1>BIENVENIDOS AL SERVIDOR EXPRESS </h1>`);
  });

  //leyendo parametros desde la url del browser PARAMS
app.get("/visitas/:id", (req, res) =>{
    res.send(`NUMERO DE VISITAS CON EL ID ${req.params.id}: ${visitas++}`);
});

//leyendo parametros con un query QUERY
app.get("/fyh", (req, res) =>{
    res.send(`${req.query.name} LA FECHA Y HORA ES : ${date}`);
});

//EJERCICIO EXPRESS AVANZADO

//imprimir la frase de una constante
app.get("/api/Frase", (req, res) =>{
    console.log("REQUEST RECIBIDO");

    res.send({Frase:frase});
})

// a :num le voy a poner un numero y me tiene que imprimir la letra que se encuentra en esa posicion
app.get("/api/letras/:num", (req, res) =>{
    let position = req.params.num -1

    if( position >= frase.length || position< 0){
        res.json({mssg:"EL PARAMETRO ESTA FUERA DE RANGO"})
    }else if(isNaN(position)){
        res.json({mssg:"EL PARAMETRO NO ES UN NUMERO"})
    }else{
        res.send(`<h1> ${frase.charAt(position)} </h1>`)
    }
})


//escucho lo que hay en el puerto
app.listen(port, ()=>{
    console.log(`escuchando la app en http://localhost:${port}`)
})