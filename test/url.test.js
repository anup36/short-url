process.env.NODE_ENV = 'test';

const request = require('supertest-as-promised');
const { assert } = require('chai');
const app = require('../config/express');

describe('Url', () => {
  describe('POST /api/shorten', () => {
    it('It should short the url: https://medium.com/@xoor/jwt-authentication-service-44658409e12c', (done) => {
      request(app)
        .post('/api/shorten')
        .send({
          url: 'https://medium.com/@xoor/jwt-authentication-service-44658409e12c',
        })
        .expect(201)
        .then((res) => {
          assert.equal(res.body.data);
          done();
        });
    });
  });

  describe('GET /api/:encodedId', () => {
    it('It should retrieve the shorten version of the url: https://medium.com/@xoor/jwt-authentication-service-44658409e12c', (done) => {
      request(app)
        .get(`/${base58.encode(1)}`)
        .expect(302, done);
    });
  });
});
