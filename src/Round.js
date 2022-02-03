const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
    this.seconds = 0;
    this.minutes = 0;
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.currentCard);
    this.turns ++;
    currentTurn.evaluateGuess() ? null : this.incorrectGuesses.push(this.currentCard.id);
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard === this.deck.cards[30] ? `${currentTurn.giveFeedback()} ${this.endRound()}` : currentTurn.giveFeedback();
  };

  startTimer() {
    return this.currentCard != this.deck.cards[30] ? setInterval(() => this.formatTimer(), 1000) : null;
  };

  formatTimer() {
    this.seconds ++;
    if (this.seconds === 60) {
      this.minutes ++
      this.seconds = 0;
    }
  };

  calculatePercentageCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100
  };

  endRound() {
    return `
    ________________________________________________________
    
    ** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly in ${this.minutes} minutes ${this.seconds} seconds!

    ________________________________________________________`
  };
};


module.exports = Round;