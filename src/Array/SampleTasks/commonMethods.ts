//Common Methods
let fruits: string[] = ["Apple","Banana","Kiwi"];

fruits.push("Grapes"); //add the value at end
fruits.unshift("Orange"); //add the value at start
console.log("After Add:",fruits);

fruits.pop(); //remove the value at last
fruits.shift(); //remove the value at start
console.log("After Remove:",fruits);

console.log("Index of Kiwi:",fruits.indexOf("Kiwi"));
console.log("Fruits includes Banana?",fruits.includes("Banana"));
console.log("Length of Array:", fruits.length);