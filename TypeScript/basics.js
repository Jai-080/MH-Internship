"use strict";
let studentName = "Alex";
let lessonCount = 8;
let isLearning = true;
// Uncomment this line to see a type error:
//studentName = 42;
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet(studentName));
console.log(`Lesson ${lessonCount}; learning: ${isLearning}`);
