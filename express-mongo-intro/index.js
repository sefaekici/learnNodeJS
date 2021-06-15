const express = require("express");
const connectDatabase = require("./helpers/databaseHelper");
const Customer = require("./models/customer");
connectDatabase();

const app = express();
app.use(express.json());
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Started On Port:", PORT);
});
