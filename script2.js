let choices = ["t", "w", "f"];
let play1 = 0;
let imgcontainer;
let played = 0;
let played2 = 0;
let multiplier = 1;
let humanscore = 0;
let computerscore = 0;

function doGame(playerchoice, computerchoice)
{
    resultText = document.getElementById("results")
    if((playerchoice == "t" && computerchoice == "w") || (playerchoice == "w" && computerchoice == "f") || (playerchoice == "f" && computerchoice == "t"))
    {
        resultText.textContent = "You won!";
        humanscore = humanscore + multiplier;
        multiplier = 1;
        document.getElementById("humanscore").textContent = humanscore;
    }
    else if(playerchoice == computerchoice)
    {
        resultText.textContent = "Tie!";
        multiplier = multiplier + 1;
    }
    else
    {
        resultText.textContent = "You lost!"
        computerscore = computerscore + multiplier;
        multiplier = 1;
        document.getElementById("computerscore").textContent = computerscore;
    }
}

function part1(choice1, choice2) {
    document.getElementById("playerchoices").textContent = "You played:"
    imgcontainer = document.getElementById("playerimages");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.src = choice1 + ".jpg";
    img2.src = choice2 + ".jpg";
    img1.id = "img1"
    img2.id = "img2"
    imgcontainer.appendChild(img1);
    imgcontainer.appendChild(img2);

    img1.addEventListener("click", () => {
        part2("img1");
    });
    img2.addEventListener("click", () => {
       part2("img2"); 
    });


    
    imgcontainer = document.getElementById("computerimages")
    let c1 = choices[Math.floor(Math.random() * choices.length)];
    let c2 = choices[Math.floor(Math.random() * choices.length)];
    let cc1 = document.createElement("img");
    let cc2 = document.createElement("img");
    cc1.src = c1 + ".jpg";
    cc2.src = c2 + ".jpg";
    cc1.id = "cc1";
    cc2.id = "cc2";
    imgcontainer.appendChild(cc1);
    imgcontainer.appendChild(cc2);
    document.getElementById("computerchoices").textContent = "Computer played:"
    
    document.getElementById("part2instructions").textContent = "Minus One! Click one of your images to hide them behind your back. The other one will go against the computer's play."
}
function buttonclicked(choice){
    if(play1 == 0){
      play1 = choice;
  }
    else if (played == 0)
    {
        played = 1;
        part1(play1, choice);
    }
}

function part2(whichImage){
    if(played2 == 0){
        played2 = 1;
        document.getElementById(whichImage).remove();
        let computerchoice = Math.floor(Math.random() * 2 + 1);
        document.getElementById("cc" + String(computerchoice)).remove();
        if(whichImage == "img1"){
            whichImage = 2;
        }
        else{
            whichImage = 1;
        }
        if(computerchoice == 1){
            computerchoice = 2;
        }
        else{
            computerchoice = 1;
        }
        let chosenimage = document.getElementById("img" + whichImage);
        const choice = chosenimage.getAttribute("src");
        let cchosenimage = document.getElementById("cc" + computerchoice);
        const cchoice = cchosenimage.getAttribute("src");
        doGame(choice[0], cchoice[0]);
    }
}
function reset(completereset) {
    play1 = 0;
    played = 0;
    played2 = 0;
    document.getElementById("results").textContent = "";
    document.getElementById("playerchoices").textContent = "";
    document.getElementById("computerchoices").textContent = "";
    document.getElementById("part2instructions").textContent = "";
    document.getElementById("playerimages").innerHTML = "";
    document.getElementById("computerimages").innerHTML = "";
    if(completereset == "yes")
    {
        multiplier = 1;
        humanscore = 0;
        computerscore = 0;
        document.getElementById("humanscore").textContent = humanscore;
        document.getElementById("computerscore").textContent = computerscore;
    }
}
