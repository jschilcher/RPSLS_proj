"use strict";

const { Player } = require("./player");

class Computer extends Player{
    constructor(name){
        super(name);
    }

}

module.exports.Computer = Computer;