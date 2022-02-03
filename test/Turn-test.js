const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card'); 

describe('Turn', function() {

  beforeEach(function() {
    card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    turn1 = new Turn('array', card);
  })

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should contain a user guess', function() {
    const turn = new Turn('array');
    expect(turn.guess).to.equal('array');
  });

  it('should instantiate a new Card object', function() {
    expect(turn1.card).to.be.an.instanceOf(Card);
  });

  it('should be able to return the guess', function() {
    expect(turn1.returnGuess()).to.equal('array');
  });

  it('should be able to return the current card', function() {
    expect(turn1.returnCard()).to.equal(card)
  });

  it('should be able to evaluate whether the guess is correct or not', function() {
    const turn2 = new Turn('object', card);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to alert user of correct or incorrect answer', function() {
    const turn2 = new Turn('object', card);

    expect(turn1.giveFeedback()).to.equal("correct!");
    expect(turn2.giveFeedback()).to.equal("incorrect!")
  });

})