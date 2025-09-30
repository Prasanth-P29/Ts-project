function factorial(n: number): number{
    if(n < 0) throw new Error("n must be >= 0");
    if(n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(5));