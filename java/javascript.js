let turns = 0; 
let userTurns = 0;
let aiTurns = 0;

    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let m3 = document.getElementById("m3");
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");

// 🤔🤔🤔

function tact1(tic) {
    // var tic = document.getElementById("t1");
    if (tic.innerText.length<1) {
        tic.innerHTML = "X";
        turns += 1;
        userTurns += 1;
        aiMove();
    }
    console.log("Your turns: " +userTurns,);
    console.log("Computer turns: " +aiTurns,);
}


function aiMove() {
        let spots = [t1, t2, t3, m1, m2, m3, b1, b2, b3];
        let rand = Math.random();
        let spotsSpx = spots.length;
        let randIndex = Math.floor(rand*spotsSpx);
        let randomSpot = spots[randIndex];
        console.log(randomSpot);
        // debugger

        if (randomSpot.innerText.length<1 && turns<=8) {
            randomSpot.innerHTML = "O";
            aiTurns += 1;
            console.log("Computer picked: " +randomSpot,)
            return;
        } else {
            aiMove();
        }
    return;
}

// All Possible Matches ((Manual))
function checkWin() {
    if (turns>=3) {
        console.log("Checking possible solutions...");
        if ( ((t1="X") && (t2="X") && (t3="X")) || 
            ((m1="X") && (m2="X") && (m3="X")) || 
            ((b1="X") && (b2="X") && (b3="X")) || 
            ((t1="X") && (m1="X") && (b1="X")) || 
            ((t2="X") && (m2="X") && (b2="X")) || 
            ((t3="X") && (m3="X") && (b3="X")) || 
            ((t1="X") && (m2="X") && (b3="X")) || 
            ((t4="X") && (m2="X") && (b1="X"))
        ) {
            console.log("X wins!")
        }
    } else if (turns===9) {
        console.log("Draw!");
    };
    return;
}







































function clearBoard() {
    // var board = document.getElementsByClassName("spx");
    // board.innerHTML  = "here";
}