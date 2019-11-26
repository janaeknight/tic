var turns = 0; 
var userTurns = 0;
var aiTurns = 0;

function tact1() {
    var tic = document.getElementById("t1");
        if (tic.length>1) {
            tic.innerHTML = "x";
            turns += 1;
            userTurns += 1;
        };
    console.log("Your turns: " +userTurns,);
    console.log("Computer turns: " +aiTurns,);
    return;
}



function checkWin() {
    if (turns>=3) {
        console.log("Checking possible solutions...");
    } else if (turns===9) {
        console.log("Draw!");
    };
    return;
}







































function clearBoard() {
    // var board = document.getElementsByClassName("spx");
    // board.innerHTML  = "here";
}