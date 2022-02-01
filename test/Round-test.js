const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should have a deck', function() {
    const cards = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.deck).to.equal(deck)
  });

  it.skip('should return the current card being played', function() {
    const cards = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it.skip('should be able to play a turn', function() {
    const cards = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(deck.cards[1]);

    


  })







})