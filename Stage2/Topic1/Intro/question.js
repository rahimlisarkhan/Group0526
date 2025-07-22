var isStartGame = confirm("Do you want to start the game?"); // true or false


// 1.We check if the user wants to start the game
if (isStartGame == true) {
    var playerName = prompt("Enter your name:"); //undefined

    // 2. We check if the player has entered a name
    if (playerName == "" || playerName == null) {
        alert("You didn't enter a name. Please try again.");
    } else {
        alert(`Welcome to the game, ${playerName}!`);

        var playerAge = prompt("Enter your age:");

        if (playerAge == "" || playerAge == null) {
            alert("You didn't enter a valid age. Please try again.");
        } else {
            alert(`You are ${playerAge} years old.`);
            var playerScore = 0;        
            var playerAnswer = prompt("What is 2 + 2?");

            // Question 1
            if (playerAnswer == "4") {
                alert("Correct!");
                playerScore = playerScore + 1;
            } else {
                alert("Incorrect. The correct answer is 4.");
            }

            playerAnswer = prompt("What is the capital of France?");

            // Question 2
            if (playerAnswer == "Paris") {
                alert("Correct!");
                // playerScore = playerScore + 1;
                playerScore++;
                // playerScore += 1;
            } else {
                alert("Incorrect. The correct answer is Paris.");
            }

            alert(`Your final score is ${playerScore}.`);
        }
    }
}
else {
    alert("Game not started. See you next time!");
}


