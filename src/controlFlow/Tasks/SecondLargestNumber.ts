const numArr: number[] = [12,45,67,23,45];
let first = -Infinity, second = -Infinity;

for(let n of numArr){
    if(n > first){
        second = first;
        first = n;
    }
    else if(n > second && n < first)
        {
            second = n;
        }
    }
console.log(`Second Largest Number is: ${second}`);