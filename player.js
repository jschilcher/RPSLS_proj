"use strict";
const prompt = require('prompt-sync')();

class Player{
    constructor(name){
        this.name = name;
        this.gestureChoice;
        this.score = 0;
        this.gestureArray = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    chooseGesture(){
       
    }

}

module.exports.Player = Player;
