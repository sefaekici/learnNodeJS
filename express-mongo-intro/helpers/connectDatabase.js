const mongoose = require("mongoose");

//customer modeli veri tabanında oluşturulmak üzere dahil edildi.
const Customer = require("../models/customer");

// let Customer1 = new Customer({
//   name: "Aleyna Dikal",
//   city: "Tokat",
// });

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

//Customer Veri Tabanına Kaydetme İşlemi
// Customer1.save()
//   .then(() => console.log("Kaydetme Başarılı"))
//   .catch((err) => console.log(err));

module.exports = connectDatabase;
