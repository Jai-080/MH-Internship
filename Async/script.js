//Simple promise that resolves after 2 seconds
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

//fetch   API
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


//async/await syntax
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();


