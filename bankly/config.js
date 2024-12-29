/** Shared config for application; can be req'd many places. */
// My Express gives errors with the given version. I comment that version out and use my own when working. For submission, I will comment my version out and leave the given version open.

require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql:///bankly_test'
    : 'postgresql:///bankly';

// const dotenvConfig = { path: process.env.NODE_ENV ? ".env" + process.env.NODE_ENV : ".env" }
// require("dotenv").config(dotenvConfig)

// const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

// const DB_USERNAME = process.env.DB_USERNAME
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_URI = process.env.DB_URI
// const PORT = +process.env.PORT || 3000;

// const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 10;


module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI,
  // DB_USERNAME,
  // DB_PASSWORD
};
