const fs = require("fs");

let readFile = function () {
  fs.readFile("dosya.txt", (error, data) => {
    if (error) {
      throw error;
    } else {
      //string'e çevrilirse buffer olan veriler stringe dönüşür.
      console.log(data.toString());
    }
  });
};

let writeFile = function (variable) {
  fs.writeFile("dosya2.txt", variable, (error) => {
    if (error) {
      throw error;
    }
    console.log("Yazildi...");
  });
};

let appenFile = function (variable) {
  fs.appendFile("dosya2.txt", variable, (error) => {
    if (error) {
      throw error;
    }
    console.log("Yazildi...");
  });
};

//fs.unlink dosyayı siler.

module.exports = {
  readFile,
  writeFile,
  appenFile,
};
