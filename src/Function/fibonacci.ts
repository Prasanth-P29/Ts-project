function fib(n: number): number {
    if( n === 0) return 0;
    if( n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

// fib(5) = fib(4) + fib(3)

// fib(4) = fib(3) + fib(2)

// fib(3) = fib(2) + fib(1)

// fib(2) = fib(1) + fib(0)

// fib(1) = 1, fib(0) = 0