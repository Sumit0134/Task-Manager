const express = require("express");

const router = express.Router();

const path = require("path");
const fs = require("fs");

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.redirect("/");
    return;
  }
  fs.writeFile(
    path.join(
      __dirname,
      "../taskFiles",
      `${req.body.title.split(" ").join("_")}.txt`
    ),
    req.body.description,
    (err) => {
      if (err) {
        res.send("Something went wrong while creating task");
      } else {
        res.redirect("/");
      }
    }
  );
});

module.exports = router;
