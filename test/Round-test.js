const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should have a deck', function() {
    const card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.deck).to.equal([card1, card2, card3])
  });

  it.skip('should return the current card being played', function() {
    const card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it.skip('should be able to play a turn', function() {
    const card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(deck.cards[1]);




  })







})