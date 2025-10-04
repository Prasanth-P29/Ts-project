//Array Creation

//Basic Array
let numbers: number[] = [1,2,3,4,5];

//Array with Generic Type
let names: Array<string> = ["Giri","Suganthan","Prasanth"];

//Mixed Type Array
let mixed: (string | number)[] = ["DEV", 96, "QA", 100];

//Empty Array with Push
let tasks: string[] = [];
tasks.push("LOGIN TEST");
tasks.push("SIGNUP TEST");

//Print all the arrays
console.log(numbers);
console.log(names);
console.log(mixed);
console.log(tasks);