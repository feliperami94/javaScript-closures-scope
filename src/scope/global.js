var hello = 'Hello';
var hello = 'Hello +'; //Aunque con var puedo redeclarar una vble, es mala practica
let world = 'Hello World'; // con let y const no puedo redeclarar una vble.
const helloWorld = 'Hello World!';


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Mala practica, declarar una vble dentro de un bloque (función o ciclo por ej) sin usar las palabras reservadas var, const, let.

const helloWorld2 = () => {
    globalVar = 'Jeloworl' //sin inicializar con var, const o let, la vble queda global. MALA PRACTICA
}