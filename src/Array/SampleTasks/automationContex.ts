type TestCase = {
    id: number;
    title: string;
    status: "Pass" | "Fail" | "Skip"
};

let testCases: TestCase[] = [
    {id: 1, title: "Login with Valid Credentials", status: "Pass"},
    {id: 2, title: "Login with Invalid Password", status: "Fail"},
    {id: 3, title: "Checkout with EmptyCart", status: "Skip"},
    {id: 4, title: "Search Product", status: "Pass" }
];

//Count the test results
let passed = testCases.filter(tc => tc.status === "Pass").length;
let failed = testCases.filter(tc => tc.status === "Fail").length;
let skipped = testCases.filter(tc => tc.status === "Skip").length;

console.log("Test Summary:")
console.log("Passed:", passed);
console.log("Failed:",failed);
console.log("Skipped:",skipped);