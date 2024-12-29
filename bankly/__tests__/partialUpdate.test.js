const sqlForPartialUpdate = require('../helpers/partialUpdate');

describe('sqlForPartialUpdate function', () => {
    it('should generate correct SQL query', () => {
        const table = 'users';
        const items = { name: 'Chris', age: 31 };
        const key = 'id';
        const id = 123;

        const { query } = sqlForPartialUpdate(table, items, key, id);

        expect(query).toBe('UPDATE users SET name=$1, age=$2 WHERE id=$3 RETURNING *');
    });

    it('should generate correct values array', () => {
        const table = 'users';
        const items = { name: 'Chris', age: 31 };
        const key = 'id';
        const id = 123;

        const { values } = sqlForPartialUpdate(table, items, key, id);

        expect(values).toEqual(['Chris', 31, 123])
    });

    it('should filter out underscore-prefixed keys', () => {
        const table = 'users';
        const items = { _name: 'Chris', age: 31, _status: 'active' };
        const key = 'id';
        const id = 123;

        const { values } = sqlForPartialUpdate(table, items, key, id);

        expect(values).not.toContain('_name');
        expect(values).not.toContain('_status');
    });
});