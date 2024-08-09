const pool = require("./pool");

async function getAllMessages() {
  const getQuery = "SELECT * FROM messages";
  const { rows } = await pool.query(getQuery);
  return rows;
}

async function insertMessage(message) {
  const insertQuery = `INSERT INTO messages (username, messagedata, date) 
VALUES
  ($1, $2, NOW())`;
  const values = [message.username, message.messagedata];

  await pool.query(insertQuery, values);
}

async function findMessage(id) {
  const findQuery = `SELECT * FROM messages WHERE id = $1`;
  const { rows } = await pool.query(findQuery, [id]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  insertMessage,
  findMessage,
};
