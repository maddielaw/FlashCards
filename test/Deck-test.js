const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it.skip('should have cards inside it', function() {
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
    expect(deck.cards).to.equal(cards);
  });

  it.skip('should be able to count cards in deck', function() {
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
    expect(deck.countCards()).to.equal(2)
  });
});