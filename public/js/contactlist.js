var savecontact = require('./savecontact.js');
var view = require('./view.js');

var contactlist = document.getElementById('contact-list');

function updateContact() {
	contactlist.secondChild.nodeValue = "we gat here";//saveContact.saveContact(view);
}
//exports.saveContact = saveContact;
exports.updateContact = updateContact;