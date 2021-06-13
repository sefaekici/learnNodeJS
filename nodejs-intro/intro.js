//http modülü import edildi.http modülü web sunucusu oluşturmak için kullanılır.
const http = require("http");
const { title } = require("process");
const log = require("./log");

//birden çok yapılan export işleminde isimleriyle direkt olarak süslü parantez ile alınabilir.
const { sayHello, sayGoodBye } = require("./moduleExport");
const { readFile, writeFile, appenFile } = require("./fileStream");

const port = 5000;

//request yapılan istektir,response ise bu istek sonucu sunucu tarafından verilen cevaptır.
//response.end gönderilen cevabı verir listen ise hangi portta başlayacağını belirler.
const server = http.createServer((request, response) => {
  //eğer request url /admin ise admin sayfasi yazısı çıkar değilse anasayfa yazısı çıkar end her halükarda çalışmak zorundadır.
  if (request.url == "/admin") {
    //html yapıları gönderilebilir.
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      "<html><head><title>Admin</title></head><body>Admin</body></html>"
    );
  } else if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      "<html><head><title>Anasayfa </title></head><body>Anasayfa </body></html>"
    );
  } else if (request.url == "/customers") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ name: "Sefa", lastName: "Ekici" }));
  }

  //end isteği bitirir olmak zorundadır.
  response.end("Merhaba Ilk Nodejs Server");
});

server.listen(port, () => {
  console.log("Server Started");
});

log.information("Sunucu Yayına Geçti....");
console.log(sayHello());
console.log(sayGoodBye());
readFile();
writeFile("Sefa Ekici Buraya Geldi....");
appenFile("Deneme2");
