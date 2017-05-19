var view = require('./view.js');

function saveContact(view) {
	var saved = view.getName() + " " + view.getPhone();
}

	exports.saveContact = saveContact;