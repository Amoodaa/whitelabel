const express = require("express");
const { join } = require("path");
const clientRouter = require("./routers/client");
const adminRouter = require("./routers/admin");
const morgan = require("morgan");

const app = express();

app.use(express.static(join(__dirname, "..", "..", "admin", "build")));
app.use(express.static(join(__dirname, "..", "..", "client", "build")));

app.use(morgan("dev"));
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/", clientRouter);

app.use((err, req, res, next) => {
  console.log(err);
});

module.exports = app;
