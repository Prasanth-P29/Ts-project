type Employeee = {
    id: number;
    name: string;
    role: string;
    isActive: boolean;
};

let employeess: Employeee[] = [
    {id: 96, name: "Giri", role: "TESTER", isActive: true},
    {id: 97, name: "Prasanth", role: "DEVELOPER", isActive: false},
    {id: 98, name: "Suganthan", role: "TESTER", isActive: true}
];

//filter the active employees
let activeEmployees = employeess.filter(emp => emp.isActive);

//map to get the names of employees
let employeeNames = employeess.map(emp => emp.name);

//find the role
let manager = employeess.find(emp => emp.role === "Manager");

console.log("Active_Employees:",activeEmployees);
console.log("Employee_Names:",employeeNames);
console.log("Manager:",manager);