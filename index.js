"use strict";
const {Player} = require('./player')

let jenelle = new Player("Jenelle")
let chosenGesture = jenelle.chooseGesture()
console.log(chosenGesture)
