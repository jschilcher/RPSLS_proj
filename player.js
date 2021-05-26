"use strict";

class Player{
    constructor(name){
        this.name = name;
        this.gestureChoice;
        this.score = 0;
        this.gestureArray = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    method1(){
        //choose gesture
    }
}

module.exports.Player = Player;
