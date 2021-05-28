"use strict";

const { Human } = require("./human");
const { Computer } = require("./Computer");
const { Player } = require("./player");
const prompt = require('prompt-sync')();

class Game{
    constructor(){
        this.playerOne;
        this.playerTwo;

    }

    runGame(){
        this.displayRules();
        this.singleOrMulti();
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            for (let i = 0; i < 4 ; i++) {
                this.playerOne.score++
            }
        }
        if(this.playerOne.gestureChoice == "rock")
        switch(this.gestureChoice){
            case "rock":

        }
        
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
        let welcomePlayer = prompt("single player or multiplayer?").toLowerCase();
        switch(welcomePlayer){
            case "single player":
                console.log("Single player selected");
                this.singleHumanSingleComputerBuilder();
                break;
            case "multiplayer":
                console.log("Multiplayer selected");
                this.multiplayerBuilder();
                break;
            default:
                welcomePlayer = prompt("please type single player or multiplayer...").toLowerCase();
                break;    
        }
    }

    singleHumanSingleComputerBuilder(){
        this.playerOne = new Human("Jenelle");
        console.log(this.playerOne.name);
        this.playerTwo = new Computer("Ralph");
        console.log(this.playerTwo.name);
    }

    multiplayerBuilder(){
        this.playerOne = new Human("Jenelle");
        console.log(this.playerOne.name);
        this.playerTwo = new Human("Aaron");
        console.log(this.playerTwo.name);
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
