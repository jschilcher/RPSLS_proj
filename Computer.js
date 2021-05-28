"use strict";

const { Player } = require("./player");

class Computer extends Player{
    constructor(name){
        super(name);
    }
    computerRandomGesture(array){
        let randomIndex = Math.floor(Math.random() * array.length);
        this.gestureChoice = array[randomIndex]
        return this.gestureChoice;
    }

}

module.exports.Computer = Computer;