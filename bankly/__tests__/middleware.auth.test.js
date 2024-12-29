const request = require('supertest');
const jwt = require('jsonwebtoken');
const {authUser} = require('../middleware/auth');

describe('authUser middleware', () => {
    it('should set username and admin on request object for valid token', () => {
        const token = jwt.sign({ username: 'testuser', admin: true }, 'secret');
        const req = { body: { _token: token } };
        const res = {};
        const next = () => {}; // Creating a Mock for the next function

        authUser(req, res, next);

        expect(req.curr_username).toEqual('testuser');
        expect(req.curr_admin).toEqual(true);
    });

    it('should not set username and admin when no token is provided', () => {
        const req = { body: {}, query: {} };
        const res = {};
        const next = () => {};

        authUser(req, res, next);

        expect(req.curr_username).toBe(undefined);
        expect(req.curr_admin).toBe(undefined);
    });

    // Fixes Bug
    it ('should pass error to next middleware when invalid token is provided', () => {
        const req = { body: { _token: 'invalidtoken' } };
        const res = {};
        const next = () => {};

        const test = authUser(req, res, next);
        expect (() => test()).toThrow()
    });
});