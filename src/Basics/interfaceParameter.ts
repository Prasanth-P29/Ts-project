//Q25. Function with Interface Parameter
interface Product {
    id: number,
    name: string,
    price: number
};

function printProduct(p: Product): void {
    console.log("Q25:", `Product Id: ${p.id}, Product Name: ${p.name}, Product Price: ${p.price}`);
}
let p1: Product = {
    id: 101,
    name: "Laptop",
    price: 75000
};
printProduct(p1); // Output = Product Id: 101, Product Name: Laptop, Product Price: 75000