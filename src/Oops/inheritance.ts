//Low-Level Inheritance
class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a sound..`);
    }
}

class Dog extends Animal { 
    barks(): void {
        console.log(`${this.name} Barks!`);
    }
}

const dog1 = new Dog("Tommy");
dog1.speak();
dog1.barks();

//Medium-Level Inheritance Using super()

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello,I am ${this.name}.`);
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string,grade: string){
        super(name);
        this.grade = grade;
    }

    showInfo() {
        console.log(`${this.name} is in Grade ${this.grade}`);
    }
}

const stud1 = new Student("Prasanth","12th");
stud1.greet();
stud1.showInfo();

//High-Level Inheritance
class Vehicle {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }

    start(): void {
        console.log(`${this.brand} vehicle Started...!`);
    }
}

class Car2 extends Vehicle {
    fuelType: string;
    constructor(brand: string,fuelType: string){
        super(brand);
        this.fuelType = fuelType;
    }

    start(): void {
        console.log(`${this.brand} Car started using ${this.fuelType}`);
    }
}

class ElectricCar extends Car2 {
    batteryCapacity: number;
    constructor(brand: string, fuelType: string, batteryCapacity: number){
        super(brand, fuelType);
        this.batteryCapacity = batteryCapacity;
    }

    showBattery(): void {
        console.log(`${this.brand} has a battery capacity of ${this.batteryCapacity} kWh`)
    }
}

const car = new ElectricCar("Mahindra","Electric",200)
car.start();
car.showBattery()