import basicData from "./basicData.json";


const [employee] : any = basicData;


//Variables with datatypes
let employeeName: string = employee.employeeName;
let employeeAge: number = Number(employee.employeeAge);
let department: "QA" | "DEV" | "OPS" = employee.department;
let isPermanent: boolean = employee.isPermanent === "true";


//Operators + Conditionals
export function checkEligibility(): void {
    console.log("\n----Employee Eligibility Check----");
    if(employeeAge >= 25 && isPermanent){
        console.log(`${employeeName} is Eligible for Promotion`)
    }
    else{
        console.log(`${employeeName} is not Eligible yet`);
    }
}

//Loops Example
export function showLoopDemo(): void{
    console.log("-----Loop Demonstration-----");
    for (let i = 1; i <= 5; i++) {
        console.log(`Iteration:${i}, ${employeeName} works as a ${department}`);
    }

    let skills: string[] = ["Selenium", "Cypress", "PlayWright", "API Testing"];
    console.log("\n skills: ");
    for(let skill of skills){
        console.log("->",skill);
    }
}