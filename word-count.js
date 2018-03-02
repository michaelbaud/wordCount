function Words() {
  this.count = function (string) {
    var obj = {}
    words = string.toLowerCase();
    words.replace(/\s'(\w+)'\s/, ' '+'$1'+' ')
    .replace(/[,.:¿?!¡&@$%^&"]/g, ' ').match(/\S+/g)
    .forEach(function(input) {
      obj[input] = obj.hasOwnProperty(input) ? obj[input] + 1 : 1;
    })
    return obj
  }
}

module.exports = Words;