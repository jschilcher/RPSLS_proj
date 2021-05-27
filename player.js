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
        while(userGesture > 4){
            userGesture = prompt("Please choose a correct gesture!");
        }
        return this.gestureArray[userGesture];
    }

}

module.exports.Player = Player;
