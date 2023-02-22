const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const WinnerResult = document.getElementById('results');
let userChoice;

const possibleChoices = document.querySelectorAll('button');


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {

userChoice = e.target.id;
userChoiceDisplay.innerHTML= userChoice;

generateComputerChoice()

Winner()
}))


function generateComputerChoice(){

    const randomNumber = Math.floor(Math.random()*3) +1;

    if(randomNumber==1){

        computerChoice = 'Rock'
    }

    if(randomNumber==2){

        computerChoice = 'Paper'
    }

    if(randomNumber==3){

        computerChoice = 'Scissor'
    }

computerChoiceDisplay.innerHTML = computerChoice;
}

function Winner(){

    if(userChoice == computerChoice){
        winner = 'It is a tie'
    }


    if(userChoice =='Rock' && computerChoice=='Paper'){
        winner = 'You Lose'
    }

    if(userChoice =='Rock' && computerChoice=='Scissor'){
        winner = 'You Win'
    }

    if(userChoice =='Paper' && computerChoice=='Rock'){
        winner = 'You Win'
    }

    if(userChoice =='Paper' && computerChoice=='Scissor'){
        winner = 'You Lose'
    }

    if(userChoice =='Scissor' && computerChoice=='Rock'){
        winner = 'You Lose'
    }

    if(userChoice =='Rock' && computerChoice=='Paper'){
        winner = 'You Win'
    }

    WinnerResult.innerHTML= winner;
}