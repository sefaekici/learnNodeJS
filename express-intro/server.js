const express = require("express");
const { accessControl, defaultMiddleware } = require("./middleware");
const users = [
  { id: 1, name: "Sefa Ekici", place: "Samsun" },
  { id: 2, name: "Aleyna Dikal", place: "Tokat" },
];

const app = express();
const PORT = 5000;

//daha önceden bodyParser ile json verileri alınabiliordu ancak son güncellemeler ile express js içerisine json eklendi.
//use function ile birlikte tüm uygulamada kullanılır hale getirirldi(bir nevi middleware)
app.use(express.json());

//bu şekilde yapılır ise bütün routelarda middleware çalışır(kendinden sonra tanımlanan bütün routelarda)
//app.use(accessControl);

app.listen(PORT, () => {
  console.log(`Server Started On Port:${PORT}`);
});

//Get Request
//localhost:5000/users get isteği atıldığında geriye users json objesini döner.
//burada yer alan req res ve next parametreleri handler olarak isimlendirirlir.
//ikinci parametre olarak verilen accessControl middleware dir sadece /users get işleminde çalışır.
//array şeklinde parametre vererek iki adet middleware de kullanılabilir.
app.get("/users", [accessControl, defaultMiddleware], (req, res, next) => {
  //get isteğine karşılık dönücek olan response(json) res.send() şeklinde de get isteğine response dönülebilir.
  res.json({
    success: true,
    data: users,
  });
});

//ekleme yapmak için kullanılır yani users tablosuna yada arrayine ekleme yapılır.
app.post("/users", (req, res, next) => {
  console.log(req.body);
  users.push(req.body);
  console.log(users);
  res.json({
    success: true,
    data: "POST Request",
  });
});

//users tablosunu güncellmek için veya spesifik id li bir kullanıcıyı güncellmek için kullanılır.
//users/1 vb. pathler
//pathden gelen id li kullanıcıyı body değerinden gelen değerler ile günceller.
app.put("/users/:id", (req, res, next) => {
  //req.params pathde verilen değerleri alır.
  const id = parseInt(req.params.id);
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      //json verisi ile gönderilmeyen değerler aynı kalır gönderilen değerler güncellenir.Burada spread öperatörü bu işlemi sağlar.
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({
    success: true,
    data: users,
  });
});

app.put("/users", (req, res, next) => {
  res.json({
    success: true,
    data: "DELETE Request",
  });
});
