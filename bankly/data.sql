-- Need to add method to create database if it does not exist
DROP DATABASE IF EXISTS bankly;
CREATE DATABASE bankly;

\connect bankly;

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);

