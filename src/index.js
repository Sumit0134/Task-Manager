const express = require("express");

const path = require("path");
const fs = require("fs");

const colors = require("colors");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { serverConfig } = require("./config");

app.get("/", (req, res) => {
  fs.readdir(path.join(__dirname, "taskFiles"), (err, files) => {
    if (err) {
      res.send("No task files found");
    } else {
      res.render("home", { title: "Task Manager - Home", tasks: files });
    }
  });
});

app.post("/create", (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.redirect("/");
    return;
  }
  fs.writeFile(
    path.join(
      __dirname,
      "taskFiles",
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

app.get("/tasks/:taskName", (req, res) => {
  fs.readFile(
    path.join(__dirname, "taskFiles", `${req.params.taskName}`),
    (err, data) => {
      if (err) {
        res.send("Something went wrong while getting task");
      } else {
        res.render("task", {
          title: "Task Manager - Task",
          taskName: req.params.taskName,
          taskDescription: data.toString(),
        });
      }
    }
  );
});

app.get("/edit/:taskName", (req, res) => {
  fs.readFile(
    path.join(__dirname, "taskFiles", `${req.params.taskName}`),
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

app.post("/update/:taskName", (req, res) => {
  if(!req.body.previousTitle || !req.body.newTitle || !req.body.description){
    res.redirect("/");
    return;
  }

  const oldPath = req.body.previousTitle;
  const newPath = req.body.newTitle;
  const description = req.body.description;

  fs.rename(
    path.join(__dirname, "taskFiles", `${oldPath}`),
    path.join(__dirname, "taskFiles", `${newPath}`),
    (err) => {
      if (err) {
        res.send("Something went wrong while updating task");
      } else {
        fs.writeFile(
          path.join(__dirname, "taskFiles", `${newPath}`),
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
});

app.get("/delete/:taskName", (req, res) => {
  fs.unlink(
    path.join(__dirname, "taskFiles", `${req.params.taskName}`),
    (err) => {
      if (err) {
        res.send("Something went wrong while deleting task");
      } else {
        res.redirect("/");
      }
    }
  );
});

app.listen(serverConfig.PORT, () => {
  console.log(
    `${process.env.APP_NAME} `.green +
      `is running on port: `.yellow +
      `${serverConfig.PORT}`.cyan
  );
});
