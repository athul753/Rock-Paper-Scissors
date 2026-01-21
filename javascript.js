function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerchoice(){
let ans=getRandomInt(3);
if(ans==0){
    return "rock";
}
else if(ans==1){
    return "paper";
}
else if(ans==2){
    return "scissor";
}
}


function gethumanchoice(){
    let input=prompt("enter rock,paper,scissor");
    return input.toLowerCase();
}

function playround(hum,comp){
    let humanchoice=hum;
    let computerchoice=comp;
    
    let flag=0;//if flag 1 human wins if 2 computer wins

    if(humanchoice==computerchoice){
        console.log("its a tie");
    }
    else if(humanchoice=="rock" && computerchoice=="scissor"){
        humanscore++;
        console.log(`${humanchoice} beats ${computerchoice}`);
    }
    else if(humanchoice=="paper" && computerchoice=="rock"){
        humanscore++;
        console.log(`${humanchoice} beats ${computerchoice}`);
    }
    else if(humanchoice=="scissor" && computerchoice=="paper"){
        humanscore++;
        console.log(`${humanchoice} beats ${computerchoice}`);       
    }
    else if(computerchoice=="rock" && humanchoice=="scissor"){
        computerscore++;
        console.log(`${computerchoice} beats ${humanchoice}`);
    }
    else if(computerchoice=="paper" && humanchoice=="rock"){
        computerscore++;
        console.log(`${computerchoice} beats ${humanchoice}`);  
      }
    else if(computerchoice=="scissor" && humanchoice=="paper"){
        computerscore++;
        console.log(`${computerchoice} beats ${humanchoice}`);
        }
    else{
        console.log("invalid choice!");
    }
}

let humanscore=0;
let computerscore=0;

function playgame(){
for(let i=0;i<5;i++){
const humanChoice=gethumanchoice();
const computerChoice=getComputerchoice();
console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);
playround(humanChoice, computerChoice);
console.log(`Score - You: ${humanscore}, Computer: ${computerscore}`);
}
}
playgame();
if(humanscore>computerscore){
    console.log("You won the game");
}
else if(computerscore>humanscore){
    console.log("You lost the game");
}
else{
    console.log("Player and computer both got equal points");
}

