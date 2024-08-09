const express = require("express");
const path = require("path");
const port = 3000;
require("dotenv").config();

const indexRouter = require("./routes/indexRouter");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
