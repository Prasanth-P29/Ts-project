let count = 0;
for (let i = 0; i < 2; i++){
    for(let j = 0;j < 2; j++){
        count++
    }
}
console.log(count);

let sum = 0;
for (let i = 1; i <= 5; i++){
    if(i % 2 === 0) continue;
    sum += i;
}
console.log(sum);