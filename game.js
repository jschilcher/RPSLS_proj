"use strict";

const { Human } = require("./human");
const { Computer } = require("./Computer");
const { Player } = require("./player");

class Game{
    constructor(){
        this.playerOne = new Human("Jenelle");
        this.playerTwo = this.singleOrMulti//can I call a multi or single player function here?

    }

    runGame(){
        this.displayRules

        while(this.playerOne.score < 3 && this.playerTwo < 3)
        //switch case
        switch(){
            case "rock":

        }
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

    singleOrMulti(){
        let welcomePlayer = prompt("single player or multiplayer?");
        switch(welcomePlayer){
            //case single and multi
            case "single player":
                console.log("Single player selected")
                break;
            case "multiplayer":
                break;
            default:
                welcomePlayer = prompt("please type single player or multiplayer...");
                break;    
        }
    }

    displayWinner(){
        if(this.playerOne.score > this.playerTwo.score){
            console.log(this.playerOne.name + "is the winner!");
        }
        else{
            console.log(this.playerTwo.name + "is the winner!");
        }
    }


}

module.exports.Game = Game;
