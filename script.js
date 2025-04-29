let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let turnO = true;
let winner = document.querySelector("#win");
let newGame = document.querySelector(".newGame")
let countClick = 0;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;

        checkWin();

        console.log("clicked");
        countClick++;
        console.log(countClick)
        if (countClick == 9) {
            winner.innerText = " Tough  fight \n Game is Draw!!"

        }


    });

});

const disabbleBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const checkWin = () => {
    for (let patterns of winPatterns) {

        let val0 = boxes[patterns[0]].innerText;
        let val1 = boxes[patterns[1]].innerText;
        let val2 = boxes[patterns[2]].innerText;

        if (val0 != "" && val1 != "" && val2 != "") {
            if (val0 == val1 && val1 == val2) {
                console.log("winner is " + val0)
                winner.innerText = " Congratulation!!\n The Winner is " + val0;
                newGame.classList.remove("hide")
                countClick = 0;
                disabbleBox();
            }

        }
    }
}
resetBtn.addEventListener("click", () => {

    boxes.forEach((box) => {
        winner.innerText = "";
        newGame.classList.add("hide")
        box.innerText = "";
        box.disabled = false;
        countClick = 0;
    });
    turnO = true;
});
newGame.addEventListener("click", () => {

    boxes.forEach((box) => {
        winner.innerText = "";
        newGame.classList.add("hide")
        box.innerText = "";
        box.disabled = false;
        countClick = 0;

    });
    turnO = true;
});
