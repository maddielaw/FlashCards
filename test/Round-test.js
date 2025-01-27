const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  
  beforeEach(function() {
    card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should have a deck', function() {
    expect(round.deck.cards).to.equal(cards)
  });

  it('should return the current card as the first card in the deck by default', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should be able to play a turn', function() {
    const turn = new Turn("object", card1);
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should update the turn count when a turn has been played', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn("object", card1);
    expect(round.turns).to.equal(1);
  });

  it('should update current card to the next card in the deck after a turn is played', function() {
    expect(round.currentCard).to.equal(deck.cards[0]);
    round.takeTurn("object");
    expect(round.currentCard).to.equal(deck.cards[1]);
  });

  it('should store incorrect guesses', function() {
    round.takeTurn("function", card1);
    expect(round.incorrectGuesses.length).to.equal(1)
  });

  it('should print feedback on whether guess is correct or incorrect', function() {
    expect(round.takeTurn("object")).to.equal('correct!')
    expect(round.takeTurn("function")).to.equal('incorrect!')
  });

  it('should calculate the percentage of correct answers', function() {
    round.turns = 25;
    round.incorrectGuesses = [1, 2, 3, 4, 5];
    expect(round.calculatePercentageCorrect()).to.equal(20)
  });

  it('should be able to end the round and tell player how many correct guesses they had', function() {
    round.turns = 25;
    round.incorrectGuesses = [1, 2, 3, 4, 5];
    round.minutes = 1;
    round.seconds = 30;

    expect(round.endRound()).to.equal(`
    ________________________________________________________
    
    ** Round over! ** You answered 20% of the questions correctly in 1 minutes 30 seconds!

    ________________________________________________________`)
  });
});