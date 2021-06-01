"use strict";

const { Player } = require("./player");

class Computer extends Player{
    constructor(name){
        super(name);
        this.computerRandomGesture(this.gestureArray);
    }
    computerRandomGesture(array){
        let randomIndex = Math.floor(Math.random() * array.length);
        this.gestureChoice = array[randomIndex]
        console.log(this.gestureChoice);
        return this.gestureChoice;
    }

}

module.exports.Computer = Computer;