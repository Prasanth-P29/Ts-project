let scores: number[] = [80,92,65,100,88];

// Map -> transform
let updatedScores = scores.map(score => score + 5);

// Filter -> Conditional
let higherScores = scores.filter(score => score > 85);

// Reduce -> accumulate
let total = scores.reduce((sum,score) => sum + score, 0);
let average = total / scores.length;

// Find -> to Match
let topper = scores.find(score => score === 100);

console.log("Updated Scores :",updatedScores);
console.log("High Scores :",higherScores);
console.log("Total :",total, ", Average :",average.toFixed(2));
console.log("Topper :",topper);