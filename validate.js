// get element from the DOM
const fullName = document.getElementById("FullName");
const phone = document.getElementById("Phone");
const zipCode = document.getElementById("ZipCode");
const password = document.getElementById("Password");
const eMail = document.getElementById("Email");

// Add Event Listener
fullName.addEventListener("blur", validateFullName);
phone.addEventListener("blur", validatePhone);
zipCode.addEventListener("blur", validateZipCode);
password.addEventListener("blur", validatePassword);
eMail.addEventListener("blur", validateEmail);

// Create Validation functions

function notValid(input){
	input.classList.remove('Valid');
	input.classList.add('notValid');
}

function Valid(input){
	input.classList.remove('notValid');
	input.classList.add('Valid');
}


function validateFullName(){
	const regEx_FullName = /^[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}(\s[a-zA-Z]{2,})?$/;

	if(!regEx_FullName.test(fullName.value)){
		notValid(fullName);
	}
	else
	{
		Valid(fullName);
	}
}

function validatePhone(){
	const regEx_Phone = /^(\d){3}([-|.|\s])?(\d){3}([-|.|\s])?(\d){4}$/;
	if(!regEx_Phone.test(phone.value)){
		notValid(phone);
	}
	else
	{
		Valid(phone);
	}
}
// /^\(?\d{3}\)?[-|.|\s]?\d{3}[-|.|\s]?\d{4}$/

function validateZipCode(){
	const regEx_ZipCode = /^(\d){5}(-(\d){4})?$/;
	if(!regEx_ZipCode.test(zipCode.value)){
		notValid(zipCode);
	}
	else
	{
		Valid(zipCode);
	}
}

function validatePassword(){
	const regEx_Password = /^[a-zA-Z0-9]{10}$/;
	if(!regEx_Password.test(password.value)){
		notValid(password);
	}
	else
	{
		Valid(password);
	}
}

function validateEmail(){
	const regEx_Email = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
	if(!regEx_Email.test(eMail.value)){
		notValid(eMail);
	}
	else
	{
		Valid(eMail);
	}
}

document.querySelector("form").addEventListener("submit",
(e) => {
e.preventDefault();

validateForm();
});


function validateForm(){
	const inputs = document.querySelectorAll("form input");

	if(fullName.classList.contains('Valid') && phone.classList.contains('Valid') && zipCode.classList.contains('Valid') && password.classList.contains('Valid') && eMail.classList.contains('Valid'))
	document.querySelector("form").submit();	
	else {
	 	alert("Validate All Fields");
	 	return;
	 } 
}


