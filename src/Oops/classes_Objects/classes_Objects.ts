//Low-Level : Basic Class and Object
class Car{

    brand: string;
    constructor(brand: string){
        this.brand = brand;
    }

    showBrand(): void{
        console.log(`Car Brand Name: ${this.brand}`);
    }

}

const car1 = new Car("Mustang");
car1.showBrand();

//Medium-Level: Attributes and Methods
class Product{

    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    display(): void{
        console.log(`Product: ${this.name}, Price: ${this.price}, Stock: ${this.stock}`)
    }

    updateStock(quantity: number): void{
        this.stock += quantity;
        console.log(`Updatated Stock for: ${this.name}, Actual Stocks:${this.stock}`);
    }
}

const product1 = new Product("Laptop",75000,10);
product1.display();
product1.updateStock(20);

//High - Level : Encapsulation and Private fields
class BankAccounts {

    private balance: number;
    constructor(initialBalance: number){
        this.balance = initialBalance;
    }

    deposit(amount: number): void{
        this.balance += amount;
        console.log(`Deposited Amount : ${amount} and Balance : ${this.balance}`);
    }

    withDraw(amount: number): void{
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrawn Amount : ${amount} and Remaining Balance : ${this.balance}`)
        }else{
            console.log("Insufficient Balance");
        }
    }

    getBalance(): number{
        return this.balance;
    }
}

const account = new BankAccounts(5000);
account.deposit(3000);
account.withDraw(2000);
console.log(`Final Balance : ${account.getBalance()}`);