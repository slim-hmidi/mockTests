const request = require('supertest');
const { server } = require('../app');
const nock = require('nock');

jest.mock('../utils/index');
describe('isValid Test', () => {
    afterAll(() => {
        server.close();
    })

    it('Should redirects an error when the url is not valid', async() => {
        const { status, error } = await request(server).get('/');
        
        expect(status).toBe(400);
        expect(error.text.includes('Unable to redirect')).toBe(true)
        
    })
})