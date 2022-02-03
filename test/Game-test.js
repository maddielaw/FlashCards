const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {

  beforeEach(function() {
    card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game();
  })

  it('should be able to create a deck of cards', function() {
    game.start();
    expect(deck.cards[0]).to.be.an.instanceOf(Card)
    expect(deck.cards.length).to.equal(3);
  });

  it('should be able to start a new round', function() {
    expect(game.currentRound).to.equal(null)
    game.start();
    expect(game.currentRound).to.be.instanceOf(Round)
  })
})