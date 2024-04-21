/*================================ player.js ================================*/

/* 
    Author: Eric Ong
    Description: Lab 2B
    Class: JavaScript 233
    Date: 4/18/2024
 */

/**============================================
 **                                          CLASS                                                                                  
 *=============================================**/  

class Player {
    //?------------------< PRIVATE VARIABLES >------------------?//
    #name;
    #number;
    #score;
    #roundsWon;

    #ship;
    #captain;
    #crew;


    //?------------------< CONSTRUCTOR >------------------?//
    constructor(name) {
        //  initialize instance variables with 'this.'
        this.#name = name;
        this.#number = 0;
        this.#score = 0;
        this.#roundsWon = 0;

        this.#ship = false;
        this.#captain = false;
        this.#crew = false;
    }


    //?------------------< GETTERS & SETTERS >------------------?//
    get name() {return this.#name;}
    get number() {return this.#number;}
    get roundsWon() {return this.#roundsWon;}

    get ship() {return this.#ship;}
    get captain() {return this.#captain;}
    get crew() {return this.#crew;}

    
    set name(value) {this.#name = value}
    set number(value) {this.#number = value}
    set roundsWon(value) {this.#roundsWon = value}

    set ship(value) {this.#ship = value}
    set captain(value) {this.#captain = value}
    set crew(value) {this.#crew = value}


    //?=============================================//
    //?                                      METHODS                                        //
    //?=============================================//

    //  Calls the roll() function within die.js for each dice ('dice' is the #dice1 or #dice2 within the game.js rollDice function)
    roll(dice) {
        for (let i = 0; i < dice.length; i++) {
            dice[i].roll();
        }
    }








}