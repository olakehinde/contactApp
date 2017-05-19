var name, phone;

module.exports.setName = function(field) {
	name =  field.value;
}

module.exports.setPhone = function(field) {
	phone =  field.value;
}

module.exports.getName = function() {
	return name;
}

module.exports.getPhone = function() {
	return phone;
}