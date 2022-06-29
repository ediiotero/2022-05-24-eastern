//https://www.youtube.com/watch?v=khuDeNwXkfI
//https://www.youtube.com/watch?v=ZYa_NiOUTQo
//https://www.youtube.com/watch?v=jM0WcyQWMSM

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static sleep(num) {
        console.log(`Slept ${num} hours`)
    }

    welcome() {
        console.log(`Hello my name is ${this.name} I'm ${this.age}`)
    }
}

class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }
    hello() {
        super.welcome();
        console.log(`My gpa is ${this.gpa}`)
    }
}

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age);
        this.classSize = classSize;
    }

    hello() {
        super.welcome();
        console.log(`My class size is ${this.classSize}`)
    }
}

const person1 = new Person("Bruce", 55)
const person2 = new Person("Stephanie", 25)
const student1 = new Student("Toby", 21, 4)
const teacher1 = new Teacher("Ben", 65, 33)
// console.log(person1)
// console.log(person2)
// person1.hello()
// person2.hello()
console.log(teacher1)
teacher1.hello()
Person.sleep(4)