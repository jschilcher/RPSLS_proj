"use strict";
const prompt = require('prompt-sync')()

class Player{
    constructor(name){
        this.name = name;
        this.gestureChoice;
        this.score = 0;
        this.gestureArray = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    chooseGesture(){
        let userGesture = prompt("Please choose your gesture");

        //TODO: Figure out a way to use user input to choose a gesture!
        // HINT: We need to figure out a way to map that input to the index of an array
        return this.gestureArray[userGesture];
    }

}

module.exports.Player = Player;
