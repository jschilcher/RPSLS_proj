"use strict";

const { Player } = require("./player");

class Human extends Player{

    constructor(name){
        super(name);
        this.chooseGesture();
    }
    chooseGesture(){
        this.gestureChoice = prompt("Please choose your gesture");
        while(this.gestureChoice > 4){
            this.gestureChoice = prompt("Please choose a correct gesture!");
        }
        return this.gestureArray[gestureChoice];
    }
}

module.exports.Human = Human;