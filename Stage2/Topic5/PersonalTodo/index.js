


//Find elements
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const sendBtn = document.querySelector("#sendBtn");


const data = []


sendBtn.addEventListener("click", function(){

    const user = {
        fullName: fullName.value,
        email: email.value
    }

    data.push(user);


    console.log(data);


    //Chnge the inner HTML
    fullName.value = "";
    email.value = "";

    renderElements();
}
)

function renderElements(){

    const content = data.map(function(item, index){
        return `<tr>
                     <th scope="row">${index + 1}</th>
                     <td>${item.fullName}</td>
                     <td>${item.email}</td>
                </tr>`
    }).join("");

    console.log(content);


    const personalList = document.querySelector("#personalList");

    //Chnge the inner HTML
    personalList.innerHTML = content;
    

    // document.querySelector("#personalList").innerHTML = content.join("");
} 