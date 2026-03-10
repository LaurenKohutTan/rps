let score = 0;
let output = "";
let result = "";

function clearAnimations() {
  document.getElementById("Mark Galesi").classList.remove("spinning", "winner");
  document.getElementById("Lauren Tan").classList.remove("spinning", "winner");
  document.getElementById("Timothy Meyer").classList.remove("spinning", "winner");
}

function play(choice) {
  let computer = ["Mark Galesi", "Lauren Tan", "Timothy Meyer"];
  let index = Math.floor(Math.random() * 3);
  let comp = computer[index];

  clearAnimations();

  let playerImg = document.getElementById(choice);
  let compImg = document.getElementById(comp);

  if (choice == "Mark Galesi" && comp == "Lauren Tan") {
    output = "YOU CHOSE " + choice + ". THE COMPUTER CHOSE " + comp + ". YOU LOSE";
    result = "You Lose! TAN beats GALESI!";
    score -= 100;
    playerImg.classList.add("spinning");
    compImg.classList.add("winner");
  }
  else if (choice == "Mark Galesi" && comp == "Timothy Meyer") {
    output = "YOU CHOSE " + choice + ". THE COMPUTER CHOSE " + comp + ". YOU WIN";
    result = "You Win! GALESI beats MEYER!";
    score += 100;
    playerImg.classList.add("winner");
    compImg.classList.add("spinning");
  }
  else if (choice == "Lauren Tan" && comp == "Timothy Meyer") {
    output = "YOU CHOSE " + choice + ". THE COMPUTER CHOSE " + comp + ". YOU LOSE";
    result = "You Lose! MEYER beats TAN!";
    score -= 100;
    playerImg.classList.add("spinning");
    compImg.classList.add("winner");
  }
  else if (choice == "Lauren Tan" && comp == "Mark Galesi") {
    output = "YOU CHOSE " + choice + ". THE COMPUTER CHOSE " + comp + ". YOU WIN";
    result = "You Win! TAN beats GALESI!";
    score += 100;
    playerImg.classList.add("winner");
    compImg.classList.add("spinning");
  }
  else if (choice == comp) {
    output = "YOU CHOSE " + choice + ". THE COMPUTER CHOSE " + comp + ". YOU TIED";
    result = "Tie!";
  }
  else if (choice == "Timothy Meyer" && comp == "Mark Galesi") {
    output = "YOU CHOSE " + choice + ". THE COMPUTER CHOSE " + comp + ". YOU LOSE";
    result = "You Lose! GALESI beats MEYER!";
    score -= 100;
    playerImg.classList.add("spinning");
    compImg.classList.add("winner");
  }
  else if (choice == "Timothy Meyer" && comp == "Lauren Tan") {
    output = "YOU CHOSE " + choice + ". THE COMPUTER CHOSE " + comp + ". YOU WIN";
    result = "You Win! MEYER beats TAN!";
    score += 100;
    playerImg.classList.add("winner");
    compImg.classList.add("spinning");
  }

  document.getElementById("output").textContent = output;
  document.getElementById("result").textContent = result;
  document.getElementById("score").textContent = "Score: " + score;
}

function reset() {
  score = 0;
  output = "";
  result = "";

  clearAnimations();

  document.getElementById("output").textContent = "Galesi, Tan, Meyer, shoot! Pick a teacher!";
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = "Score: 0";
}