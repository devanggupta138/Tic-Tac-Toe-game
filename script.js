let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let winner = document.querySelector(".winner");
let newGameBtn = document.querySelector(".newGame");
let won = document.querySelector(".won");


let turnO = true;
const winPat = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btns.forEach((btn) => {
    btn.addEventListener("click",() =>{
        if(turnO){
            turnO = false;
            btn.innerText = "O"
        }
        else{
            turnO = true;
            btn.innerText = "X"
        }
        btn.disabled = true;

        checkWinner();
    })
});

const showWinner = (player) =>{
    won.innerText = `${player} won the Game`;
    winner.classList.remove("hide");
}

const checkWinner = () =>{
    for(let pat of winPat){
        let btn1val = btns[pat[0]].innerText;
        let btn2val = btns[pat[1]].innerText;
        let btn3val = btns[pat[2]].innerText;
        if(btn1val!="" && btn2val!="" && btn3val!="" ){
            if(btn1val == btn2val && btn1val == btn3val ){
                endGame();
                showWinner(btn1val);
            }
        }
    }
}

const resetGame = () =>{
    turnO = true;
    winner.classList.add("hide");
    startGame();
}

const startGame = () =>{
    for( let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}
const endGame = () =>{
    for( let btn of btns){
        btn.disabled = true;
    }
}



resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);