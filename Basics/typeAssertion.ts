//Q12. Type Assertion

let data1: any = "Hello, I'm Batman"; // Initially a string
console.log("Q12:", (data1 as string).length); // using type assertion to get string length

let data2: any = 96;// Initially a number 
console.log("Q12:", (<number>data2).toString().length);//convert number to string and get Length

