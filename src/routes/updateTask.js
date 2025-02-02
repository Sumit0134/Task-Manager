const express = require("express");

const router = express.Router();

const path = require("path");
const fs = require("fs");

router.post("/:taskName", (req, res) => {
  if (!req.body.previousTitle || !req.body.description) {
    res.redirect("/");
    return;
  }

  const addExtention = (fileName) => {
    if (!fileName.endsWith(".txt")) {
      return `${fileName}.txt`;
    }
    return fileName;
  };

  const oldPath = req.body.previousTitle;
  const newPath = req.body.newTitle ? addExtention(req.body.newTitle) : oldPath;
  const description = req.body.description;

  if (newPath === oldPath) {
    fs.writeFile(
      path.join(__dirname, "../taskFiles", `${newPath}`),
      description,
      (err) => {
        if (err) {
          res.send("Something went wrong while updating task");
        } else {
          res.redirect("/");
        }
      }
    );
  } else {
    fs.rename(
      path.join(__dirname, "../taskFiles", `${oldPath}`),
      path.join(__dirname, "../taskFiles", `${newPath}`),
      (err) => {
        if (err) {
          res.send("Something went wrong while updating task");
        } else {
          fs.writeFile(
            path.join(__dirname, "../taskFiles", `${newPath}`),
            description,
            (err) => {
              if (err) {
                res.send("Something went wrong while updating task");
              } else {
                res.redirect("/");
              }
            }
          );
        }
      }
    );
  }
});

module.exports = router;
