//Q9.Enum Example

enum direction {
    Up,
    Down,
    Left,
    Right
}
let move1: direction = direction.Left;
console.log("Q9:", move1); // Output: 2

let move2: direction = direction.Up;
console.log("Q9:", move2); // Output: 0

//Q10. Enum with custom values
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let response1: Status = Status.ServerError;
console.log("Q10:",response1); // Output 500

let response2: Status = Status.Success;
console.log("Q10:",response2); // Output 200