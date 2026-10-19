let studentName: string = "Alex";
let lessonCount: number = 8;
let isLearning: boolean = true;

// Uncomment this line to see a type error:
//studentName = 42;

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(studentName));
console.log(`Lesson ${lessonCount}; learning: ${isLearning}`);