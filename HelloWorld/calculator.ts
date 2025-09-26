class calculator {
    //add method
    add(a: number, b: number): number {
        return a + b;
    }
    //subtract method
    sub(a: number, b: number): number {
        return a - b;
    }
    //multiplication method
    multi(a: number, b: number): number {
        return a * b;
    }
    //division method
    div(a: number, b: number ): number {
        if (b === 0) {
            console.log("Error: Cannot divide by Zero");
            return 0;
        }
        return a / b;
    }

}

//create instance 
const calc = new calculator();

//test all methods
console.log("Add: ", + calc.add(27,2));
console.log("Sub: ", + calc.sub(30,2))
console.log("Multi: ", + calc.multi(3,7));
console.log("Div: ", + calc.div(10,2));
console.log("Div by zero: ", + calc.div(10,0));