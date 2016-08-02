// //Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the users guess is too high or too low, the computer notifies them of that
// Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.


//declaring user's number
var chosenNum;
//declaring computer's number
var randomNum;
var count= 0;
var name;
//declaring a function that asks the user to pick a random number
function askUser(){
  chosenNum = prompt("Pick a Random Number between 1 and 100...if you Dare");
}


//declaring a function that tells the computer to select a random number
function compNum(){
  console.log(randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0);
}

function userName() {
  name= prompt("What's you name, buddy?")
}

// make the computer's number into a number
parseInt(randomNum, 10);

//call the computer's number
compNum();

userName();
//call the function to have the user to pick a number
askUser();

if (parseInt(chosenNum,10)!= chosenNum) {
  alert("C'mon Maaaayn. Use a Number");
  askUser();
}



while (count <= 6) {
  count = count + 1;

  //If users number is less than comps then we alert them...vic versa
  if (randomNum < chosenNum){
    alert("Your number is too HIGH!");
    askUser();
  }
  if (randomNum > chosenNum){
    alert("Your number is too LOW!");
    askUser();
  }

  }
  // If the user guesses the same number as the computer wins!

  if (randomNum == chosenNum){
    alert("You Win, " + name + "!!");
    }

    // User gets 7 tries to guess the number
  if (count =6 && (randomNum > chosenNum || randomNum < chosenNum)) {
  alert("GAME OVER. YOU LOSE, JABRONI!");
}
