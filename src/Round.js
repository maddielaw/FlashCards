class Round {
  constructor(deck) {
    this.deck = deck;
    this.cardCounter = 0;
    this.currentCard = deck.cards[this.cardCounter];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
}


module.exports = Round;