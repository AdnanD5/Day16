//Only change below this line
class Pets{
    constructor(name, legs){
        this.name = name;
        this.legs = legs;
    }
    function walk() {
      var numOfLegs
      return numOfLegs;  
    }
}
class Dog extends Pets{
    constructor(name,legs){
        super(name)
        this.legs = legs;
    }
    function bark(){
        var dogSay = name+"says WUF-WUF";
        return dogSay;
    }
}
//Only change below this line
let dog = new Dog(name, legs);//Change this line
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}