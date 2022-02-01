const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card'); 

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should contain a user guess', function() {
    const turn = new Turn('array');
    expect(turn.guess).to.equal('array');
  });

  it.skip('should instantiate a new Card object', function() {
    const card = new Card();
    const turn = new Turn('array', card);
    expect(card).to.be.an.instanceOf(Card);
  });

  it.skip('should be able to return the guess', function() {
    const card = new Card();
    const turn = new Turn('array', card);
    expect(turn.returnGuess()).to.equal('array');
  });

  it.skip('should be able to return the current card', function() {
    const card = new Card();
    const turn = new Turn('array', card);
    expect(turn.returnCard()).to.equal(card)
  });

  it.skip('should be able to evaluate whether the guess is correct or not', function() {
    const card = new Card();
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(card.correctAnswer)
  });

  it.skip('should be able to alert user of correct or incorrect answer', function() {
    const card = new Card();
    const turn1 = new Turn('array', card);
    const turn2 = new Turn('object', card);

    expect(turn1.evauluateGuess()).to.equal(true)
    expect(turn2.evauluateGuess()).to.equal(false)

    expect(turn1.giveFeedback()).to.equal("Correct!");
    expect(turn2.giveFeedback()).to.equal("Incorrect!")
  });

})