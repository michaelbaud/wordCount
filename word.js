function Words() {
	this.count = function (string) {
		var obj = {}
		string.split(' ').forEach(function(input) {
		  obj[input] = obj.hasOwnProperty(input) ? obj[input] +1 : 1;
		})
		return obj;
	}
}

module.exports = Words;