"use strict";

const { Human } = require("./human");
const { Computer } = require("./Computer");
const { Player } = require("./player");

class Game{
    constructor(){
        this.playerOne = new Human("Jenelle");
        this.playerTwo;

    }

    runGame(){
        this.displayRules
        //switch case with rpsls rules?
        //Put welcome with rules. Function?
        //Single player or multi
    }

    displayRules(){
        console.log("Welcome to rock, paper, scissors, lizard, spock!");
        console.log("It will be best of three.");
        console.log("Rock crushes scissors, scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock!");
        console.log("To pick rock type 0");
        console.log("To pick paper type 1");
        console.log("To pick scissors type 2");
        console.log("To pick lizard type 3");
        console.log("To pick Spock type 4");
    }

    // singleOrMulti(){
    //     let welcomePlayer = prompt("single player or mulitplayer?");
    //     switch(welcomePlayer){
    //         //case single and multi
    //     }
    // }


}

module.exports.Game = Game;
