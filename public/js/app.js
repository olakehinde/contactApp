var view 	= require('./view.js');
var save 	= require('./savecontact.js');
var router = require('./router.js');
var contactlist = require('./contactlist.js');

var contactlist = document.getElementById('contacts');
var form = document.getElementById('add-contact');

//invoke the router.show() to display the form page 
router.show(form, "module-active");

//add an event listener to the form when the submit button is clicked
form.addEventListener('submit', function(e) {

	//get the name element from the form
	var docname = document.getElementById('name');

	//get the phone element from the form 
	var docphone = document.getElementById('phone');

	//set the name input in the view module
	view.setName(docname);

	//set the phone input in the view module
	view.setPhone(docphone);

	//invoke the getName() to get the name input from the form and assign to var name
	var name = view.getName();

	//invoke the getPhone() to get the phone input from the form and assign to var phone
	var phone = view.getPhone();

	//invoke the router.show() to display the contactlist page
	router.show(contactlist, "module-active");

	//invoke the router.hide() to hide the form page when the contactlist page is displayed
	router.hide(form, "module-active");

	var list = document.getElementById('contact-list');

	//create an html element on the fly
	var li = document.createElement("li");

	//assign the input name and phone number to var txt
	var txt = name + " " + phone;

	//create a textnode for the newly created element and pass/assign var txt into it
	var txtcontent = document.createTextNode(txt);

	//append a childNode for the newly created element and assign var txtcontent to it
	li.appendChild(txtcontent);

	//append the newly created element as a childnode of the main page (i.e list)
	list.appendChild(li);
	
	//prevent the dedault click event (i.e loading/reloading a page) from happening
	e.preventDefault();
}, false);

	var mute = document.getElementById('click');

	//add an eventlistener when a click event occurs
	mute.addEventListener('click', function(e) {

	//invoke the showAlert() to display a modal page
	showAlert();

	//invoke the hideAlert() to hide a modal page
	hideAlert();

	//prevent the dedault click event (i.e loading/reloading a page) from happening
	e.preventDefault();
	}, false);

//function to display a hidden modal form
function showAlert() {
	router.show(form, "module-active");
}

//function to hide a modal form
function hideAlert() {
	router.hide(contactlist, "module-active");
}