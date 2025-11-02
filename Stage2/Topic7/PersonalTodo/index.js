


//Find elements
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const sendBtn = document.querySelector("#sendBtn");


const localData = localStorage.getItem("personal")

let data = localData ? JSON.parse(localData) : []



console.log("data",data);

console.log(getCurrentDate);



sendBtn.addEventListener("click", handleSubmit)


function handleSubmit(){
    // e.preventDefault();

    const user = {
        fullName: fullName.value,
        email: email.value
    }

    data.push(user);

    localStorage.setItem("personal",JSON.stringify(data))


    //Chnge the inner HTML
    fullName.value = "";
    email.value = "";

    renderElements();
}

function removeItem(currentIndex){

    const newFilterData = data.filter((item,index)=>index !== currentIndex) 

     data = newFilterData

    localStorage.setItem("personal",JSON.stringify(data))
    console.log("i",currentIndex);

    renderElements()
}

function renderElements(){

    const content = data.map(function(item, index){
        return `<tr onclick="removeItem(${index})">
                     <th scope="row">${index + 1}</th>
                     <td>${item.fullName}</td>
                     <td>${item.email}</td>
                </tr>`
    }).join("");


    const personalList = document.querySelector("#personalList");

    //Chnge the inner HTML
    personalList.innerHTML = content;
    

    // document.querySelector("#personalList").innerHTML = content.join("");
} 


renderElements()