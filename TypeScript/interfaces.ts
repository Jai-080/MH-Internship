// Task 1: Type Alias for User
type User = {
    name: string;
    age: number;
    email?: string;
};

const user: User = {
    name: "Jai",
    age: 23,
    email: "jai@example.com"
};

// Task 2: Interface for Product
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const product: Product = {
    id: 101,
    name: "Laptop",
    price: 55000,
    inStock: true
};

// Task 3: Extend an Interface
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    rollNumber: number;
    department: string;
}

const student: Student = {
    name: "Jai",
    age: 23,
    rollNumber: 23619211,
    department: "CSE AIML"
};

// Display all objects
console.log("User:", user);
console.log("Product:", product);
console.log("Student:", student);