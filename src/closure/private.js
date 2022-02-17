const person = () => {
    var saveName = "Name";
    return { //Retorna los metodos que tiene nuestra funcion
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Felipe');
console.log(newPerson.getName());

