//Q23. Interface Inheritance
interface person{
    name: string,
    department: string
};
interface employee extends person{
    empId: number,
    age: number
};
let emp1: employee = {name: "Bruce", department: "IT", empId: 2731, age: 30};
console.log("Q23:",emp1);// Output = { name: 'Bruce', department: 'IT', empId: 2731, age: 30 }