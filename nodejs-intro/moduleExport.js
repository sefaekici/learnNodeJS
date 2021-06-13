//Dışarıya nasıl export edilirse o şekilde davranır örneğin objeler obje gibi stringler ise string davranışı gösterirler.
let sayHello = function () {
  return "Hello!";
};

let sayGoodBye = function () {
  return "Goodbye..";
};

//çoklu modül export işlemi
module.exports = {
  sayHello,
  sayGoodBye,
};
