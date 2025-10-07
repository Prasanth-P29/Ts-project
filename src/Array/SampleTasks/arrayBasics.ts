function basicDemo(): void {
    let numbers: number[] = [1,2,3,4,5,6];
    let names: Array<string> = ["John", "Randy", "Kane", "Michael"];
    let mixed: (string | number | boolean)[] = ["Tester", 101, true, "Developer"];

    console.log("Numbers:",numbers);
    console.log("Names:", names);
    console.log("Mixed:", mixed);

    numbers.push(7);
    names.unshift("DevOps");

    console.log("After Update numbers:",numbers);
    console.log("")
}