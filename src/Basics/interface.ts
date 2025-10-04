//Q19. Interface
interface Car{
    brand: string,
    year: number,
    isElectric: boolean
};
let mycar: Car = {
    brand: "Tesla",
    year: 2022,
    isElectric: true
};
console.log("Q19: ", mycar); // Output = { brand: 'Tesla', year: 2022, isElectric: true }

//Q20. Interface with Method
interface Animal{
    name: string,
    species: string,
    sound(): void
};

let pet1: Animal = {
    name: "Bruno",
    species: "Dog",
    sound: () => console.log("Q20: Bruno says Woof Woof")
};
pet1.sound(); // Output = Bruno says Woof Woof 

//Q21.Optional propertyInterface
interface User {
    userId: number,
    name: string,
    email?: string
}; // email is optional

let user1: User = {
    userId: 101,
    name: "nolan"
};
console.log("Q21:", user1); // Output = { userId: 101, name: 'nolan' }

//Q22. Readonly property Interface
interface Book {
    readonly isbn: number,
    title: string,
    author: string
};
let book1: Book = { isbn: 6353, title: "The Alchemist", author: "Paulo Coelho"};
book1 = 6765 // cannot assign to 'isbn' because it is a read-only property

console.log("Q22:", book1); // Output = { isbn: '63538', title: 'The Alchemist', author: 'Paulo Coelho' }


