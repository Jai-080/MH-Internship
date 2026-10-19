// Type alias: email is optional because of the ?
type User={
    name: string;
    age: number;
    email?:string;
};

const user:User={
    name:"Jai",
    age:20,
};

// Interface describing a product
interface Product {
  name: string;
  price: number;
}

// This object implements Product by providing both required properties
const product: Product = {
  name: "Notebook",
  price: 4.99,
};

// Extended interface inherits Product's properties and adds category
interface FeaturedProduct extends Product {
  category: string;
}

const featuredProduct: FeaturedProduct = {
  name: "Planner",
  price: 12.5,
  category: "Stationery",
};

console.log(user);
console.log(product);
console.log(featuredProduct);
export{};
