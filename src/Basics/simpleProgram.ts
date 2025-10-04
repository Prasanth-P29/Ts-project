function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("John Doe");

console.log("------------");

let username: string = "Andrew";
const appName: string = "MyApp";
function appRunby(user: string, app: string): void {
    console.log(`${app} is running by ${user}`);
}
appRunby(username, appName);

console.log("------------");

enum TrafficLight {
    Red = "STOP",
    Yellow = "READY",
    Green = "Go"
}
console.log(TrafficLight.Red);
console.log(TrafficLight.Yellow);
console.log(TrafficLight.Green);

console.log("------------");

type testcase = {
    userId: number;
    name: string;
    status: "Active" | "Inactive";
};

let testcase : testcase = {
    userId: 27,
    name: "Garfield",
    status: "Inactive"
};
console.log(testcase);

console.log("------------");

interface loginPortal {
    userId: number;
    password: string;
    authentication: "Success" | "Failed";
}
let user1: loginPortal = {
    userId: 101,
    password: "admin123",
    authentication: "Success"
};
let user2: loginPortal = {
    userId: 102,
    password: "user123",
    authentication: "Failed"
};
console.log(user1);
console.log(user2);

console.log("------------");

let StudName = "peter";
let age = 22;
let isAdmin = true;

console.log(typeof StudName);
console.log(typeof age)
console.log(typeof isAdmin);

console.log("------------");

let names: string[] = ["wayne","kent","lex"];
let marks: number[] = [80,75,90];
console.log(names);
console.log(marks);

console.log("------------");

let ticket: [string, number, boolean];
ticket = ["kevin",24,true];
console.log(ticket);

console.log("------------");

//Basic Type Annotations

let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

console.log(message);
console.log(count);
console.log(isActive);

console.log("------------");

//Interfaces 

interface User{
    name: string;
    age: number;
    email: string;
}
const user01: User = {
    name: "parker",
    age: 21,
    email: "parker01@example.com"
};
const user02: User = {
    name: "kent",
    age: 30,
    email: "kent021@example.com"
};
console.log(user01);
console.log(user02);

console.log("------------");

//Classes

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Prasanth!!!");
console.log(greeter.greet());

console.log("------------");