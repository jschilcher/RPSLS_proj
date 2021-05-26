"use strict";

const { Player } = require("./player");

class Computer extends Player{
    constructor(name){
        super(name);
    }
    computerRandomGesture(array){
        let randomIndex = Math.floor(Math.random() * array.length);
        let computerGesture = array[randomIndex]
        return computerGesture;
    }

}

module.exports.Computer = Computer;