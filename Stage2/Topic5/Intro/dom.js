// Find element in DOM

const titleEl = document.querySelector("#title");


const a =  titleEl.nextElementSibling

console.log(a);

// Change element content
// titleEl.innerHTML = "<span>Hello from JS</span>";
titleEl.innerHTML = "JS is awesome";

titleEl.style.color = "green";
titleEl.style.fontSize = "40px";
titleEl.style.backgroundColor = "yellow";

// titleEl.className = "main-title updated";
// titleEl.classList.add("updated");
// titleEl.classList.remove("main-title");
// titleEl.classList.toggle("main-title");

// titleEl.setAttribute("class", "main-title updated");

// const attr = titleEl.getAttribute("class");
// console.log(attr);



// Create and append new element

const newEl = document.createElement("p");




newEl.innerHTML = "This is a new paragraph created by JS";

// console.log(newEl);

newEl.style.fontSize = "20px";
newEl.style.color = "purple";

// document.body.prepend(newEl);
document.body.appendChild(newEl);


//remove

// titleEl.remove();
// document.body.removeChild(titleEl);