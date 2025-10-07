import funcData from "./funcData.json"


//Function and Arrays

//Normal Function with return type
export function calculateBonus(salary: number, exp: number): number {
    return exp >=3 ? salary * 0.2 : salary * 0.1;
}

//Arrow Function with Optional Parameter
export const greetEmployee = (name: string, role: string = "Engineer"): string => {
    return `Hello,${name} Your role is ${role}`
};

//Array Operations
let tasks: string[] = [
    "Writing Test Cases",
    "Execute Regression",
    "Debug Issues",
    "Generate Report"
]

export function taskSummary(): void{
    console.log("\n-----Task Summary-----");
    console.log("Original Tasks:",tasks);

    let completedTasks = tasks.map( t => `${t}`);
    console.log("Completed Tasks:", completedTasks);

    let filtered = tasks.filter(t => t.includes("Test"));
    console.log("Filtered:",filtered);

    let totalLetters = tasks.reduce((sum, t) => sum + t.length,0);
    console.log("Total Letters in Task:", totalLetters);
}

//Complex Function with Optional parameter
export function generateTaskReport(user: string, remarks?: string): string {
    return `
    =========Task Report=========
    USER: ${user}
    TASK COUNT: ${tasks.length}
    REMARKS: ${remarks ?? "No Remarks"}
    ==============================    
    `
} 

