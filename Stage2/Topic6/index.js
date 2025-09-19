

// //Callback hell - Multiple nested callbacks creating pyramid of doom

// // Basic callback example
// function A(callback){
//     console.log("Hello from A");
//     setTimeout(() => {
//         console.log("A is done");
//         callback();
//     }, 1000);
// }

// function B(callback){
//     console.log("Hello from B");
//     setTimeout(() => {
//         console.log("B is done");
//         callback();
//     }, 500);
// }

// function C(callback){
//     console.log("Hello from C");
//     setTimeout(() => {
//         console.log("C is done");
//         callback();
//     }, 300);
// }

// console.log("=== Simple Callback Hell Example ===");

// // This creates callback hell - deeply nested callbacks
// A(() => {
//     B(() => {
//         C(() => {
//             console.log("All functions completed!");
//         });
//     });
// });

// console.log("\n=== More Complex Callback Hell Example ===");



function myFetch(){

    function callback(resolve, reject){
        const success = false; // Simulate success or failure


        const data = {
            results:[1,2,3,4,5],
            total:5
        }

        const error = {
            message:"An error occurred"
        }

        setTimeout(() => {
            if (success) {
                resolve(data);
            } else {
                reject(error);
            }
        }, 3000);
    }

    const promise = new Promise(callback);

    return promise;
}

const myPromise = myFetch();


console.log("myPromise",myPromise);

myPromise.then((message) => {
    console.log("Then:", message);
    B()
}).catch((error) => {
    console.log("Catch:", error);
}).finally(() => {
    console.log("Finally loading sondur");
});

function B(){
    console.log("Hello from B");
}