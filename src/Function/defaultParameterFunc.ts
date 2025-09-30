// 4. Default Parameter Function
function greet(name: string = "Batman"): string {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Prasanth"));