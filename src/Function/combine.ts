function combine(a: number, b: number): number;

function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
    if(typeof a === "string" && typeof b === "string"){
        return a.toUpperCase() + " " + b.toUpperCase(); //lowercase to uppercase format
    }
    if(typeof a === "number" && typeof b === "number"){
        return a * b;
    }

    return "Invalid Combination";
}

console.log(combine(3,4));

console.log(combine("I'm", "Vengeance"));