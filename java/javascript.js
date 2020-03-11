var winner = "";

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
    if (tic.innerText.length<1) {
        tic.innerHTML = "X";
        turns += 1;
        userTurns += 1;
        aiMove();
        checkWin();
        showWinner();
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
        console.log(randomSpot)
        // debugge
        if (randomSpot.innerText.length<1 && turns<=8) {
            randomSpot.innerHTML = "O"
            aiTurns += 1
            console.log("Computer picked: " +randomSpot,)
            return
        } else {
            aiMove();
        }
    return;
}

// All Possible Matches ((Manual))
function checkWin() {
    console.log("Checking possible solutions...");

    if (turns>=3 && (
        ((t1.text="X") && (t2.text="X") && (t3.text="X")) || 
        ((m1.text="X") && (m2.text="X") && (m3.text="X")) || 
        ((b1.text="X") && (b2.text="X") && (b3.text="X")) || 
        ((t1.text="X") && (m1.text="X") && (b1.text="X")) || 
        ((t2.text="X") && (m2.text="X") && (b2.text="X")) || 
        ((t3.text="X") && (m3.text="X") && (b3.text="X")) || 
        ((t1.text="X") && (m2.text="X") && (b3.text="X")) || 
        ((t4.text="X") && (m2.text="X") && (b1.text="X"))
    )) {
        console.log("X Wins!");

        return true;
    } else if (turns>=3 && (
        ((t1.text="O") && (t2.text="O") && (t3.text="O")) || 
        ((m1.text="O") && (m2.text="O") && (m3.text="O")) || 
        ((b1.text="O") && (b2.text="O") && (b3.text="O")) || 
        ((t1.text="O") && (m1.text="O") && (b1.text="O")) || 
        ((t2.text="O") && (m2.text="O") && (b2.text="O")) || 
        ((t3.text="O") && (m3.text="O") && (b3.text="O")) || 
        ((t1.text="O") && (m2.text="O") && (b3.text="O")) || 
        ((t4.text="O") && (m2.text="O") && (b1.text="O"))
    )) {
        console.log("O Wins!");

        return true;
    } else {
        console.log("Draw!");
        return false;
    };
};

function showWinner() {
    // ...
    // document.getElementById("").innerHTML = winner;
    
    if (checkWin()) {
        console.log("Showing...");
    } else {
        // nothing
    }
}

































function clearBoard() {
    // var board = document.getElementsByClassName("spx");
    // board.innerHTML  = "here";
}