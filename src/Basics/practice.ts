let userName: string = "Prasanth";
const appName: string = "MyApp";

let age: number = 22;
let married: boolean = false;

console.log(userName);
console.log(appName);
console.log(age);
console.log(married);

console.log("-------------------");

let laptop: {brand: string, price: number, isGaming: boolean} = {
    brand: "Asus",
    price: 100000,
    isGaming: true
};
console.log(laptop);
console.log(laptop.brand);

console.log("-------------------");

type Student = {
    name: string;
    age: number;
    dept: string;
    isGraduated: boolean;
}

let st1: Student = {
    name: "clark kent",
    age: 24,
    dept: "Journalism",
    isGraduated: true
};

let st2: Student = {
    name: "Bruce Wayne",
    age: 26,
    dept: "Business",
    isGraduated: true
};

let st3: Student = {
    name: "Diane Prince",
    age: 23,
    dept: "History",
    isGraduated: false
};
console.log(st1);
console.log(st2);
console.log(st3);

console.log(st2.dept);

console.log("-------------------");

interface book {
    name: string;
    author: string;
    price: number;
    isWorth: boolean;
}

let b1: book = {
    name: "Atomic habits",
    author: "kent",
    price: 500,
    isWorth: true
};

let b2: book = {
    name: "The power of your subconscious mind",
    author: "Joseph Murpy",
    price: 600,
    isWorth: true
};

console.log(b1);
console.log(b2.isWorth);

console.log("-------------------");

// interface TestCase {
//     id: number;
//     name: string;
//     status: "passed"| "failed" | "pending!";
// }

// function changeStatus(test: TestCase): void {
//     if (test.status === "failed") {
//         // if failed → change to passed
//         test.status = "passed";
//     } else if (test.status === "pending!") {
//         // if pending → just show a message
//         console.log(test.name + " is still pending");
//     } else {
//         // if already passed
//         console.log(test.name + " is already passed");
//     }
// }


// let testcases: TestCase[] = [

//     { id: 1,name: "SignUp Test",status: "passed"},
//     { id: 2,name: "Login Test",status: "failed"},
//     { id: 3,name: "Payment Test",status: "pending!"},
//     {id: 4,name: "Logout Test",status: "passed"}

// ]

// for (let tc of testcases) {
//     changeStatus(tc);     // call the function for each test
// }

// console.log("Passed Testcases");
// for(let tc of testcases){
//     if (tc.status === "passed"){
//         console.log(tc);
//     }
// }

