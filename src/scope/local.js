const helloWorld = () => {
    const hello = 'HelloWorld';
    console.log(hello) //Solo accesible dentro de la arrow function
}

helloWorld();
//////////////////////////////////////////

var scope = 'i am global';

const functionScope = () => {
    var scope = 'i am just a local'; //Al estar declarada la vble scope dentro de la funcion, accede a la vble local y no a la variable 'scope' global que se declaro mas arriba. A esto se le llama Ambito lexico.
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope()
