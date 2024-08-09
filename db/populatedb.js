const { Client } = require("pg");
require("dotenv").config();

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR (255),
  messagedata TEXT,
  date TIMESTAMP
);

INSERT INTO messages (username, messagedata, date) 
VALUES
  ('Bryan', 'Hi Im cool', NOW()),
  ('Odin', 'Hi Im cool', NOW()),
  ('Damon', 'Hi Im cool', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`,
    ssl: { rejectUnauthorized: false },
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    await client.end();
  }
}

main();
