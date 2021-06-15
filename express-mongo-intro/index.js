const express = require("express");
const connectDatabase = require("./helpers/databaseHelper");

connectDatabase();

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Started On Port:", PORT);
});
