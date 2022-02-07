/* 
1 creo una carpeta
 
2 en la terminal escribo npm init -y  para crear un package Json
(me ubico en la carpeta con cd nombre de la carpeta / )

3 creo el index.js

4 si voy a utilizar express debo instalarlo
( npm install --save express )

5 instalo NODEMON (live server en frontend) 
( npm install --save nodemon)


6 verifico todo en mi package.json si esta todo ok

7 en el package.json voy a script - creo start -- "start": "nodemon index.js"

8 para ejecutarlo siempre dentro de la carpeta iniciamos con nom start
 */


const express = require("express");
const multer = require('multer');
const { Router } = express

const port = 8080 


const app = express();

const mascotas = Router();

//middleware
//avisamos a EXPRESS que vamos a recibir data en formato Json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let listaMascotaas = ['Perro', 'Gato', 'Loro'];

//aplico multer ANTES DEVO INSTALARLO CON npm install --save multer
const storage = multer.diskStorage({
    destination: function (req, file, cb){ //donde vamos a guardar las cosas DEBO CREAR LA CARPETA UPLOADS DONDE SE GUARDARAN LOS DATOS ENVIADOS
        cb(null, 'uploads')

    },
    filename: function(req, file, cb){ 
        cb(null, file.fieldname)
    }
})

//defino la constantedel middleware
const fileMiddleWARE = multer({storage:storage})

//creo nueva ruta
app.post('/upload', fileMiddleWARE.single('imagen'), (req, res) =>{ //imagen debe ser el mismo nombre que tengo en el form 
    const file = req.file;
    res.send(file)
})

//CREO UNA FUNCION MIDDLEWARE -- LO QUE VA A HACER ESTA FUNCION ES REECRIBIR LO QUE ENVIE EL CLIENTE MEDIANTE POST
function middleWarePrefix (req, res, next){
    const name = req.body.name;



    req.body.name = `MI MASCOTA ${name}` ; //ACA SE REESCRIBE EL NOMBRE
    
    next();
}
//aca van los endPoints

mascotas.get("/", (req, res) =>{
    res.send(listaMascotaas);

})

mascotas.post("/", middleWarePrefix, (req, res) =>{ //APLICO LA FUNCION MIDDLEWARE AL POST DE ESTE MIDDLEWARE
    const name = req.body.name;
    listaMascotaas.push(name);

    res.send(listaMascotaas);
})


app.use("/mascotas", mascotas)
app.use('/static', express.static('public'))

//escucho lo que hay en el puerto
app.listen(port, ()=>{
    console.log(`escuchando la app en http://localhost:${port}`)
})