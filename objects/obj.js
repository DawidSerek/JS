//objects are defined as key-value pairs in JS syntax:
//uses both let and const, but it is good practice to define them as const

const car = { 
    speed:1,
    carName: "coolAss",
    acceleration: 5
}

//there are two ways to access properties of an object:

var takeSpeed = car.speed
var takeName = car["carName"]

//you can also define functions within objects:

const person = {
    firstName:"Dawid",
    secondName: "Serek",
    test: "default",

    fullName : function(extra) {
        this.test = extra
        return this.firstName + " " + this.secondName + " " + this.test;
    }
}

//you can acess created function with following syntax:
document.getElementById("demo").innerHTML = person.fullName("jest koksem")



//note: there is "this" keyword, that is useful to refer object to itself (depending on context)