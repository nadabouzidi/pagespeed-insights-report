const express = require("express");
require("dotenv").config();

const appRouter = require("./app.routes");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use("/", appRouter);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log("Listening on port ", port);
});
