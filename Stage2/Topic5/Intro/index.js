
// // // const sayHelloBtn = document.getElementById("sayHelloBtn");
// // const sayHelloBtn = document.querySelector("#sayHelloBtn");

// // const listEl = document.getElementById("listEl");



// // function sayHello(e) {
// //     // e.target.style.backgroundColor = "red";
// //     // e.target.style.color = "white";

// //     // e.target.style.fontSize = "30px";

// //     // e.target.innerHTML = "You clicked me";

// //     console.log("Hello! You clicked on Subtopic 1", e);
// //     listEl.style.display = "block";
// // }

// // // sayHelloBtn.onclick = sayHello;

// // // Mouse Events
// // // sayHelloBtn.addEventListener("click", sayHello);
// // // sayHelloBtn.addEventListener("dblclick", sayHello);

// // sayHelloBtn.addEventListener("mouseenter", sayHello);


// // sayHelloBtn.addEventListener("mouseleave", function(e) {
 
// //     listEl.style.display = "none";
// // });



// // Input Events
// const fullname = document.getElementById("fullname");
// const errorText = document.getElementById("errorText");


// fullname.addEventListener("input", function(e) {

//     const inputType = e.inputType;
//     console.log("Input event detected:", inputType);

//     // console.log("Input event detected:", e.target.value);
// });


// fullname.addEventListener("focus", function(e) {
//     errorText.style.display = "none";
// });

// fullname.addEventListener("blur", function(e) {

//     const value = e.target.value;

//     console.log("value",value);

//     const resultText = value.length > 0 ? "Success" : "Please enter your full name";

//     errorText.style.display = "block";
//     errorText.innerHTML = resultText;
//     errorText.style.color = value.length > 0 ? "green" : "red";

// });



const messageArea = document.querySelector("#messageArea");


messageArea.addEventListener("keydown", function(e) {
    console.log("Key down event detected:", e);

    if(e.key === "Enter") {
        alert(e.target.value);
    }
})
