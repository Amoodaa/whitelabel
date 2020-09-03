const { Router } = require("express");
const { join } = require("path");

const client = Router();

client.get("/", (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "client", "build", "index.html")
  );
});

module.exports = client;
