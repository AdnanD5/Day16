//Only change below this line
class Person{
    constructor(name){
        this._name = name
    }
    static display(){
        console.log("Static method is invoked from Person class")
    }
}
function show(){
    console.log(Person.display)
}
//Only change below this line
var message = new Person();
message.show;
module.exports = Person;