
const http = require('http'); 

const server = http.createServer((req, res) =>{
    //aca va el codigo

    //ejercicio : establecer horarios y asignar el mensaje de Buenos dias, Buenas Tardes o  Buenas noches de acuerdo a un rango de hora

    let dateHour = new Date().getHours();

    if( dateHour >= 6 && dateHour <= 12 ){
        res.end("BUENOS DIAS");
    }else if( dateHour >= 13 && dateHour <= 19 ){
        res.end("BUENAS TARDES");
    }else{
        res.end("BUENAS NOCHES");
    }
    
})

const connectedServer = server.listen(8080, () =>{
    console.log(`servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})