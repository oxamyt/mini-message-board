const { Pool } = require("pg");
require("dotenv").config();

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;

module.exports = new Pool({
  connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`,
  ssl: { rejectUnauthorized: false },
});
