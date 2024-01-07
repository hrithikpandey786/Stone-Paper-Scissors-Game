let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let mssg = document.getElementById("mssg");
let userScoreDisplay = document.getElementById("userScore");
let compScoreDisplay = document.getElementById("compScore");
let rstMssg = document.getElementById("rstMssg");

function drawGame(){
    mssg.innerText = "Game Draw, Play Again!";
    mssg.style.backgroundColor="#081b31";
} 

function displayMssg(userWin, userTurn, compTurn){
    if(userWin==true){
        mssg.innerText = `You Win! Your ${userTurn} beats ${compTurn}`;
        mssg.style.backgroundColor = "green";
        userScore++;
        userScoreDisplay.innerText = userScore;
    }
    else {
        mssg.innerText = `You Lose! ${compTurn} beats your ${userTurn}`;
        mssg.style.backgroundColor = "red";
        compScore++;
        compScoreDisplay.innerText = compScore;
    }
}

function genCompSelection(){
    const arr = ["Rock", "Scissors", "Paper"];
    compSel = Math.floor(Math.random()*3);
    return arr[compSel];
}

function playGame(userTurn){
    let compTurn = genCompSelection();
    if(userTurn==compTurn){
        drawGame();
    } else {
        let userWin = true;
        if(userTurn=="Paper"){
            userWin = compTurn=="Scissors"?false:true;
        } else if(userTurn=="Rock"){
            userWin = compTurn=="Paper"?false:true;
        } else {
            userWin = compTurn=="Rock"?false:true;
        }
        displayMssg(userWin, userTurn, compTurn);
    }
}

choices.forEach((choice)=>{
     choice.addEventListener("click", ()=>{
         const userTurn = choice.getAttribute("id");
         playGame(userTurn);
     });
});

rstMssg.addEventListener("click", ()=>{
     userScore = 0;
     userScoreDisplay.innerText = userScore;
     compScore = 0;
     compScoreDisplay.innerText = compScore;
     mssg.innerText = "Play Your Move!";
     mssg.style.backgroundColor = "#081b31";
}); 