const result=document.querySelector(".results");
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");
const score=document.querySelector(".score");
let humanscore=0;
let computerscore=0;

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

function playround(hum,comp){
    let humanchoice=hum;
    let computerchoice=comp;
    let roundresult="";
    let flag=0;//if flag 1 human wins if 2 computer wins

    if(humanchoice==computerchoice){
        roundresult="its a tie";
    }
    else if(humanchoice==".rock" && computerchoice=="scissor"){
        humanscore++;
        //console.log(`${humanchoice} beats ${computerchoice}`);
        roundresult="rock beats scissor - human wins";
    }
    else if(humanchoice==".paper" && computerchoice=="rock"){
        humanscore++;
        //console.log(`${humanchoice} beats ${computerchoice}`);
        roundresult="paper beats rock - human wins";
    }
    else if(humanchoice==".scissor" && computerchoice=="paper"){
        humanscore++;
        //console.log(`${humanchoice} beats ${computerchoice}`);       
        roundresult="scissor beats paper - human wins";
    }
    else if(computerchoice=="rock" && humanchoice==".scissor"){
        computerscore++;
        //console.log(`${computerchoice} beats ${humanchoice}`);
        roundresult="rock beats scissor - computer wins";
    }
    else if(computerchoice=="paper" && humanchoice==".rock"){
        computerscore++;
        //console.log(`${computerchoice} beats ${humanchoice}`);  
        roundresult="paper beats rock - computer wins";
      }
    else if(computerchoice=="scissor" && humanchoice==".paper"){
        computerscore++;
        //console.log(`${computerchoice} beats ${humanchoice}`);
        roundresult="scissor beats paper - computer wins";
        }
    else{
        roundresult="its a tie";
    }
return humanscore, computerscore, (result.textContent = roundresult), score.textContent = `Human: ${humanscore} | Computer: ${computerscore}`;

}

function alertfun(humch){
    const computerchoice=getComputerchoice();
    playround(humch,computerchoice);
}

paper.onclick=()=>alertfun(".paper");


rock.addEventListener('click',()=>alertfun(".rock"));

scissor.addEventListener("click", () => {
    const computerSelection = getComputerchoice();
    playround(".scissor", computerSelection);
});

