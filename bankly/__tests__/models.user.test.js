const config = require("../config");
const db = require("../db");
const bcrypt = require("bcrypt");
const createToken = require("../helpers/createToken");
const {authenticate, get, getAll} = require('../models/user');

// Create tokens for sample users
const tokens = {};

// Fixes Bug
describe('user model getAll', () => {
    beforeEach(async function() {
        async function _pwd(password) {
            return await bcrypt.hash(password, 1);
        }

        let sampleUsers = [
            ["test1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
            ["test2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
            ["test3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true]
        ];

        for (let user of sampleUsers) {
            await db.query(
                `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                user
            );
            tokens[user[0]] = createToken(user[0], user[6]);
        }
    });

    it('should work for valid user', async () => {
        const test = await authenticate("test1", "pwd1");
        expect(test).toEqual(expect.any(Object));

        const token = createToken(test)

        const g = await getAll()
        expect(g).toEqual( [
            {
                username: 'test1',
                first_name: 'fn1',
                last_name: 'ln1',
                email: 'email1',
                phone: 'phone1'
            },
            {
                username: 'test2',
                first_name: 'fn2',
                last_name: 'ln2',
                email: 'email2',
                phone: 'phone2'
            },
            {
                username: 'test3',
                first_name: 'fn3',
                last_name: 'ln3',
                email: 'email3',
                phone: 'phone3'
            }
        ])
    });

    it('should throw error for invalid username and password', async () => {
        const test = await authenticate('opapjdjfpoaj', 'adfhjpoasjd')
        expect(() => test()).toThrow()
    })

    afterEach(async function() {
        await db.query("DELETE FROM users");
    });
})

describe('user model get', () => {
    beforeEach(async function() {
        async function _pwd(password) {
            return await bcrypt.hash(password, 1);
        }

        let sampleUsers = [
            ["test1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
            ["test2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
            ["test3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true]
        ];

        for (let user of sampleUsers) {
            await db.query(
                `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                user
            );
            tokens[user[0]] = createToken(user[0], user[6]);
        }
    });

    it('should get users', async function() {
        const test = await authenticate("test1", "pwd1");
        expect(test).toEqual(expect.any(Object));

        const token = createToken(test)
        const g = await get('test1')
        expect(g).toEqual({
            username: 'test1',
            first_name: 'fn1',
            last_name: 'ln1',
            email: 'email1',
            phone: 'phone1'
        })
    });

    it('should not get users if not authenticated', async function() {
        const g = await get('test1')
        expect(() => g()).toThrow()
    })

    afterEach(async function() {
        await db.query("DELETE FROM users");
    });
})

afterAll(function() {
    db.end();
});