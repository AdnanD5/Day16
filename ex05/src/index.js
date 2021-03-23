//Only change below this line
class Microsoft{
    constructor(name){
        this.name = name;
    }
    get(name){

    }
    set(name){

    }
    occupation(name){
    return {name}+"is a philanthropist"
    }
}
class Facebook extends Microsoft{
    constructor(name, age){
        super(name)
        this.age = age;
    }
    studentAge(){
        return {name}+"is"+{age}
    }
}

//Only change above this line
module.exports = {
    Microsoft,
    Facebook    
}