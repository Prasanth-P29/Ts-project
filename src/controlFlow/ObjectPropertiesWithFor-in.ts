const person = { name: "Bob", age: 25, city: "Chennai", active: true };

for (let key in person) {
    if (typeof person[key as keyof typeof person] === "string") {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }
}