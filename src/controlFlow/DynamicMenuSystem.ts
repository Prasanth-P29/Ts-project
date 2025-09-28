const actions = ["1","1","3","2","4"]; // Simulate choices
let nums: number[] = [];
let step = 0;
let choice: string;

do{
    choice = actions[step++] ?? "";
    console.log(`Choice: ${choice}`);

    switch(choice) {
        case "1":   // Add a number
            nums.push(step*10);
            break;
        case "2":   // Remove first number if exits
            nums.shift(); 
            break;         
        case "3":   //Display the nums[] array
            console.log("Numbers:",nums);   
            break;
    }
}while (choice !== "4");

console.log("Program Ended");
console.log("Numbers:",nums);