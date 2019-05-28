const request = require('supertest');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const index = require('../utils/index');

/* Stub here before the server is required */
const stub = sinon.stub(index, 'isValid');

const { server } = require('../app');
const { url } = require('../config.json')['test'];

describe('isValid Test', () => {
  it('Should redirects an error when the url is not valid', async () => {
    stub.withArgs(url).resolves(true);

    const { status } = await request(server).get('/');

    expect(status).to.equal(200);
  });
});