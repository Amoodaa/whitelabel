const { Router } = require("express");
const { join } = require("path");
const {
  promises: { writeFile },
} = require("fs");
const admin = Router();

admin.get("/theme", (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "client", "antd.customize.json")
  );
});

admin.post("/theme", (req, res, next) => {
  writeFile(
    join(__dirname, "..", "..", "..", "client", "antd.customize.json"),
    JSON.stringify(req.body)
  )
    .then(() => {
      res.send("UPDATED");
    })
    .catch(next);
});

admin.get("/", (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "admin", "build", "index.html")
  );
});

module.exports = admin;
