let sum = 0;
for(let num = 1; num <= 20; num++){

    if(num % 2 === 0){
        sum += num;
    }
}
console.log(`Sum of Even Numbers: ${sum}`)