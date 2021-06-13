/*
    Middleware:Ara katman yani requestleri kontrol edip daha sonradan isteği yollayan katmandır
    örnğin bir kullanıcı giriş yapmadığı taktirde uygulamaya not ekleyememesi gerekiyor 
    giriş yaoma isteğini her rout için ayrı ayrı kontrol etmek yerine middleware kullanılarak bu şekilde bu
    konuda best practise ulaşılmış olunur.Middleware izin vermez ise response ilgili adrese ulaşamaz.
*/

//middleware request response ve next parametreleri alır.
const accessControl = (req, res, next) => {
  //kullanıcı girişi durumu olarak görülebilir.
  const acsess = true;

  if (!acsess) {
    //status code da bu şekilde gönderilebilir.
    res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  } else {
    //next parametresi route a yönlendirme olabileceğini belirleyen fonksiondur(vue route guarddaki aynı mantık)
    next();
  }
};

const defaultMiddleware = (req, res, next) => {
  console.log("Default Middleware!");
  next();
};

module.exports = {
  accessControl,
  defaultMiddleware,
};
