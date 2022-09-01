
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = opponent + ".png";

    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
        alert('Draw');
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
                alert('You won');
            }
            else if (opponent == "paper") {
                opponentScore += 1;
                alert('You lose');
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
                alert('You won');
            }
            else if (opponent == "rock") {
                opponentScore += 1;
                alert('You lose');
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
                alert('You won');
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
                alert('You lose');
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}