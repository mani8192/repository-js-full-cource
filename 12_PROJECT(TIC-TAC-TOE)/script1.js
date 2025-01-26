let boxes = document.querySelectorAll(".cell");
let restart = document.querySelector("#re-game"); // Button with ID "re-game"
let new_games = document.querySelector("#new_game"); // Button with ID "new_game"
let message = document.querySelector("#win_msg");
let check_win = document.querySelector(".check-win");

let turnO = true; // Player O starts

const win_patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
];


const newGame = () => {
    turnO = true;
    enableBoxes();
    check_win.classList.add("hide");
    message.innerText = "";
};


boxes.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.disabled) return;

        cell.innerText = turnO ? "O" : "X"; // O turn -
        turnO = !turnO; // Switch turns
        cell.disabled = true; 

        checkWinner(); 
    });
});


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};


const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false; 
        box.innerText = ""; 
    });
};


const showWinner = (winner) => {
    message.innerText = `Winner 👑: ${winner}`;
    check_win.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of win_patterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            disableBoxes();
            return;
        }
    }
};

// Add event listeners to the buttons
restart.addEventListener("click", newGame);
new_games.addEventListener("click", newGame);
