

create TABLE users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255)
        
        
);

create TABLE score(
        id SERIAL PRIMARY KEY,
        score INTEGER,
        user_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id)
);

--resolve problem with coding system
-- \! chcp 1251