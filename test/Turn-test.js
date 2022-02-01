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
  })

  it.skip('should instantiate a new Card object', function() {
    const card = new Card();
    const turn = new Turn('array', card);
    expect(card).to.be.an.instanceOf(Card);
  })




})