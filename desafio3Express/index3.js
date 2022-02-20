//importar la dependencia
const express = require("express");

//defino la aplicacion
const app = express();

//defino mi variable puerto
const port = 8080 

//ARRAY DE PRODUCTOS
const productos = [
    {id:1, nombre:"Dentrifico", marca:'Colgate', imagen:"https://http2.mlstatic.com/D_NQ_NP_710139-MLA42353020233_062020-V.jpg", precio:1200},
    {id:2, nombre:"Cepillo de Dientes", marca:'Colgate', imagen:"https://m.media-amazon.com/images/I/81rdz3q0DJL._SL1500_.jpg", precio:500},
    {id:3, nombre:"Shampoo", marca:'Head & Shouders', imagen:"https://images.ctfassets.net/jdgtuh2uadx0/2oO6Un3ocd6y7lbthwHpsn/6cce3fbc15b76c8120055d93bae0cefe/LIMPIEZA-RENOVADORA-SHAMPOO.png", precio:1600},
    {id:4, nombre:"Crema de Enjuage", marca:'Head & Shouders', imagen:"https://farmacityar.vteximg.com.br/arquivos/ids/184954-1000-1000/206040_Shampoo-Head-Shoulders-Control-Grasa-x-375-Ml-imagen-1.jpg?v=636932756750100000", precio:1800},
    {id:5, nombre:"Jabon de Tocador", marca:'Estrella', imagen:"https://walmartar.vteximg.com.br/arquivos/ids/875117-1000-1000/Jab-n-Tocador-Estrella-Relajaci-n-130-Gr-1-474880.jpg?v=637377135812330000", precio:800},
    {id:6, nombre:"Toallon", marca:'Pixel', imagen:"https://www.sueniolandia.com.ar/wp-content/uploads/2019/12/PALTO-PIXEL.jpg", precio:2000}

]

//Genero un numero random
const NumeroRandom =  Math.floor(Math.random() * (productos.length - 1)) + 1;
//utilizo ese numero para filtrar el array y obtener un producto
const productoRandom = productos.filter(producto => producto.id === NumeroRandom);


//lo que vamos a ver del lado del cliente

//muestro el array producto
app.get("/productos", (req, res) => {
    res.json(productos);
  });

  //muestro el producto seleccionado al azar 
  app.get("/productosRandom", (req, res)=>{
      res.json(productoRandom);
  })


//escucho lo que hay en el puerto
app.listen(port, ()=>{
    console.log(`escuchando la app en http://localhost:${port}`)
})