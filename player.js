"use strict";

class Player{
    constructor(name){
        this.name = name;
        this.gestureChoice;
        this.score = 0;
        this.gestureArray = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    chooseGesture(){
        //choose gesture human pick a gesture computer random select
        let userGesture = prompt("Please choose your gesture");
        return userGesture;
    }
    computerRandomGesture(array){
        let randomIndex = Math.floor(Math.random() * array.length);
        let computerGesture = array[randomIndex]
        return computerGesture;
    }
}

module.exports.Player = Player;
