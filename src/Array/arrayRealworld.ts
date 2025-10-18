// Real-World Example: QA Test Cases

type TestCases = {
    id: number;
    title: string;
    status: "Pass" | "Fail" | "Skip";
};

let testCases: TestCases[] = [
    { id: 1, title: "Login with Valid Credentials", status: "Pass" },
    { id: 2, title: "Login with Invalid Password", status: "Fail"},
    { id: 3, title: "Checkout wit empty Cart", status: "Skip"},
    { id: 4, title: "Search Product", status: "Pass"}
];

export function realWorldDemo(): void {
    let passed = testCases.filter(tc => tc.status === "Pass").length;
    let failed = testCases.filter(tc => tc.status === "Fail").length;
    let skipped = testCases.filter(tc => tc.status === "Skip").length;

    console.log("\n --- Test Summary ---");
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Skipped: ${skipped}`);

    // Spread + Rest Example
    let frontEnd: string[] = ["HTML","CSS", "JavaScript"];
    let backEnd: string[] = ["Node.js", "Express", "MongoDB"];
    let fullStack: string[] = [...frontEnd,...backEnd];
    console.log("FullStack Skills:",fullStack);

    function logSkills(...skills: string[]): void {
        console.log("Skills:",fullStack.join(", "));
    }
    logSkills("Selenium","PlayWright","Cypress","API")
}

realWorldDemo();
