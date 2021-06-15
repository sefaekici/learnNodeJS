const mongoose = require("mongoose");

//customer modeli veri tabanında oluşturulmak üzere dahil edildi.
const Customer = require("../models/customer");
const Car = require("../models/cars");
// let Customer1 = new Customer({
//   name: "Burak Ekici",
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

//Databaseden veri getirme işlemi eğer {} olarak verilmiş olsaydı bütün dataları getirmiş olcaktı
// Customer.find({ name: "Sefa Ekici" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Customer Veri Tabanına Kaydetme İşlemi
// Customer1.save()
//   .then(() => console.log("Kaydetme Başarılı"))
//   .catch((err) => console.log(err));

//Car Kaydetme İşlemi
// let Car1 = new Car({
//   age: 12,
//   model: "Volvo",
// });

// Car1.save();

//Customer FindById
// Customer.findById("60c8df0a9fcfae22e8f87924")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Queryler wheere komutu hangi fieldın kontrol edileceğini equals ise neye eşit olacağını belirler uyuşan değerler getirilir.
//Limit fonksiyonu ise verdiğimiz değere göre örneğin 1 verilirse ilk bulduğu kaydı 2 denilirse ilk ikisini getirir.
//Genelde limit fonksiyonu sayfalama işlemleri için kullanılır örneğin her sayfanın 10 arlı olması gibi.
Customer.find({}, (err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data);
})
  .where("city")
  .equals("Samsun")
  .limit(1);

//Arabaların hepsini çek içerisinde yaşı 12 den büyük olanlardan ilkini getir. gt=>büyükleri gte=>büyük eşitleri lt=>küçükleri lte=>küçük eşitleri
Car.find({}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
  .where("age")
  .gt(12)
  .limit(1);

//12 den büyük 15 den küçük eşit olanlar
Car.find({}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
  .where("age")
  .gt(12)
  .lte(15)
  .limit(1);

//12 den büyük 15 den küçük eşit olanların sadece model alanını getir.Select spesific bir alan getirilmek istendiğinde kullanılır.
Car.find({}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
  .where("age")
  .gt(12)
  .lte(15)
  .limit(1)
  .select("model");

module.exports = connectDatabase;
