"use strict";

const { Player } = require("./player");
const prompt = require('prompt-sync')();

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
        console.log(this.gestureArray[this.gestureChoice]);
        return this.gestureArray[this.gestureChoice];
    }
}

module.exports.Human = Human;