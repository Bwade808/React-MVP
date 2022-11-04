
DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS chores;
CREATE TABLE person (
    pers_Id SERIAL PRIMARY KEY,
    nickname VARCHAR(20),
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);

CREATE TABLE chores (
    id SERIAL PRIMARY KEY,
    chore VARCHAR(50),
    descript TEXT,
    allowance INTEGER,
    isDONE BOOLEAN,
    freq VARCHAR(20),
    pers_Id SERIAL,
    CONSTRAINT fk_personChore FOREIGN KEY(pers_Id) REFERENCES person(pers_Id) ON DELETE CASCADE
);