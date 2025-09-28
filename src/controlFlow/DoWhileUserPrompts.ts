// Simulation of repeated input without external modules:
const inputs = ["Apple","Banana","Exit"];
let index = 0;
let userInput: string;

do{
    userInput = inputs[index++] ?? ""; //question to ask
    console.log("User Typed:", userInput);
}while(userInput.toLowerCase() !== "exit");

console.log("Exited loop");