console.log("Welcome!!! This is a guessing game. Press ENTER to continue.\n");

let username = prompt("Please enter your username");
function validateUsername(username) {
  if (username.length < 10 && username.length > 0) {
    return true;
  } else {
    return false;
  }
}

while (validateUsername(username) == false) {
  username = prompt("Username must be less than 10 and greater than 0.")
}


let points = 0;
let rate = 2;
let stage = 1;
let upScore = true;
let lives = 3;

function fun() {

  while (upScore && lives != 0 && rate < 11) {
    let guess1 = parseInt(prompt("\nSTAGE " + stage + ": Please guess the number between the range of 1 to " + rate + ":"));

    let random = Math.floor((Math.random() * rate) + 1);

    if (guess1 == random) {
      alert("\nYes, " + username.toUpperCase() + ", you got it right: "+ lives + " lives left\n");
      points++;
      rate++;
      stage++;

      alert("Congratulations!!! " + username.toUpperCase() + ", you have won. \nMove to the next stage");

    } else if (guess1 != random) {
      alert("Try again");
      lives--;

      alert("You have " + lives + " lives");
    } else {
      upScore = false;
    }

  }

  alert(`Ooh Sorry!!! ${username.toUpperCase()}, you have lose.\nYour total point is ${points} \nBYE!!!`);
}

fun(rate);