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

const {
  createTask,
  readTask,
  editTask,
  updateTask,
  deleteTask,
} = require("./routes");

app.get("/", (req, res) => {
  fs.readdir(path.join(__dirname, "taskFiles"), (err, files) => {
    if (err) {
      res.send("No task files found");
    } else {
      res.render("home", { title: "Task Manager - Home", tasks: files });
    }
  });
});

app.use("/create", createTask);

app.use("/tasks", readTask);

app.use("/edit", editTask);

app.use("/update", updateTask);

app.use("/delete", deleteTask);

app.listen(serverConfig.PORT, () => {
  console.log(
    `${process.env.APP_NAME} `.green +
      `is running on port: `.yellow +
      `${serverConfig.PORT}`.cyan
  );
});
