import data from "./basicData.json"

//Variables with datatypes
let employeeName: string = "John Wick";
let employeeAge: number = 30;
let department: "QA" | "DEV" | "OPS"  = "QA";
let isPermanent: boolean = true;


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
    for(let i = 1; i <= 5; i++){
        console.log(`$ Iteration:${i}, ${employeeName} is Work as a ${department}`)
    }

    let skills: string[] = ["Selenium", "Cypress", "PlayWright", "API Testing"];
    console.log("\n skills: ");
    for(let skill of skills){
        console.log("->",skill);
    }
}