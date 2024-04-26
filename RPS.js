// document.write(" Hello");

printResult = document.getElementById("result");

function computerChoice(){
    let computerChoice  = '';
    const choices = ['Rock','Paper','Scissor'];
    let choice = Math.floor(Math.random() * 10);
    // console.log(choice);
    if(choice%3 === 0){
        computerChoice = choices[0];
    }
    else if(choice%3 === 1){
        computerChoice = choices[1];
    }
    else{
        computerChoice = choices[2];
    }
    return computerChoice;
}

function rockWin(){
    const compChoice = computerChoice();
    let result;
    // console.log(compChoice);
    if(compChoice === 'Rock'){
        result = 'Tied';
    }
    else if(compChoice === 'Paper'){
        result = 'Lost';
    }
    if(compChoice === 'Scissor'){
        result = 'Won';
    }

    printResult.innerHTML =  `Your Choice: Rock <br> Computer Choice: ${compChoice} <br> You ${result}`;
}
function paperWin(){
    const compChoice = computerChoice();
    let result;
    // console.log(compChoice);
    if(compChoice === 'Paper'){
        result = 'Tied';
    }
    else if(compChoice === 'Scissor'){
        result = 'Lost';
    }
    if(compChoice === 'Rock'){
        result = 'Won';
    }
    printResult.innerHTML =  `Your Choice: Paper <br> Computer Choice: ${compChoice} <br> You ${result}`;
}
function scissorWin(){
    const compChoice = computerChoice();
    let result;
    // console.log(compChoice);
    if(compChoice === 'Scissor'){
        result = 'Tied';
    }
    else if(compChoice === 'Rock'){
        result = 'Lost';
    }
    if(compChoice === 'Paper'){
        result = 'Won';
    }
    printResult.innerHTML =  `Your Choice: Scissor <br> Computer Choice: ${compChoice} <br> You ${result}`;
}