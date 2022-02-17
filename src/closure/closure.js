//Ejercicio, hacer una alcancia que vaya mostrando lo que tiene dentro cada vez que le ingresamos dinero.

const moneyBox = (coins) => {  //Creada la funcion asi no guarda los valores que le pasamos anteriormente a nuestra alcancia
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $ ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

/////////////////////////////////// Alcancia con Closure

const moneyBox = (coins) => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $ ${saveCoins}`);
    }
    return countCoins
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

