let log = {
  information: function (info) {
    console.log("Infromation:", info);
  },
  fault: function (faul) {
    console.log("Fault:", faul);
  },
};

//dosyayı modül olarak dışarıya export etti.
module.exports = log;
