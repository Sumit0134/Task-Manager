const express = require("express");

const router = express.Router();

const path = require("path");
const fs = require("fs");

router.get("/:taskName", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../taskFiles", `${req.params.taskName}`),
    (err, data) => {
      if (err) {
        res.send("Something went wrong while getting task");
      } else {
        res.render("edit", {
          title: "Task Manager - Edit",
          taskName: req.params.taskName,
          taskDescription: data.toString(),
        });
      }
    }
  );
});

module.exports = router;
