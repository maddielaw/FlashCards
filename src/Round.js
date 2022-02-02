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
    this.cardCounter ++;
    if (currentTurn.guess === this.currentCard.correctAnswer) {
      return "correct!"
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      return "incorrect!"
    }
  }
  calculatePercentageCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
  }
}


module.exports = Round;