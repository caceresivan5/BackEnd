/* 
1 creo una carpeta
 
2 en la terminal escribo npm init -y  para crear un package Json
(me ubico en la carpeta con cd nombre de la carpeta / )

3 creo el index.js

4 si voy a utilizar express debo instalarlo junto con nodemon
( npm install --save express nodemon )


5 verifico todo en mi package.json si esta todo ok

6 en el package.json voy a script - creo start -- "start": "nodemon index.js"

7 para ejecutarlo siempre dentro de la carpeta iniciamos con npm start

creo la carpeta public y dentro coloco el index.HTML para poder comunicar el FRONT del Back
 */

//**************************************************************************************************************** 


// PASOS PARA CREAR UNA PLANTILLA CON HANDLEBARS
/*
1 instalar handlerbars
2 hacer el seteo de handlerbars
3 poner la sintaxis de handlerbars en una etiqueta html <span> {{{body}}} </span> "template de handlebars"
4 definir la ruta
5 creo el archivo template de datos 

para relacionar el template handlebars ( index.hbs ) y el template datos ( datos.hbs ) voy al archivo del index.js y hago la logica
1 instalo handlebars  npm install --save express-handlebars

2 creamos el app.engine : ( ' extension ' , ' el callback que nos da handlebars ' )

 */

const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//defino un layout principal
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'contenido.hbs' //donde se va a desplegar el template
}));

app.set('views', './views') // creo el set que es donde se va a ver

app.get('/', (req, res) =>{

    res.render('datos.hbs', {
        nombre: 'Ivan'
      
    })
})

app.listen(3000)





