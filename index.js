// console.log('Your project is running...'); 

const Card = require('./src/Card');
const data = require('./src/data');
const Deck = require('./src/Deck');
const Round = require('./src/Round');
const Game = require('./src/Game')
// const prototypeQuestions = data.prototypeData;
const util = require('./src/util');


const currentGame = new Game();

currentGame.start()


