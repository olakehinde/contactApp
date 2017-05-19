module.exports.show = function(element, reqclass) {
	element.classList.add(reqclass);
}

module.exports.hide = function(element, reqclass) {
	element.classList.remove(reqclass);
}
