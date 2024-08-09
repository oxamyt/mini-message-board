const db = require("../db/queries");

async function getMessagesGet(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Message board", messages: messages });
  } catch (err) {
    console.error(err);
  }
}

async function addMessageGet(req, res) {
  res.render("form", { title: "Write your message" });
}

async function addMessagePost(req, res) {
  try {
    const { username, messagedata } = req.body;
    await db.insertMessage({ username, messagedata });
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
}

async function messageSearchGet(req, res) {
  try {
    const messageId = parseInt(req.params.id);
    const message = await db.findMessage(messageId);
    console.log(message);
    res.render("message", { message: message });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getMessagesGet,
  addMessageGet,
  addMessagePost,
  messageSearchGet,
};
