const mongoose = require("mongoose");

const connectDatabase = () => {
  //mongo db ye bağlanma işlemi connect fonksiyonuna ikinci paremetre olarak verilen nesne ise Deprecation Warnings olarak adlandırılan uyarı mesajlaraını engellemek içindir.
  mongoose
    .connect("mongodb://localhost:27017/mongoDbIntro", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Veri Tabani Baglantisi Basarili..."))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
