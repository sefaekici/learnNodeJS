const mongoose = require("mongoose");

//Mongoose dan oluşturulan şema nesnesi.
const Schema = mongoose.Schema;

//Schema nesnesinden Customer için özel şema oluşturuldu.
//Kullanıcıya gelicek olan verilerin şeması code first yaklaşımı ile oluşturulmuş oldu.(Örneğin Entity Framework)
const CustomerSchema = new Schema({
  name: String,
  city: String,
});

//Costemer isminde bir nesne dışarıya çıkarır bunun mongoDb de karşılığı Collectiondır Collectionun ismi ise Customerdır.
const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
