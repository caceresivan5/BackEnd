
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

/*
PARA CREAR UNA PLANTILLA DESDE EL HTML
//creo el servidor
const express = require('express')


//inicializo express
const app = express()

//desde donde va a servir los archivos el servidor
app.use(express.static('public'))


//puerto donde corre el servidor
app.listen(8080)
*/
//******************************************************************************************** */
/*
//PARA CREAR UN MOTOR DE PLANTILLA DESDE EL SERVIDOR

const express = require('express');
const fs = require('fs');

const app = express();//defino el app

//defino el motor de plantilla NO ES HANDLEBARS
app.engine('ntl', function(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if(err){
            return callback(new Error(err));
        }
        const rendered = content.toString()
                                .replace('#title#', '' + options.title + '')
                                .replace('#message#', '' + options.message + '');
        return callback(null, rendered);
    });
});


app.set('views', './views'); //especifica el directorio de visitas
app.set('view engine', 'ntl'); //registra el motor de plantillas

app.get('/', function (req, res){
    res.render('index', {title:'greeting', message: 'Hello there!'}); //reenderiza el index del lado del cliente 
    //el archivo que esta dentro de view se va a llamar index y la data que le voy a pasar es el objeto que defini al lado
});

app.listen(8000);
*/


//plantilla desde el servidor SIN handlebars

const express = require('express');
const { promise: fs} = require('fs');

const app = express();//defino el app

//defino el motor de plantilla NO ES HANDLEBARS
app.engine('cte', async (filePath, options, callback) =>{


try{
    const content = await fs.readFile(filaPath)
   const rendered = content.toString()
                                .replace('^^titulo$$', '' + options.titulo + '')
                                .replace('^^mensaje$$', '' + options.mensaje + '')
                                .replace('^^autor$$', '' + options.autor + '')
                                .replace('^^version$$', '' + options.version + '')
    return callback(null, rendered)
}catch (err){
    return callback(new Error(err))

}
})


app.set('views', './views'); //especifica el directorio de visitas
app.set('view engine', 'cte'); //registra el motor de plantillas

app.get('/cte1', (req, res) =>{ //defino la ruta

    const datos = {
        titulo: 'cte1',
        mensaje: 'mensaje de cte1',
        autor: 'autor de cte1',
        version:'v1'
    }

    res.render('plantilla', datos) //hago un render - plantilla es el nombre del archivo y datos son los datos
})

app.listen(8000);

// PASOS PARA CREAR UNA PLANTILLA CON HANDLEBARS
/*
1 instalar handlerbars
2 hacer el seteo de handlerbars
3 poner la sintaxis de handlerbars en una etiqueta html <span> {{{body}}} </span>
4 definir la ruta
 */
 