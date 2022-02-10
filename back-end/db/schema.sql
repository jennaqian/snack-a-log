DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT,
    fiber NUMERIC DEFAULT 0, 
    protein NUMERIC DEFAULT 0,
    added_sugar NUMERIC DEFAULT 0,
    is_healthy BOOLEAN
);

