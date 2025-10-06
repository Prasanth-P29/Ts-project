let frontEnd : string[] = ["HTML","CSS","JAVASCRIPT"];
let backEnd : string[] = ["NODE","EXPRESS","MONGODB"];

//Spread Operator
let fullStack : string[] = [...frontEnd,...backEnd];
console.log("Full Stack:", fullStack);

//rest parameters
function logSkills(...skills: string[]): void {
    console.log("Skills:",skills.join(", "));
}
logSkills("PlayWright","Selenium","Cypress","API");