const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.cardCounter = 0;
    this.currentCard = deck.cards[this.cardCounter];
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.currentCard);
    this.turns ++;
    currentTurn.evaluateGuess() ? null : this.incorrectGuesses.push(this.currentCard.id);
    this.currentCard = this.deck.cards[++ this.cardCounter];

    return this.currentCard === this.deck.cards[30] ? `${currentTurn.giveFeedback()} ${this.endRound()}` : currentTurn.giveFeedback();
  };

  calculatePercentageCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100
  };

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
  }
};


module.exports = Round;