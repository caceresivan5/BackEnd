

/*

// creo un array para realizar el ejercicio
let productos=[
    {id:1, nombre:'yerba', precio:123},
    {id:2, nombre:'azucar', precio:223},
    {id:3, nombre:'te', precio:52},
    {id:4, nombre:'leche', precio:63},
    {id:5, nombre:'cafe', precio:455}
]

// obtener los nombre del array separados por una coma
const nombres = productos.map(e => e.nombre).join(" , ");
console.log(`LOS NOMBRE DEL ARRAY SON =  ${nombres} ` );

//sumar todos los precios -- precio total
const total = productos.reduce((a, b) => a + b.precio, 0);
console.log( ` TOTAL  = ${total}`);

//promedio de precios
const promedio = total / productos.length
console.log( `PROMEDIO =  ${promedio}` );

//ordenar el array de mayor a menor por el precio - forma standar
const  orden = productos.sort((a, b) => a.precio > b.precio ? -1:1);
console.log(orden)

//obtener el valor maximo
const NumMaximo = Math.max.apply(null, productos.map(e => e.precio)); // aplly termite que a una funcion se le pase como parametos un objeto
const NumMinimo = Math.min.apply(null, productos.map(e => e.precio)); // aplly termite que a una funcion se le pase como parametos un objeto
console.log(`EL PRECIO MAXIMO ES = ${NumMaximo}`);
console.log(`EL PRECIO MINIMO ES = ${NumMinimo}`);

//NODEMON
//npm install -g nodemon para instalar NODEMON que es como si fuera el LIVE SERVER DE FRONTEND

*/

//****************************************************************************************************************************************************** */

//DEPENDENCIA moment

//para instalar moment es necesario tener el package.json instalado y luego instalar npm i moment

//calcular anios y dias desde una fecha de nacimiento hasta hoy
const moment = require('moment');

let a = moment();
let b = moment('1989-10-08').toDate();

console.log(a.diff(b, "years"))
console.log(a.diff(b, "days"))