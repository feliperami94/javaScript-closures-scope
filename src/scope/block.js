const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; //con var queda asignado dentro del scope de function
        let fruit2 = 'banana'; // con let y const solo queda asignado dentro del scope del bloque (if)
        const fruit3 = 'kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();

///////////////////////////////////////
var x = 1;
{
    var x = 2; //El valor se transmite para la vble global. Para solo usar la vble dentro del bloque, es mejor usar let.
    console.log(x);
}

console.log(x);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();