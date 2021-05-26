"use strict";
const {Player} = require('./player')

let jj = new Player("JJ")
let chosenGesture = jj.chooseGesture()
console.log(chosenGesture)
