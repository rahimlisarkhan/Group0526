

const stopButton = document.getElementById("stopButton");

const timerElement = document.getElementById("timer");

function sayHello(){

    console.log("Hello World");
    
    const date = new Date();


    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const result = `${hours}:${minutes}:${seconds}`;
    console.log(result);

    timerElement.innerHTML = result;
}

function sayHello2(){

    console.log("Hello World 2!!!!!");
    
}


// let timeoutId = setTimeout(sayHello, 2000); // 0 saniye sonra sayHello fonksiyonunu çağıralım
// let timeoutId2 = setTimeout(sayHello2, 3000); // 0 saniye sonra sayHello fonksiyonunu çağıralım
let timeoutId = setInterval(sayHello, 1000); // 0 saniye sonra sayHello fonksiyonunu çağıralım
// let timeoutId2 = setTimeout(sayHello2, 3000); // 0 saniye sonra sayHello fonksiyonunu çağıralım

console.log("Timeout ID:", timeoutId);
// console.log("Timeout ID 2:", timeoutId2);


stopButton.addEventListener("click", () => {
    // clearTimeout(timeoutId);
    clearInterval(timeoutId);
    // clearTimeout(timeoutId2);
    console.log("Timeout cleared!");
});


// function sum(){
//     let a = 5;
//     let b = 10;
//     console.log(a + b);
//     return a + b;

// }


// sum()