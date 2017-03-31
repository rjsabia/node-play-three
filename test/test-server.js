const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');
const should = chai.should();

chai.use(chaiHttp);

describe('Hello World', function() {

  it('should get text hello world', function() {
    
    return chai.request(app)
      .get('/')
      .then(function(res) {
        res.should.have.status(200);
        res.body.message.should.equal('Hello World');
      });
  });
});