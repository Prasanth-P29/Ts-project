function smALL(...numbers: number[] ): number{
    return numbers.reduce((acc, curr) => acc + curr, 0); 
}

console.log(smALL(1,2,3));
console.log(smALL(10,20,30,40));