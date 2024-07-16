const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

// GET home page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message board", messages: messages });
});

// GET new form page
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Write your message" });
});

// POST new form page
router.post("/new", function (req, res, next) {
  const messageText = req.body.messageText;
  const authorText = req.body.authorText;

  messages.push({
    text: messageText,
    user: authorText,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
