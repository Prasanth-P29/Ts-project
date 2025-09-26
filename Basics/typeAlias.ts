// Q16. Type Alias for Union

type ID = string | number;

let userId: ID = "PDG27"; // userId can be either a string or number
let orderId: ID = 1001;
console.log("Q16:", userId, orderId); // Output = PDG27 1001

// Q17. Type Alias for Object

type StudentType = {
    name: string;
    Id: number;
    age: number;
}
let student1: StudentType = {name: "allan", Id: 101, age: 41};
console.log("Q17:", student1); // Output = { name: 'allan', Id: 101, age: 41 }