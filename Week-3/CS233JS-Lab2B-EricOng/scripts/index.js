/*================================ index.js ================================*/
/* 
    Author: Eric Ong
    Description: Lab 2B
    Class: JavaScript 233
    Date: 4/19/2024
 */

// GLOBAL Variable
let player1DieRemoved = 0;
let player2DieRemoved = 0;

/*---- Create new game ----*/
let game = new Game();


 //?==================< INITIALIZE WEBPAGE >==================?//   
window.onload = function() {
    //  Assigns click handlers to the button elements on the page
    document.getElementById("start").addEventListener('click', startGame);  //  Start button
    document.getElementById("roll1").addEventListener('click', () => {rollDice(); player1Roll();});         //   Player 1 roll button
    document.getElementById("roll2").addEventListener('click', () => {rollDice(); player2Roll();});       //   Player 2 roll button

    //  adds click event handlers to the dice on the page
    for (let i = 0, j = 1; i < game.dice1.length; i++, j++) {       //  player 1 dice
        document.getElementById(`player1Die${j}`).addEventListener('click', () => {checkNeededDice();});
        console.log(`Event handler added for Player 1, Die ${j}`);
    }

    for (let i = 0, j = 1; i < game.dice1.length; i++, j++) {       //  player 2 dice
        document.getElementById(`player2Die${j}`).addEventListener('click', () => {console.log("P2 clicked");});
        console.log(`Event handler added for Player 2, Die ${j}`);
    }

    //  sets the start and roll buttons to enabled and disabled respectively (initialize start of game)
    document.getElementById("start").disabled = false;
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = true;
}


//?=============================================//
//?                                     FUNCTIONS                                      //
//?=============================================//

// General starting stuff
function startGame() {

    //  Get player names from webpage
    const player1 = document.getElementById("name1").value;
    const player2 = document.getElementById("name2").value;

    //  Call start new game to begin a new game
    game.startNewGame();

    // Initialize the buttons on the webpage
    document.getElementById("start").disabled = true;   // Disable start button
    document.getElementById("roll1").disabled = false;    // Player 1 will start first
    document.getElementById("roll2").disabled = true;    // Player 2 will start second

    // Add players to the game
    game.addPlayer(player1);    //  Adds player 1
    game.addPlayer(player2);   //  Adds player 2

    // Assigns player name to webpage
    document.getElementById("player1").innerHTML = game.players[0].name;     // Player 1 name is assigned to left side
    document.getElementById("player2").innerHTML = game.players[1].name;     // Player 2 name is assigned to right side
    document.getElementById("nextTurn").innerHTML += game.getCurrentPlayer().name;  // Shows who's turn it currently is
}


// SAMPLE TEXT
function rollDice() {
    let player = game.getCurrentPlayer();
    const scores = game.rollDice();
    console.log(`Player ${player.name} ship states = ${player.ship}`);

    player = game.getCurrentPlayer();
    document.getElementById("nextTurn").innerHTML = player.name;
}

// 
function checkNeededDice() {
    let player = game.getCurrentPlayer();

    // If player does not have ship yet
    if (player.ship == false) {
        console.log(`Ship needed.`);
        let index = game.checkForShipCaptainCrew('ship');   // check for ship
        if (index != -1) {  // if ship is found (NOT INDEX -1)
            document.getElementById("player1ShipImg").src = `./images/die${game.dice1[index].value}.png`;
            document.getElementById(`player1Die${index + 1}`).style.visibility = 'hidden';

            //! START HERE NEXT TIME
            game.setAsideDie(index);
            
        }
    }
}

// Replaces the images on the page with the shuffled dice for the respective player
function shuffleDice(player) {

    // Shuffles dice for player 1
    if (player == 1) {
        for (let i = 0, j = 1; i < game.dice1.length; i++, j++) {
            document.getElementById(`player1Die${j}`).src = `./images/die${game.dice1[i].value}.png`
        }
    } 
    // Shuffles dice for player 2
    else if (player == 2) {
        for (let i = 0, j = 1; i < game.dice2.length; i++, j++) {
            document.getElementById(`player2Die${j}`).src = `./images/die${game.dice2[i].value}.png`
        }
    }
}

// Calls shuffleDice function for player 1 and enables/disables buttons
function player1Roll() {
    // Shuffles the dice of player 1
    shuffleDice(1);

    //  Enable and disable roll buttons
    document.getElementById("roll1").disabled = true        // Disables player 1's roll button
    document.getElementById("roll2").disabled = false;     // Enables player 2's roll button
}

// Calls shuffleDice function for player 2 and enables/disables buttons
function player2Roll() {
    shuffleDice(2);

    //  Enable and disable roll buttons
    document.getElementById("roll2").disabled = true     // Disables player 2's roll button
    document.getElementById("roll1").disabled = false;    // Enables player 1's roll button
}
