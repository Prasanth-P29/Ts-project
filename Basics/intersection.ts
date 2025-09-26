//Q15. Intersection Type

type Person = {name: string};
type Employee = {empId: number}

let worker: Person & Employee = {name: "Bruce", empId: 2731}; // Intersection of Person and Employee
console.log("Q15:", worker); // Output = { name: 'Bruce', empId: 2731 }