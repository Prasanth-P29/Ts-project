//Q13. Union Type variable

let value: string | number; // value can be either a string or number
value = "Hello";
console.log("Q13:", value); // Output = Hello

value = 100;
console.log("Q13:", value); // Output = 100

value = true // type 'boolean' is not assignable to type 'string | number'
console.log("Q13:", value);