console.log("Hello World");
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
//normal function
function add(a, b) {
    return a + b;
}
let addresult = add(10, 20);
console.log(addresult);

const pi = 3.14;
let r = 2;
function areaOfCircle(a,b){
    return a*(b*b);
}
let area=areaOfCircle(pi,r);
console.log(area);

let x=0;
function clickfunc(){
    document.getElementById("test").innerText="Clicked " + (x+=1) +" times";
}
let y=0;
function mouseenterfunction() {
    document.getElementById("enter").innerHTML = y+=1;
    document.getElementById("changedivcolor").style.backgroundColor="red";  
}
function mouseleavefunction() {
    document.getElementById("changedivcolor").style.backgroundColor="aqua";  
}
function doNothing(){
    document.getElementById("nothingbutton").innerHTML="Nothing happened";
}
const button = document.getElementById("myButton");

    button.addEventListener("click", () => {
        alert("Button clicked!");
    });

//arrow function
const multiply = (a, b) => {
    return a * b;
};

let mulResult = multiply(10, 5);
console.log(mulResult);

//template literals
let lname ="Jai";
let lage = 20;
let text = `${lname} is ${lage} years old`
console.log(text);

//multiline string using template literals
const multilinestring = `This is an example of 
multiline strings in javascript
!!`;
console.log(multilinestring);

//object detruction
let obj={
    name:"Jai",
    age:20,
    city:"chennai"
};
let {name,age,city}=obj;
console.log(name);
console.log(age);
console.log(city);

//array deconstruction
let arr=["red","green","blue"];
let [first,second,third]=arr;
console.log(first);
console.log(second);
console.log(third);

