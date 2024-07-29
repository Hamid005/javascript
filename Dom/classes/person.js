class Person{
    constructor(name){
        this._name = name;
    }
    get name( ){
        return this._name;
    }
}

let Person = new Person ("Hamid khan");
 console.log(person.name);
 // attempt to change the name,but connot
  person.name = "Hamid khan";
  console.log(person.name); // hamid khan