/*
    Name: Eric Ong
    Class: CS 233 JS
    Assignment: Lab 2 Tick Tac Toe
    Date: 4/12/2024
*/

// Create a class called TTT
class TTT {
    /*
        Add a constructor that 
        -   defines and initializes all variables
        -   binds the keyword this to the class for each function because
            this will otherwise will refer to the clicked square
            -   this.calculateWinner = this.calculateWinner.bind(this);
            -   DON'T bind this for handleClick at this point
        -   calls the init method
    */
   constructor () {
    // start with these global variables
    // is x the next player.  x plays first so it is initialized to true
    this.xIsNext = true;
    // this is the data for the game NOT the UI elements
    this.squares = Array(9).fill(null);
    // these 2 keep track of who wins and where on the board the win occurs
    this.winner = null;
    this.winningLine = Array();
    // all of the possible ways to win
    this.lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

        this.calculateWinner = this.calculateWinner.bind(this);


        this.init();
   }

    /*
        Convert each function to a method
        -   move it inside the class
        -   remove the keyword function
        -   add this to all of the variables that belong to the class
        -   change var to let or const for local variables
        -   add this to all method calls
     
        Init
        -   bind both this and i to handleClick
            -   this.handleClick.bind(this, i);

        CalculateWinner
        -   use destructuring assignment to assign values to
            a b and c in one line

        HandleClick
        -   add a parameter i rather than getting i from this
            -   this now refers to the class not the square
        -   remove the local variable i
        -   add a local variable to refer to the clicked square
            -   remember that squares have an integer id 0 - 8
    */

    init() {
        const uiSquares = document.getElementsByName("square");
        for (let i = 0; i < uiSquares.length; i++)
            uiSquares[i].onclick = this.handleClick.bind(this, i);
    }


    handleClick(index) {
        // Remember that the keyword this refers to the square you clicked and the id is an integer 0 - 8
        // create a local variable called player and set it to either "X" or "O" using the variable xIsNext
        // Update the variable xIsNext to the "opposite" boolean value
        let player = (this.xIsNext)? "X" : "O";
        this.xIsNext = !this.xIsNext;
    
        // Set the element in the squares array at index to the player's symbol.
        // Update the inner html for the square in the UI to the player's symbol too
        // Set the onclick handler for this square in the UI to an empty anonymous function or arrow function
        this.squares[index] = player
        document.getElementById(index).innerHTML = player;
        const square = document.getElementById(index);
        square.onclick = () => {};
    
        // If a call to calculateWinner returns true
            // highlight the winner and disable all of the squares
        // otherwise 
            //update the status in the UI to display the player
        if (this.calculateWinner()) {
            this.highlightWinner();
            this.disableAll();
        }
        else {
            document.getElementById("status").innerHTML = "Next Player: " + (this.xIsNext ? "X" : "O");
        }
    }


    calculateWinner() {
        for (let i = 0; i < this.lines.length; i++) {
            let [a, b, c] = [
                this.lines[i][0],
                this.lines[i][1],
                this.lines[i][2]
            ];  
            
            /*
            let a = this.lines[i][0];
            let b = this.lines[i][1];
            let c = this.lines[i][2];      
            */

            if (this.squares[a] && 
                this.squares[a] === this.squares[b] && 
                this.squares[a] === this.squares[c]) {
                this.winner = this.squares[a];
                this.winningLine = this.lines[i];
                return true;
            }
        }
        this.winner = null;
        this.winningLine = Array();
        return false;
    }


    highlightWinner() {
        // Update the status in the UI to display the winner
        // Iterate through the winningLine array.  It contains the indices of the winning squares
        //      get the next square using the current index in the winningLine array as the id
        //      add the class red to the square
        document.getElementById("status").innerHTML = "Winner: " + this.winner;
        for (let i = 0; i < this.winningLine.length; i++) {
            let square = document.getElementById(this.winningLine[i]);
            square.classList.add("red");
        }
    }


    disableAll() {
        // create a variable that stores all of the ui squares on the page
        // iterate through that array
            // Set the onclick handler for a ui square to function that does nothing
        let uiSquares = document.getElementsByName("square");
        for (let i = 0; i < uiSquares.length; i++)
            uiSquares[i].onclick = () => {};
    }
}






// declare a variable ttt

// add an onload handler to the window that assigns ttt to a TTT
let ttt;
window.onload = () => {
    ttt = new TTT();
}