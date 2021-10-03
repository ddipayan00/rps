// Score variables
let playerScore = 0;
let compScore = 0;
// Division Element Constant
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

// Proper Name
const playerFormat = () => {
    return "Player".fontcolor("green");
}
const computerFormat = () => {
    return "Computer".fontcolor("red");
}

// Player Choice Name
const properName = name => {
    if(name === "r") return "Rock";
    if(name === "p") return "Paper";
    return "Scissor";
}

// Winner Function
const winner = (playerChoice,compChoice) => {
    playerScore++;
    setTimeout(() => {
        const audio = new Audio("resourses/audio/winner.mp3");
        audio.play();
        playerScore_span.innerHTML = playerScore;
        result_div.innerHTML = `${properName(playerChoice)}(${playerFormat()})  beats  ${properName(compChoice)}(${computerFormat()}) You win 🔥`;
    },1000); 
}

// Loser Function
const loser = (playerChoice,compChoice) => {
    compScore++;
    setTimeout(() => {
        const audio = new Audio("resourses/audio/loser.mp3");
        audio.play();
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = `${properName(playerChoice)}(${playerFormat()})  loses to  ${properName(compChoice)}(${computerFormat()}) You lose 😥`;
    },1000);
}

// DrawMatch Function
const drawMatch = (playerChoice,compChoice) => {
    setTimeout(() => {
        const audio = new Audio("resourses/audio/drawMatch.mp3");
        audio.play();
        result_div.innerHTML = `${properName(playerChoice)}(${playerFormat()})  is equal to  ${properName(compChoice)}(${computerFormat()}) It's a draw 🙂`;
    },1000);
}


// Random computer choice
const getCompChoice = () => {
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 

// Game Function
function game(playerChoice){
    if(playerChoice === "r") {
        const audio = new Audio("resourses/audio/r.mp3");
        audio.play();
    }else if(playerChoice === "p"){
        const audio = new Audio("resourses/audio/p.mp3");
        audio.play();
    }
    else{
        const audio = new Audio("resourses/audio/s.mp3");
        audio.play();
    }
    const compChoice = getCompChoice();
    switch(playerChoice + compChoice){
        case "rs":
            winner(playerChoice,compChoice);
            break;
        case "pr":
            winner(playerChoice,compChoice);
            break;
        case "sp":
            winner(playerChoice,compChoice);
            break;
        case "rp":
            loser(playerChoice,compChoice);
            break;
        case "ps":
            loser(playerChoice,compChoice);
            break;
        case "sr":
            loser(playerChoice,compChoice);
            break;
        case "rr":
            drawMatch(playerChoice,compChoice);
            break;
        case "pp":
            drawMatch(playerChoice,compChoice);
            break;
        case "ss":
            drawMatch(playerChoice,compChoice);
            break;
    }
}


// Main function
function main(){
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissor_div.addEventListener('click',() => game("s"));
    newGame_div.addEventListener('click',() => fun());
    newGame_div_ok.addEventListener('click',() => fun());
}
// Driver Code
main();
function myFunction(){
    playerScore = 0;
    compScore = 0;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "Result will be here";
};


