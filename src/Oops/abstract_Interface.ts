//Low-Level: Abstract Class
abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;

    showDetails(): void {
        console.log(`Area:${this.area()}, Perimeter: ${this.perimeter()}`);
    }
}

class Rectangle extends Shape {
    length: number;
    breadth: number;
    constructor(length: number, breadth: number){
        super();
        this.length = length;
        this.breadth = breadth;
    }

    area(): number {
        return this.length * this.breadth;
    }

    perimeter(): number {
        return 2 * (this.length + this.breadth);
    }
}

const rect = new Rectangle(10,10);
rect.showDetails();

//Medium-Level Abstract & Interface
interface Payment {
    pay(amount: number): void;
}

class UpiPayment implements Payment{
    pay(amount: number): void{
        console.log(`Paid: ₹${amount} Using UPI.`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid: ₹${amount} Using Credit card`);
    }
}

const upi = new UpiPayment();
upi.pay(1500);

const card = new CardPayment();
card.pay(4000);

//High-Level : Combining Abstract Class & Interface
interface Logger {
    log(message: string): void;
}

abstract class Account {
    protected balance: number = 0;

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;

    getBalance(): number {
        return this.balance;
    }
}

class SavingAccount extends Account {
    deposit(amount: number): void{
        this.balance += amount;
        console.log(`Deposited: ₹${amount}, Current Balance:${this.balance}`)
    }

    withdraw(amount: number): void {
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`WithDrawn: ₹${amount}, Current Balance: ${this.balance}`);
        }else{
            console.log("Insufficient Balance!");
        }
    }

    log(message: string): void {
        console.log(`[SavingAccount Log]: ${message}`);  //ask question????
    }
}

const mysavings = new SavingAccount();
mysavings.deposit(10000);
mysavings.withdraw(3000);
mysavings.withdraw(10000);