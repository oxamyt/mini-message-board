const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// GET home page
router.get("/", userController.getMessagesGet);

// GET new form page
router.get("/new", userController.addMessageGet);

// POST new form page
router.post("/new", userController.addMessagePost);

// GET details page
router.get("/messages/:id", userController.messageSearchGet);

module.exports = router;
