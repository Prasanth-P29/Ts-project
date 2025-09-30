// 5. Optional Parameter Function

function fullName(firstName: string, middleName?: string, lastName?: string): string{
    return lastName? `${firstName} ${middleName} ${lastName}!` : firstName;
}

console.log(fullName("John"));
console.log(fullName("John"),("Wick"));
console.log(fullName("Mr."),("John"),("Wick"));