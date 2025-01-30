document.addEventListener("DOMContentLoaded", () => {
    let userScore = 0;
    let computerScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msgbox = document.querySelector(".msg-box");
    const userScoreBox = document.querySelector("#user-score");
    const computerScoreBox = document.querySelector("#comp-score");


    const genComputerChoice = () => {
        let options = ["stone", "paper", "scissor"];
        let randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    const draw = () => {
        console.log("draw");
        msgbox.innerText = `draw match ${userChoice} vs ${compChoice}`;
        msgbox.style.backgroundColor = "white";
    };

    const showWinner = (userWin , userChoice , compChoice) => { 
        if (userWin) {
            userScore++;
            userScoreBox.innerText = userScore;
            console.log("user win");
            msgbox.innerText = `you win,${userChoice} beat  ${compChoice}`;
            msgbox.style.backgroundColor = "green";
            
        } else {
            computerScore++;
            computerScoreBox.innerText = computerScore;
            console.log(`computer win`);
            msgbox.innerText = `you lose ,${userChoice} beat ${compChoice}`;
            msgbox.style.backgroundColor = "red";
        }
    };

    const playGame = (userChoice) => {
        console.log("user choice", userChoice);
        const compChoice = genComputerChoice();
        console.log("computer choice", compChoice);

        if (userChoice === compChoice) {
            draw();
        } else {
            let userWin = true;
            if (userChoice === "stone") { 
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissor" ? false : true; 
            } else {
                userWin = compChoice === "stone" ? false : true;
            }
            showWinner(userWin , userChoice , compChoice);
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            console.log(userChoice, choice);
            playGame(userChoice,);
        });
    });
});
