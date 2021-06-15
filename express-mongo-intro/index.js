const express = require("express");
const mongoose = require("mongoose");

//mongo db ye bağlanma işlemi ikinci paremetre olarak verilen nesne ise Deprecation Warnings olarak adlandırılan uyarı mesajlaraını engellemek içindir.
mongoose.connect("mongodb://localhost:27017/mongoDbIntro", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Started On Port:", PORT);
});
