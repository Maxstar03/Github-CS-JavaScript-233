/* 
    Author: Eric Ong
    Description: Lab 2B
    Class: JavaScript 233
    Date: 4/18/2024
 */


/**============================================
    **                                     CLASS
    *============================================**/
class Die {

    //  private variables
    #value

    //  class constructor
    constructor() {
        this.#value = 0;
    }

    //  getter to get value
    get value() {return this.#value;}


    //?=============================================//
    //?                                      METHODS                                        //
    //?=============================================//
    
    //  "rolls" a dice to get a random number from 1-6
    roll() {
        this.#value = Math.floor(Math.random() * 6) + 1;    //  remember that +1 is needed since the random number goes to one less than max number
    }
}
