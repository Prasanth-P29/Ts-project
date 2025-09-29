let num: number[] = [12,45,67,23,45];
let first = -Infinity, second = -Infinity

for (let n of num){
    if (n > first){
        second = first;
        first = n;
    }
    else if (n > second && n !== first){
        second = n;
    }
}
console.log(`The Second Largest value: ${second}`)