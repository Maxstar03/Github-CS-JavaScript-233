/* 
    Author: Eric Ong
    Description: Lab 2B
    Class: JavaScript 233
    Date: 4/18/2024
 */

/**============================================
    **                        GLOBAL CONSTRAINTS
*=============================================**/



/**============================================
 **                                          CLASS                                                                                  
 *=============================================**/  
 class Game {

    //?------------------< PRIVATE VARIABLES >------------------?//
    #players;                            //  array of all player objects (both players)
    #currentPlayerIndex;     //  index to the players array  (self explanatory)
    #turn;                                 //  number from 1-3 representing the player turn
    #dice1;                                //  an array for the 5 dice for player 1
    #dice2;                                //  an array for the 5 dice for player 2

    //?------------------< CONSTRUCTOR >------------------?//
    constructor() {
        //  Initialize instance variables with 'this.'
        this.#players = [];
        this.#currentPlayerIndex = 0;
        this.#turn = 1;
        this.#dice1 = [];
        this.#dice2 = [];

        //  Adds all 5 dice to the game for both player dice arrays
        for (let i = 0; i < 5; i++) {
            this.#dice1.push((new Die));     // player 1
            this.#dice2.push((new Die));    // player 2

            //^ log for adding dice (TESTING)
            console.log(`Dice ${i + 1} added to both arrays`);
        }
    }

    //?------------------< GETTERS & SETTERS >------------------?//
    get dice1() {return this.#dice1;}
    get dice2() {return this.#dice2;}
    get round() {return this.#turn;}

    get currentPlayer() {return this.#players[this.#currentPlayerIndex];}
    get players() {return this.#players;}



    //?=============================================//
    //?                                      METHODS                                        //
    //?=============================================//

    // Creates a new Player in the players array
    addPlayer(name) {
        // If 'name' is EMPTY, assign default name to player
        if (name === "") {
            name = "Player " + (this.#players.length + 1);
        }

        // Create player and add to players array
        let player = new Player(name);
        player.number = (this.#players.length + 1)
        this.#players.push(player);
    }
    
    // Returns the player object at the current player's index
    getCurrentPlayer() {
        return this.#players[this.#currentPlayerIndex];
    }

    // Checks for ship, captain, or crew and returns the index when found. Returns -1 when not found.
    checkForShipCaptainCrew(value) {
        let player = this.getCurrentPlayer();
        let index = -1;

        // If player 1
        if (player.number == 2) {
            // If player 1 does not have ship
            if (value == 'ship') {
                let shipFound = false;
                // loop through dice1 array
                for (let i = 0; i < this.#dice1.length && shipFound == false; i++) {
                    console.log(this.#dice1[i]);
                    if (this.#dice1[i].value == 6) {  // If 6 sided die is present in dice1 array
                        index = i;
                        shipFound = true;
                        console.log(`Die 6 found at index ${index}`);
                    }
                }
            }


        }
        else if (player.number == 1) {
            console.log("checkForShipCaptainCrew Player 2 stuff here.");
        }

        return index;
    }


    setAsideDie(index) {
        this.#dice1.splice(Number(index), 1);
        console.log(`dice1 array length: ${this.#dice1.length}`);
    }


    rollDice() {
        let player = this.getCurrentPlayer();

        // Player one rolls
        if (player.number == 1) {
            player.roll(this.#dice1);
        }
        // Player 2 rolls
         else {
            player.roll(this.#dice2);
        }

        //  Switch player turns
        if (this.#currentPlayerIndex >= this.#players.length - 1) {
            this.#currentPlayerIndex = 0;
        }
        else {
            this.#currentPlayerIndex++;
        }
    }

    // Starts a new game by resetting values
    startNewGame() {
        
        console.log("New game started.");
    }



 }