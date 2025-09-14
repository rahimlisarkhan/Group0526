


const keyboardBtn = document.querySelector('#keyboard-btn');
const touchBtn = document.querySelector('#touch-btn');

const welcomePanel = document.querySelector('#welcome-panel');
const gamePanel = document.querySelector('#game-panel');

const choices = document.querySelector('#choices');

const player1Img = document.querySelector('#player1Img');
const player2Img = document.querySelector('#player2Img');

const player1Status = document.querySelector('#player1Status');
const player2Status = document.querySelector('#player2Status');

const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');


const choose1Btn = document.querySelector('#choose1');
const choose2Btn = document.querySelector('#choose2');
const choose3Btn = document.querySelector('#choose3');


let  point1 = 0
let  point2 = 0


const pokemons = ["p", "c", "b"];



const pokemonImages = {
    p:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
    c:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    b:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png"
}


let isTouchDevice = false;


touchBtn.addEventListener('click', () => {
    isTouchDevice = true;

    console.log("Touch button clicked", isTouchDevice);

    welcomePanel.style.display = "none";
    gamePanel.style.display = "block";
    choices.style.display = "block";
});

keyboardBtn.addEventListener('click', () => {
    isTouchDevice = false;

    console.log("Keyboard button clicked", isTouchDevice);

    welcomePanel.style.display = "none";
    gamePanel.style.display = "block";
    choices.style.display = "none";

});


// Keyboard listener

function compChoose(){
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
}




function playGame(userChoose){

    const computerChoose = compChoose();

    console.log("User choose:", userChoose);
    console.log("Computer choose:", computerChoose);

    player1Img.src = pokemonImages[userChoose];
    player2Img.src = pokemonImages[computerChoose];

    if(userChoose == "p" && computerChoose == "c" ){
        player1Status.innerHTML = "WIN";
        player2Status.innerHTML = "LOSE";

        player1Status.style.color = "green";
        player2Status.style.color = "red";

        point1++;

        player1Score.innerHTML = point1;


    }else if(userChoose == "b" && computerChoose == "p" ){
        player1Status.innerHTML = "WIN";
        player2Status.innerHTML = "LOSE";

        player1Status.style.color = "green";
        player2Status.style.color = "red";
        
        point1++;
        player1Score.innerHTML = point1;

    }else if(userChoose == "c" && computerChoose == "b" ){
        player1Status.innerHTML = "WIN";
        player2Status.innerHTML = "LOSE";
        player1Status.style.color = "green";
        player2Status.style.color = "red";

        point1++;
        player1Score.innerHTML = point1;

    }else if(userChoose == computerChoose){
        player1Status.innerHTML = "DRAW";
        player2Status.innerHTML = "DRAW";

        player1Status.style.color = "gray";
        player2Status.style.color = "gray";
    }else{
        player1Status.innerHTML = "LOSE";
        player2Status.innerHTML = "WIN";

        player1Status.style.color = "red";
        player2Status.style.color = "green";

        point2++;

        player2Score.innerHTML = point2;
    }

}

window.addEventListener('keydown', (event) => {
    
    const myChoose = event.key.toLowerCase();


    if(isTouchDevice){
        alert("You are on touch device. Please use buttons to play.");
        return;
    };

    if(pokemons.indexOf(myChoose) === -1){
        alert("Invalid key pressed. Please press 'p', 'c', or 's'.");
        return; 
    }
 

    console.log("Key pressed:", myChoose);


    playGame(myChoose);

});


choose1Btn.addEventListener('click', () => {
    if(!isTouchDevice){
        alert("You are on keyboard device. Please use keyboard to play.");
        return;
    };
    playGame("p");
});

choose2Btn.addEventListener('click', () => {
    if(!isTouchDevice){
        alert("You are on keyboard device. Please use keyboard to play.");
        return;
    };
    playGame("c");
});

choose3Btn.addEventListener('click', () => {
    if(!isTouchDevice){
        alert("You are on keyboard device. Please use keyboard to play.");
        return;
    };
    playGame("b");
});
