"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
// Example Usage
const person = new Person("minam", 15);
console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`);
person.setName("john doe");
person.setAge(95);
console.log(`Updated Name: ${person.getName()}, Updated Age: ${person.getAge()}`);
