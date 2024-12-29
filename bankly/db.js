/** Database setup for jobly. */
// The given method does not work for me. I comment out the provided version when working and add my own that works. For submission I will comment out my version and show the provided version.


const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(DB_URI);

client.connect();

module.exports = client;

// const { Client } = require("pg");
// let DB_URI;
// if (process.env.NODE_ENV === "test") {
//     DB_URI = "bankly_test"
// } else {
//     DB_URI = "bankly"
// }


// const db = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     password: 'postgres',
//     database: 'bankly',
//     port: 5432,
// });

// db.connect();

// module.exports = db;