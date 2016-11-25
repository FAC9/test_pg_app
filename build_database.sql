BEGIN;

DROP TABLE IF EXISTS people cascade;

CREATE TABLE people (
  id           SERIAL        PRIMARY KEY NOT NULL,
  firstName    VARCHAR(100)  NOT NULL,
  surname      VARCHAR(100)  NOT NULL,
  superpower   VARCHAR(100)  NOT NULL,
  age          SMALLINT      NOT NULL,
  glasses      BOOLEAN       NOT NULL    DEFAULT  TRUE
);

INSERT INTO people(firstName, surname, superpower, age) VALUES (
  'Marina', 'Sideri', 'Mind-reading', 29);
INSERT INTO people(firstName, surname, superpower, age) VALUES (
  'Tom', 'Barrett', 'Flight', 27);
INSERT INTO people(firstName, surname, superpower, age, glasses) VALUES (
  'Will', 'Savage', 'Invisibility', 24, false);
INSERT INTO people(firstName, surname, superpower, age) VALUES (
  'Nori', 'Denes', 'Seeing the future', 24);

COMMIT;