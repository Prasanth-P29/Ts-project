function isPrime(n: number): boolean {
    
    if(n < 2){
        return false; // value before 2 is not primes
    }

    for( let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true

}

function printPrimes(value: number): any{
    for( let n = 2; n <= value; n++){
        if (isPrime(n)){
            console.log(n);
        }
    }
}
printPrimes(100)
console.log(isPrime(10));
console.log(isPrime(11));