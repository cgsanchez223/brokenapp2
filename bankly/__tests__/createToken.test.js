const jwt = require("jsonwebtoken");
const request = require('supertest');
const createToken = require('../helpers/createToken')


// Fixes Bug
describe('createToken', () => {
    it('throws error for invalid key', () => {
        const SECRET_KEY = {}
        const test = createToken('test_username')
        expect(() => test()).toThrow()
    })

    it('returns token for normal input', () => {
        const SECRET_KEY = "abc123";
        const token = createToken('test_username', false);
        expect(token).toEqual(expect.any(String));
    });
})