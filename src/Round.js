const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.cardCounter = 0;
    this.currentCard = deck.cards[this.cardCounter];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.currentCard);
    this.turns ++;
    if (currentTurn.guess === this.currentCard.correctAnswer) {
      return "correct!"
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      return "incorrect!"
    }
  }
}


module.exports = Round;