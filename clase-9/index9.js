
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

//creo el servidor
const express = require('express')



//inicializo express
const app = express()

//desde donde va a servir los archivos el servidor
app.use(express.static('public'))





//puerto donde corre el servidor
app.listen(8000)