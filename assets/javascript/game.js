charArray=[];
var userText = document.getElementById("guessedLetters");
var counter=0;

if(!endGame()){
    startNewGame();
}

function endGame() {
    return 0;
}

function startNewGame(){
/* Check for onekeyup event */
document.onkeyup = function(event){
    console.log("event = ",event);
    var newChar = event.key;
    charArray.push(newChar);
    console.log("Yout typed: ",charArray);
    /* print on screen all the characters entered by user*/
    userText.textContent = charArray.toString();
    /* Check if character is same as computer's guess */
    var randomChar=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,1);
    console.log("random character generated =",randomChar);
    if(randomChar == newChar){
        var winCount = document.getElementById("winCount");
        counter = counter+1;
        winCount.textContent = counter;
        console.log("win count=",counter)
    } //if
    } //event
}
