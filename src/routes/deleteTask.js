const express = require("express");

const router = express.Router();

const path = require("path");
const fs = require("fs");

router.get("/:taskName", (req, res) => {
  fs.unlink(
    path.join(__dirname, "../taskFiles", `${req.params.taskName}`),
    (err) => {
      if (err) {
        res.send("Something went wrong while deleting task");
      } else {
        res.redirect("/");
      }
    }
  );
});

module.exports = router;
