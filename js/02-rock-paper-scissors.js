alert('Let\'s play Rock, Papaer, Scissors!');
let again = 'y';
do {
    let yourChoice = prompt('Enter your choice of rock, papers or scissors (rock/paper/scissors).');
    let randomNum = 0;

    while (randomNum == 0) {
        randomNum = Math.round(Math.random() * 10);
    }  // no 0
    let comChoice;
    if (randomNum > 6) {
        comChoice = 'rock'; // 7, 8, 9 are rock
    } else if (randomNum > 3) {
        comChoice ='paper'; // 4, 5, 6 are paper 
    } else {
        comChoice = 'scissors'; // 1, 2, 3 are scissors
    }

    if (yourChoice != 'rock' && yourChoice != 'paper' && yourChoice != 'scissors') {
        alert('You entered an invalid character.')
    } else if (yourChoice == comChoice) {
        alert(`You chose ${yourChoice}, the computer chose ${comChoice}. We are tie!`)
    } else if ((yourChoice == 'rock' && comChoice == 'scissors') || (yourChoice == 'paper' && comChoice == 'rock') || (yourChoice == 'scissors' && comChoice == 'paper')) {
        alert(`You chose ${yourChoice}, the computer chose ${comChoice}. You won!`)
        again = prompt('Do you want to play again?');
    } else if ((yourChoice == 'rock' && comChoice == 'paper') || (yourChoice == 'paper' && comChoice == 'scissors') || (yourChoice == 'scissors' && comChoice == 'rock')) {
        alert(`You chose ${yourChoice}, the computer chose ${comChoice}. You lost!`)
        again = prompt('Do you want to play again?');
    }
} while (again == 'y');
alert('Thank you for playing!');