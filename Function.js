function add(a, b) {
    return a + b;
}
let sum = add(20, 30);
console.log(sum)

//function in array

var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (var i = 0; i < num.length; i++) {
    console.log([i]);
}

//function as an object
let = function(a, b) {
    return a + b;
}
console.log(add(30, 90))

let bitam = {
    name: "Salum Maembe",
    age: 23,
    greetings: function() {
        return 'hello';
    }
};
console.log(bitam.greetings())

//object prototype (like class and constructor in java)

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function() {
        return 'Hello my name is ' + this.name + ' and my age is ' + this.age
    }
}

let mango = new Person('Salum', 22);
console.log(mango.greeting())

// example of using variable from class we use word __proto__ while in java we use word super
function Student(name, age, school) {
    this.__proto__ = new Person(name, age);
    this.school = school;
}
let miki = new Student('miki', 23, 'fuoni A')
console.log(miki.greeting(), miki.school)